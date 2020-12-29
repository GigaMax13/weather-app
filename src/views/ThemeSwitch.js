import React from 'react';

import { useTheme } from '../theme/ThemeProvider';
import { Container, Switch } from '../components/StyleGuide';

export const ThemeSwitch = () => {
  const { setTheme, isDarkTheme } = useTheme();

  return (
    <Container horizontallyCentered verticallyCentered>
      <Switch
        value={isDarkTheme}
        onValueChange={() => {
          if (isDarkTheme) {
            setTheme('light');
          } else {
            setTheme('dark');
          }
        }}
      />
    </Container>
  );
};
