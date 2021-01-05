import { useMemo, useReducer } from 'react';

import { usePermissions, LOCATION } from 'expo-permissions';
import * as Location from 'expo-location';

/**
 *
 * @returns {{
 *   askForPermission: function,
 *   hasPermission: boolean,
 *   error: error,
 *   coords: {
 *     lat: number,
 *     lon: number
 *   }
 * }}
 */
export const useLocation = () => {
  const [permission, askForPermission] = usePermissions(LOCATION, { ask: true });

  const initialState = {
    askForPermission: () => {},
    hasPermission: false,
    error: null,
    coords: {},
  };

  const types = {
    NO_PERMISSION: 'location/NO_PERMISSION',
    SET_COORDS: 'location/SET_COORDS',
    SET_ERROR: 'location/SET_ERROR'
  };

  const [state, dispatch] = useReducer((currentState, { type, payload }) => {
    switch (type) {
      case types.NO_PERMISSION:
        return {
          ...currentState,
          hasPermission: false,
          askForPermission,
          coords: {},
        };
      case types.SET_COORDS:
        return {
          hasPermission: true,
          askForPermission,
          coords: payload,
          error: null
        };
      case types.SET_ERROR:
        return {
          ...currentState,
          askForPermission,
          error: payload,
          coords: {},
        };
      default:
        return {
          ...currentState,
          askForPermission,
        };
    }
  }, initialState);

  useMemo(() => {
    let subscription = null;

    const watchPosition = () => {
      try {
        if (!permission || permission.status !== 'granted') {
          dispatch({ type: types.NO_PERMISSION });

          return;
        }

        if (subscription && subscription.constructor === Function) {
          subscription();
          subscription = null;
        }

        subscription = Location.watchPositionAsync({
          accuracy: Location.Accuracy.Balanced,
          // Receive updates only when the location has changed by at least this distance in meters
          distanceInterval: 1000,
          // Minimum time to wait between each update in milliseconds
          timeInterval: 1000
        }, (location) => {
          const {
            coords: {
              longitude: lon,
              latitude: lat,
            }
          } = location;

          dispatch({
            type: types.SET_COORDS,
            payload: {
              lat,
              lon
            }
          });
        });
      } catch (e) {
        dispatch({ type: types.SET_ERROR, payload: e.message });
      }
    };

    watchPosition();

    return function cancel() {
      if (subscription && subscription.constructor === Function) {
        subscription();
      }
    };
  }, [permission]);

  return state;
};
