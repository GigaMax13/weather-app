import React, { forwardRef } from 'react';
import Constants from 'expo-constants';
import styled from 'styled-components/native';
import {
  TouchableNativeFeedback,
  TouchableOpacity,
  Platform
} from 'react-native';

const { statusBarHeight } = Constants;
const isIOS = Platform.OS === 'ios';

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

const StyledScrollView = styled.ScrollView.attrs(({ theme, backgroundColor }) => ({
  backgroundColor: backgroundColor || theme.backgroundColor,
  keyboardShouldPersistTaps: 'always',
  contentContainerStyle: {
    flexGrow: 1,
    padding: 15,
  },
}))`
  flex-grow: 1;
  width: 100%;
  height: 100%;
  background-color: ${({ backgroundColor }) => backgroundColor};
`;

export const ScrollView = forwardRef(({ children, ...props }, ref) => (
  <StyledScrollView ref={ref} {...props}>
    {children}
  </StyledScrollView>
));

export const Container = styled.View`
  flex-grow: 1;
  flex-shrink: 0;
  justify-content: ${({ verticallyCentered }) => (verticallyCentered ? 'center' : 'flex-start')};
  align-items: ${({ horizontallyCentered }) => (horizontallyCentered ? 'center' : 'flex-start')};
  width: 100%;
  height: 100%;
  padding: 15px;
  background-color: ${({ theme: { backgroundColor } }) => backgroundColor};
`;

export const Card = styled.View`
  width: 100%;
  padding: 15px;
  border-radius: 8px;
  elevation: 5;
  box-shadow: 2px 4px 5px rgba(0, 0, 0, 0.2);
  background-color: ${({ theme: { tertiary } }) => tertiary};
`;

export const Switch = styled.Switch.attrs(({ theme }) => ({
  trackColor: {
    false: theme.tertiary,
    true: theme.primary,
  }
}))``;

export const ActivityIndicator = styled.ActivityIndicator.attrs(({ theme, color, size = 'large' }) => ({
  color: color || theme.secondary,
  size,
}))`
  padding: 0;
  margin: 0;
`;

export const Text = styled.Text`
  font-size: 16px;
  color: ${({ theme: { secondary } }) => secondary};
`;

export const Touchable = styled(isIOS ? TouchableOpacity : TouchableNativeFeedback)`
  width: 100%;
`;

export const Button = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  align-self: flex-start;
  height: 40px;
  padding: 0 10px;
  border-radius: 8px;
  margin: auto;
  background-color: ${({ theme: { backgroundColor } }) => backgroundColor};
`;

export const ButtonText = styled(Text)`
  text-transform: capitalize;
  font-size: 16px;
  color: ${({ theme: { secondary } }) => secondary};
`;

export const ButtonPrimary = ({ children, ...props }) => (
  <Touchable {...props}>
    <Button>
      <ButtonText>
        {children}
      </ButtonText>
    </Button>
  </Touchable>
);
