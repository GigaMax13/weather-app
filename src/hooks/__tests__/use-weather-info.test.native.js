import { useWeatherInfo } from '../use-weather-info';
import { useLocation } from '../use-location';
import { useRequest } from '../use-request';
import { testHook } from './test-hook';

jest.mock('../use-location', () => ({
  useLocation: jest.fn(),
}));

jest.mock('../use-request', () => ({
  useRequest: jest.fn(),
}));

describe('use-weather-info', () => {
  const mockCoords = {lon: -122.41, lat: 37.79};
  const mockData = {
   coord: {lon: -122.41, lat: 37.79},
   weather: [{id: 804,main: 'Clouds',description: 'Clouds',icon: '04d'}],
   base: 'stations',
   main: {temp: 13,feels_like: 12.29,temp_min: 11.67,temp_max: 14.44,pressure: 1017,humidity: 92},
   visibility: 10000,
   wind: {speed: 1.79,deg: 241,gust: 6.26},
   clouds: {all: 99},
   dt: 1609794940,
   sys: {type: 3,id: 2017837,country: 'US',sunrise: 1609773922,sunset: 1609808630},
   timezone: -28800,
   id: 5391959,
   name: 'San Francisco',
   cod: 200
  }
  let hook;

  beforeEach(() => {
    hook = null
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should do nothing when either has no permission or a query parameter', () => {
    useLocation.mockImplementation(() => ({
      hasPermission: false
    }));

    useRequest.mockImplementation(() => ({}));

    testHook(() => {
      hook = useWeatherInfo('');
    });

    const { data, error } = hook;

    expect(data).toBeUndefined();
    expect(error).toBeUndefined();
  });

  it('should fetch weather data by coordinates when have permission and has no query parameter', () => {
    useLocation.mockImplementation(() => ({
      hasPermission: true,
      coords: mockCoords
    }));

    useRequest.mockImplementation(() => ({
      data: mockData
    }));

    testHook(() => {
      hook = useWeatherInfo('');
    });

    const { data, error } = hook;

    expect(useRequest).toHaveBeenCalled();

    const fetcherQuery = useRequest.mock.calls[1][0];

    expect(fetcherQuery.params.lat).toEqual(mockCoords.lat);
    expect(fetcherQuery.params.lon).toEqual(mockCoords.lon);

    expect(data).toMatchObject(mockData);
    expect(error).toBeUndefined();
  });

  it('should fetch weather data by query when has no permission but have a query parameter', () => {
    useLocation.mockImplementation(() => ({
      hasPermission: false
    }));

    useRequest.mockImplementation(() => ({
      data: mockData
    }));

    testHook(() => {
      hook = useWeatherInfo('San Francisco');
    });

    const { data, error } = hook;

    expect(useRequest).toHaveBeenCalled();

    const fetcherQuery = useRequest.mock.calls[1][0];

    expect(fetcherQuery.params.lat).toBeUndefined();
    expect(fetcherQuery.params.lon).toBeUndefined();
    expect(fetcherQuery.params.q).toEqual('San Francisco');

    expect(data).toMatchObject(mockData);
    expect(error).toBeUndefined();
  });

  it('should fetch weather data by query even tho has permission', () => {
    useLocation.mockImplementation(() => ({
      hasPermission: true,
      coords: mockCoords
    }));

    useRequest.mockImplementation(() => ({
      data: mockData
    }));

    testHook(() => {
      hook = useWeatherInfo('San Francisco');
    });

    const { data, error } = hook;

    expect(useRequest).toHaveBeenCalled();

    const fetcherQuery = useRequest.mock.calls[1][0];

    expect(fetcherQuery.params.lat).toBeUndefined();
    expect(fetcherQuery.params.lon).toBeUndefined();
    expect(fetcherQuery.params.q).toEqual('San Francisco');

    expect(data).toMatchObject(mockData);
    expect(error).toBeUndefined();
  });
});
