import React, { useEffect } from 'react';
import { shallow } from 'enzyme';
import { View } from 'react-native';
import { useColorScheme } from 'react-native-appearance';
import renderer from 'react-test-renderer';

import { useProvider, ThemeProvider } from '../ThemeProvider';
import { themeLight, themeDark } from '../colors';

jest.mock('react-native-appearance', () => ({
  useColorScheme: jest.fn(),
}));

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useEffect: jest.fn().mockImplementationOnce(f => f()),
}));

describe('useProvider', () => {
  const Provider = () => (<View {...useProvider()} />);

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should set the light theme when the device doesn\'t have a theme specified', () => {
    useColorScheme.mockImplementation(() => 'no-preference');

    const wrapper = shallow(<Provider />);

    expect(wrapper.prop('context')).toEqual({
      isDarkTheme: false,
      setDarkTheme: expect.any(Function),
    });
    expect(wrapper.prop('theme')).toEqual(themeLight);
  });

  it('should set the light theme when the device is in light theme mode', () => {
    useColorScheme.mockImplementation(() => 'light');

    const wrapper = shallow(<Provider />);

    expect(wrapper.prop('context')).toEqual({
      isDarkTheme: false,
      setDarkTheme: expect.any(Function),
    });
    expect(wrapper.prop('theme')).toEqual(themeLight);
  });

  it('should set the dark theme when the device is in dark theme mode', () => {
    useColorScheme.mockImplementation(() => 'dark');

    const wrapper = shallow(<Provider />);

    expect(wrapper.prop('context')).toEqual({
      isDarkTheme: true,
      setDarkTheme: expect.any(Function),
    });
    expect(wrapper.prop('theme')).toEqual(themeDark);
  });

  it('should switch between light and dark theme as \'setDarkTheme\' is called with true or false parameter', () => {
    useColorScheme.mockImplementation(() => 'no-preference');

    const wrapper = shallow(<Provider />);

    expect(wrapper.prop('context').isDarkTheme).toBeFalsy();
    expect(wrapper.prop('theme')).toEqual(themeLight);

    wrapper.prop('context').setDarkTheme(true);

    expect(wrapper.prop('context').isDarkTheme).toBeTruthy();
    expect(wrapper.prop('theme')).toEqual(themeDark);

    wrapper.prop('context').setDarkTheme(false);

    expect(wrapper.prop('context').isDarkTheme).toBeFalsy();
    expect(wrapper.prop('theme')).toEqual(themeLight);
  });

  it('should call \'useEffect\' with the device theme preference', () => {
    useColorScheme
      .mockReturnValueOnce('no-preference')
      .mockReturnValueOnce('dark')
      .mockReturnValueOnce('light');

    shallow(<Provider />);
    shallow(<Provider />);
    shallow(<Provider />);

    expect(useEffect.mock.calls).toEqual([
      [expect.any(Function), ['no-preference']],
      [expect.any(Function), ['dark']],
      [expect.any(Function), ['light']]
    ]);
  });
});

describe('ThemeProvider', () => {
  it('should match the snapshot', () => {
    const tree = renderer.create(<ThemeProvider />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
