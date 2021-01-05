import React from 'react';
import styled from 'styled-components/native';
import {
  MaterialCommunityIcons,
  FontAwesome5,
  Feather
} from '@expo/vector-icons';

import * as StyleGuide from '../StyleGuide';

export const Wrapper = styled(StyleGuide.Container)`
  padding: 20px 5px;
`;

export const CityName = styled(StyleGuide.Text).attrs(() => ({
  ellipsizeMode: 'tail',
  numberOfLines: 3,
}))`
  width: 100%;
  text-align: center;
  font-weight: bold;
  font-size: 32px;
  color: ${({ theme: { primary } }) => primary};
`;

const TemperatureWrapper = styled.View`
  width: 100%;
  align-items: center;
`;

const TemperatureInfo = styled.View`
  position: absolute;
  bottom: 0;
  left: 50%;
`;

const TemperatureRow = styled.View`
  flex-direction: row;
`;

const TemperatureCurrentValue = styled(StyleGuide.Text)`
  height: 80px;
  line-height: 90px;
  font-size: 90px;
  text-shadow: ${({ theme: { backgroundColor } }) => `3px 3px 1px ${backgroundColor}`};
`;

const TemperatureUnit = styled(StyleGuide.Text)`
  height: 50px;
  line-height: 50px;
  font-weight: bold;
  font-size: 45px;
`;

const TemperatureFeels = styled(StyleGuide.Text)`
  flex: 1;
  height: 19px;
  line-height: 19px;
  text-align: right;
  font-size: 16px;
`;

export const Temperature = ({ children, temp, feels }) => (
  <TemperatureWrapper>
    {children}
    <TemperatureInfo>
      <TemperatureRow>
        <TemperatureCurrentValue>
          {Math.floor(temp)}
        </TemperatureCurrentValue>
        <TemperatureUnit>
          ˚C
        </TemperatureUnit>
      </TemperatureRow>
      <TemperatureRow>
        <TemperatureFeels>
          Sensação
          {' '}
          {Math.floor(feels)}
          {' ˚C'}
        </TemperatureFeels>
      </TemperatureRow>
    </TemperatureInfo>
  </TemperatureWrapper>
);

export const Description = styled(StyleGuide.Text)`
  width: 100%;
  height: 21px;
  line-height: 21px;
  margin: 5px 0 20px;
  text-transform: capitalize;
  text-align: center;
  font-weight: bold;
  font-size: 18px;
  color: ${({ theme: { primary } }) => primary};
`;

export const WeatherInfoArea = styled.View`
  flex-grow: 1;
  width: 100%;
  padding-top: 70px;
  margin-top: -70px;
  margin-bottom: 5px;
  background-color: ${({ theme: { tertiary } }) => tertiary};
  z-index: -1;
`;

export const WeatherInfoRow = styled.View.attrs(({
  noMarginBottom = false,
  noMarginRight = false,
  noMarginLeft = false
}) => ({
  noMarginBottom,
  noMarginRight,
  noMarginLeft
}))`
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  margin-right: ${({ noMarginRight }) => (noMarginRight ? 0 : 10)}px;
  margin-bottom: ${({ noMarginBottom }) => (noMarginBottom ? 0 : 10)}px;
  margin-left: ${({ noMarginLeft }) => (noMarginLeft ? 0 : 10)}px;
  min-height: 22px;
  line-height: 22px;
`;

export const WeatherFooter = styled.View`
  margin-top: auto;
  justify-content: flex-end;
  margin-bottom: 10px;
`;

export const WeatherInfoText = styled(StyleGuide.Text)`
  line-height: 18px;
  margin-left: 15px;
  font-size: 16px;
  color: ${({ theme: { secondary } }) => secondary};
`;

export const WeatherFooterText = styled(WeatherInfoText).attrs(() => ({
  ellipsizeMode: 'tail',
  numberOfLines: 3,
}))`
  flex-grow: 1;
  line-height: 14px;
  margin: 20px 0 10px;
  text-align: center;
  font-size: 12px;
`;

export const IconTemperatureLow = styled(FontAwesome5).attrs(({ theme: { primary } }) => ({
  name: 'temperature-low',
  color: primary,
  size: 20
}))`
  width: 22px;
  height: 22px;
`;

export const IconTemperatureHigh = styled(IconTemperatureLow).attrs(() => ({
  name: 'temperature-high',
}))``;

export const IconPressure = styled(IconTemperatureLow).attrs(() => ({
  name: 'compress-arrows-alt',
}))``;

export const IconHumidity = styled(MaterialCommunityIcons).attrs(({ theme: { primary } }) => ({
  name: 'water',
  color: primary,
  size: 22
}))`
  width: 22px;
  height: 22px;
  margin-left: -4px;
`;

export const IconWind = styled(IconHumidity).attrs(() => ({
  name: 'weather-windy',
  size: 20
}))`
  margin-left: -2px;
`;

export const IconSunRise = styled(Feather).attrs(({ theme: { primary } }) => ({
  name: 'sunrise',
  color: primary,
  size: 20
}))`
  width: 22px;
  height: 22px;
`;

export const IconSunSet = styled(IconSunRise).attrs(() => ({
  name: 'sunset',
}))``;

export const IconVisibility = styled(IconTemperatureLow).attrs(() => ({
  name: 'eye',
}))``;
