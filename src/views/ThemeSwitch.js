import React from 'react';

import { useTheme } from '../theme/ThemeProvider';
import { Container, Switch } from '../components/StyleGuide';

export const ThemeSwitch = () => {
  const { setDarkTheme, isDarkTheme } = useTheme();

  return (
    <Container horizontallyCentered verticallyCentered>
      <Switch
        value={isDarkTheme}
        onValueChange={() => setDarkTheme(!isDarkTheme)}
      />
    </Container>
  );
};
