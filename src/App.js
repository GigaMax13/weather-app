import React from 'react';
import { AppearanceProvider } from 'react-native-appearance';
import { ThemeProvider } from './theme/ThemeProvider';

import { StatusBar } from './components/StyleGuide';
import { ThemeSwitch } from './views/ThemeSwitch';

export default function App() {
  return (
    <AppearanceProvider>
      <ThemeProvider>
        <StatusBar />
        <ThemeSwitch />
      </ThemeProvider>
    </AppearanceProvider>
  );
}
