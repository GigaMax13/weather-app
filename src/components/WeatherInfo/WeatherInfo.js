import React from 'react';
import { dayjs } from '../../lib/Day';

import { WeatherIcon } from '../WeatherIcon';
import {
  Wrapper,
  CityName,
  Temperature,
  WeatherInfoArea,
  Description,
  WeatherInfoRow,
  WeatherInfoText,
  IconTemperatureLow,
  IconTemperatureHigh,
  IconHumidity,
  IconWind,
  IconVisibility,
  IconSunRise,
  IconSunSet,
  IconPressure,
  WeatherFooter,
  WeatherFooterText,
} from './WeatherInfo.styles';
import { ButtonPrimary } from '../StyleGuide';

export const windAngle = (deg) => {
  if ((deg >= 338 && deg <= 360) || (deg >= 0 && deg <= 22)) {
    // N
    return 'Norte';
  }

  if (deg >= 23 && deg <= 67) {
    // NE
    return 'Nordeste';
  }

  if (deg >= 68 && deg <= 112) {
    // E
    return 'Leste';
  }

  if (deg >= 113 && deg <= 157) {
    // SE
    return 'Sudeste';
  }

  if (deg >= 158 && deg <= 202) {
    // S
    return 'Sul';
  }

  if (deg >= 203 && deg <= 247) {
    // SO
    return 'Sudoeste';
  }

  if (deg >= 248 && deg <= 292) {
    // O
    return 'Oeste';
  }

  // [293, 337] NO
  return 'Noroeste';
};

export const showLocalTime = (timestamp, timezone = 0, format = 'HH:mm') => (
  dayjs(Number((String(timestamp)).padEnd(13, '0'))).utcOffset(timezone / 60 / 60).format(format)
);

export const WeatherInfo = ({ data, mutate }) => {
  const {
    visibility,
    timezone,
    weather,
    name,
    dt,
    main: {
      feels_like: feels,
      temp_max: max,
      temp_min: min,
      humidity,
      pressure,
      temp
    },
    wind: {
      speed,
      deg,
    },
    sys: {
      sunrise,
      sunset,
    }
  } = data;
  const {
    description,
    icon,
  } = weather[0];

  return (
    <Wrapper>
      <CityName>
        {name}
      </CityName>

      <Temperature feels={feels} temp={temp}>
        <WeatherIcon icon={icon} />
      </Temperature>

      <WeatherInfoArea>
        <Description>
          {description}
        </Description>

        <WeatherInfoRow>
          <WeatherInfoRow noMarginLeft noMarginBottom>
            <IconTemperatureLow />
            <WeatherInfoText>
              Mínima:
              {` ${Math.floor(min)} ˚C`}
            </WeatherInfoText>
          </WeatherInfoRow>
          <WeatherInfoRow noMarginRight noMarginBottom>
            <IconTemperatureHigh />
            <WeatherInfoText>
              Máxima:
              {` ${Math.floor(max)} ˚C`}
            </WeatherInfoText>
          </WeatherInfoRow>
        </WeatherInfoRow>

        <WeatherInfoRow>
          <IconHumidity />
          <WeatherInfoText>
            Humidade relativa do ar:
            {` ${Math.floor(humidity)}%`}
          </WeatherInfoText>
        </WeatherInfoRow>

        <WeatherInfoRow>
          <IconWind />
          <WeatherInfoText>
            Vento:
            {` ${speed} m/s ${windAngle(deg)}`}
          </WeatherInfoText>
        </WeatherInfoRow>

        <WeatherInfoRow>
          <IconSunRise />
          <WeatherInfoText>
            Nascer do sol:
            {` ${showLocalTime(sunrise, timezone)}`}
          </WeatherInfoText>
        </WeatherInfoRow>

        <WeatherInfoRow>
          <IconSunSet />
          <WeatherInfoText>
            Por do sol:
            {` ${showLocalTime(sunset, timezone)}`}
          </WeatherInfoText>
        </WeatherInfoRow>

        <WeatherInfoRow>
          <IconVisibility />
          <WeatherInfoText>
            Visibildiade:
            {` ${Math.floor(visibility / 1000)} km`}
          </WeatherInfoText>
        </WeatherInfoRow>

        <WeatherInfoRow>
          <IconPressure />
          <WeatherInfoText>
            Pressão:
            {` ${pressure} hPa`}
          </WeatherInfoText>
        </WeatherInfoRow>

        <WeatherFooter>
          <ButtonPrimary onPress={() => mutate()}>
            Atualizar
          </ButtonPrimary>
          <WeatherFooterText>
            Dados atualizados em:
            {`\n${showLocalTime(dt, timezone, 'dddd DD/MM/YYYY HH:mm')}`}
          </WeatherFooterText>
        </WeatherFooter>
      </WeatherInfoArea>
    </Wrapper>
  );
};
