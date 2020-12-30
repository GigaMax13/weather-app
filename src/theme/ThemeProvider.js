import React, {
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';
import { useColorScheme } from 'react-native-appearance';
import { ThemeProvider as StyledComponentsThemeProvider } from 'styled-components/native';

import { themeLight, themeDark } from './colors';

const ThemeContext = createContext({
  setDarkTheme: () => {},
  isDarkTheme: false,
});

export const useTheme = () => useContext(ThemeContext);

export const useProvider = () => {
  // Can be dark | light | no-preference
  const colorScheme = useColorScheme();

  const [isDarkTheme, setIsDarkTheme] = useState(colorScheme === 'dark');

  useEffect(() => {
    setIsDarkTheme(colorScheme === 'dark');
  }, [colorScheme]);

  return {
    context: {
      setDarkTheme: (isDark) => setIsDarkTheme(isDark === true),
      isDarkTheme
    },
    theme: isDarkTheme ? themeDark : themeLight,
  };
};

export const ThemeProvider = ({ children }) => {
  const { context, theme } = useProvider();

  return (
    <ThemeContext.Provider value={context}>
      <StyledComponentsThemeProvider theme={theme}>
        {children}
      </StyledComponentsThemeProvider>
    </ThemeContext.Provider>
  );
};
