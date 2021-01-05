import React, { useMemo, useState } from 'react';

import { useTheme } from '../../theme/ThemeProvider';
import { Icon } from './WeatherIcon.styles';

export const WeatherIcon = ({ icon }) => {
  const { isDarkTheme } = useTheme();

  const iconUrlBuilder = () => {
    const iconCode = isDarkTheme ? icon.replace('d', 'n') : icon.replace('n', 'd');

    return `http://openweathermap.org/img/wn/${iconCode}@4x.png`;
  };

  const [uri, setUri] = useState(iconUrlBuilder());

  useMemo(() => {
    setUri(iconUrlBuilder());
  }, [isDarkTheme]);

  return (
    <Icon source={{ uri }} />
  );
};
