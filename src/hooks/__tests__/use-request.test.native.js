import axios from 'axios';
import swr from 'swr';

import { useRequest } from '../use-request';
import { testHook } from './test-hook';

jest.mock('axios');
jest.mock('swr');

describe('use-request', () => {
  let hook;

  beforeEach(() => {
    hook = null
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should no nothing when has no request parameter', () => {
    testHook(() => {
      hook = useRequest();
    });

    expect(swr).toBeCalled();

    expect(swr.mock.calls[0][0]).toBeFalsy();
  });

  it('should fetch when receive a request object', () => {
    const mockRequest = {
      url: 'http://localhost:8080',
      params: {
        q: 'test'
      }
    };

    testHook(() => {
      hook = useRequest(mockRequest);
    });

    expect(swr).toBeCalled();

    expect(swr.mock.calls[0][0]).toEqual(JSON.stringify(mockRequest));
    expect(swr.mock.calls[0][1]).toEqual(expect.any(Function));
  });
});
