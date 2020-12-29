import React, {
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';
import { useColorScheme } from 'react-native-appearance';
import { ThemeProvider as StyledComponentsThemeProvider } from 'styled-components/native';

import { themeLight, themeDark } from './colors';

export const ThemeContext = createContext({
  isDarkTheme: false,
  setTheme: () => {},
});

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  // Can be dark | light | no-preference
  const colorScheme = useColorScheme();

  const [isDarkTheme, setIsDarkTheme] = useState(colorScheme === 'dark');

  useEffect(() => {
    setIsDarkTheme(colorScheme === 'dark');
  }, [colorScheme]);

  const themeValue = {
    setTheme: (scheme) => setIsDarkTheme(scheme === 'dark'),
    isDarkTheme,
  };

  return (
    <ThemeContext.Provider value={themeValue}>
      <StyledComponentsThemeProvider theme={isDarkTheme ? themeDark : themeLight}>
        {children}
      </StyledComponentsThemeProvider>
    </ThemeContext.Provider>
  );
};
