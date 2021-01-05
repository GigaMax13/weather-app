import React from 'react';
import { AppearanceProvider } from 'react-native-appearance';

import { ThemeProvider } from './theme/ThemeProvider';
import { StatusBar } from './components/StyleGuide';
import { Weather } from './views/Weather';

export default function App() {
  return (
    <AppearanceProvider>
      <ThemeProvider>
        <StatusBar />
        <Weather />
      </ThemeProvider>
    </AppearanceProvider>
  );
}
