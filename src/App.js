import React from 'react';
import { AppearanceProvider } from 'react-native-appearance';

import { ThemeProvider } from './theme/ThemeProvider';
import { StatusBar } from './components/StyleGuide';
import { WeatherInfo } from './views/WeatherInfo';

export default function App() {
  return (
    <AppearanceProvider>
      <ThemeProvider>
        <StatusBar />
        <WeatherInfo />
      </ThemeProvider>
    </AppearanceProvider>
  );
}
