import React from 'react';
// eslint-disable-next-line import/no-unresolved
import { API_KEY, API_URL } from '@env';

import { SafeAreaView } from '../../components/StyleGuide';

export const WeatherInfo = () => {
  console.log({ API_KEY, API_URL });

  return (
    <SafeAreaView />
  );
};
