import React from 'react';
import Constants from 'expo-constants';
import styled from 'styled-components/native';

const { statusBarHeight } = Constants;

const StatusBarWrapper = styled.View.attrs(({ theme: { statusBar } }) => (statusBar))`
  height: ${statusBarHeight}px;
  background-color: ${({ backgroundColor }) => backgroundColor};
`;

const StyledStatusBar = styled.StatusBar.attrs((props) => {
  const {
    theme: {
      statusBar,
    },
    barStyle,
    backgroundColor,
  } = props;

  return {
    translucent: true,
    barStyle: barStyle || statusBar.barStyle,
    backgroundColor: backgroundColor || statusBar.backgroundColor,
  };
})``;

export const StatusBar = (props) => (
  <StatusBarWrapper>
    <StyledStatusBar {...props} />
  </StatusBarWrapper>
);

export const SafeAreaView = styled.SafeAreaView.attrs(({ theme, backgroundColor }) => ({
  backgroundColor: backgroundColor || theme.backgroundColor,
}))`
  flex-grow: 1;
  flex-shrink: 0;
  background-color: ${({ backgroundColor }) => backgroundColor};
`;

export const Container = styled.View`
  flex-grow: 1;
  flex-shrink: 0;
  justify-content: ${({ verticallyCentered }) => (verticallyCentered ? 'center' : 'flex-start')};
  align-items: ${({ horizontallyCentered }) => (horizontallyCentered ? 'center' : 'flex-start')};
  width: 100%;
  height: 100%;
  padding: 10px;
  background-color: ${({ theme: { backgroundColor } }) => backgroundColor};
`;

export const Switch = styled.Switch.attrs(({ theme }) => ({
  trackColor: {
    false: theme.tertiary,
    true: theme.primary,
  }
}))``;
