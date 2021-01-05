import axios from 'axios';
import useSWR from 'swr';

export function useRequest(request, { initialData, ...config } = {}) {
  return useSWR(
    request && JSON.stringify(request),
    () => axios(request || {}).then(({ data }) => data),
    {
      ...config,
      initialData: initialData && {
        status: 200,
        statusText: 'InitialData',
        headers: {},
        data: initialData
      }
    }
  );
}
