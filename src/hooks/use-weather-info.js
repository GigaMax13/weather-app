import { useEffect, useState } from 'react';
import { API_URL, API_KEY } from 'react-native-dotenv';
import { useLocation } from './use-location';
import { useRequest } from './use-request';

/**
 * TODO
 * Removes this workaround to actually load a .env
 * file during the jest --coverage only
 */
const ENV_API_URL = API_URL;
const ENV_API_KEY = API_KEY;

/**
 *
 * @param query {string}
 * @param {{lang: string, units: string}} [config={}]
 * @returns {{data, error}}
 */
export const useWeatherInfo = (query, config = {}) => {
  const { lang = 'pt_br', units = 'metric' } = config;
  const { hasPermission, coords } = useLocation();
  const [fetcher, setFetcher] = useState(null);
  const result = useRequest(fetcher);

  const apiUrl = ENV_API_URL || '';
  const appid = ENV_API_KEY || '';

  useEffect(() => {
    const url = `${apiUrl}/weather`;
    const params = {
      appid,
      units,
      lang,
    };

    if (hasPermission && !query) {
      setFetcher({
        url,
        params: {
          ...params,
          ...coords
        }
      });
    }

    if (query && query.length) {
      setFetcher({
        url,
        params: {
          ...params,
          q: query
        }
      });
    }
  }, [hasPermission, coords, query, lang, units]);

  return result;
};
