import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components/native';

import {
  ActivityIndicator,
  SafeAreaView,
  ScrollView,
  ButtonText,
  Container,
  Button,
  Switch,
  Card,
  Text
} from '../StyleGuide';

function testPadding(tree, value) {
  expect(tree).toHaveStyleRule('padding-top', value);
  expect(tree).toHaveStyleRule('padding-right', value);
  expect(tree).toHaveStyleRule('padding-bottom', value);
  expect(tree).toHaveStyleRule('padding-left', value);
}

function testMargin(tree, value) {
  expect(tree).toHaveStyleRule('margin-top', value);
  expect(tree).toHaveStyleRule('margin-right', value);
  expect(tree).toHaveStyleRule('margin-bottom', value);
  expect(tree).toHaveStyleRule('margin-left', value);
}

describe('StyleGuide', () => {
  const themeA = {
    statusBar: {
      barStyle: 'light-content',
      backgroundColor: '#000',
    },
    backgroundColor: '#FFF',
    primary: 'red',
    secondary: 'green',
    tertiary: 'blue',
    error: 'yellow',
  };

  describe('SafeAreaView', () => {
    it('should match the snapshot', () => {
      const tree = renderer.create(<SafeAreaView theme={themeA} />).toJSON();

      expect(tree).toMatchSnapshot();
    });

    it('should it applies default styles along with the theme\'s \'backgroundColor\'', () => {
      const tree = renderer.create(<SafeAreaView theme={themeA} />).toJSON();

      expect(tree).toHaveStyleRule('flex-grow', 1);
      expect(tree).toHaveStyleRule('flex-shrink', 0);
      expect(tree).toHaveStyleRule('background-color', themeA.backgroundColor);
    });

    it('should it applies the prop\'s \'backgroundColor\'', () => {
      const tree = renderer.create(
        <SafeAreaView
          theme={themeA}
          backgroundColor="cyan"
        />
      ).toJSON();

      expect(tree).toHaveStyleRule('background-color', 'cyan');
    });
  });

  describe('ScrollView', () => {
    it('should match the snapshot', () => {
      const tree = renderer.create(<ScrollView theme={themeA} />).toJSON();

      expect(tree).toMatchSnapshot();
    });
  });

  describe('Container', () => {
    it('should match the snapshot', () => {
      const tree = renderer.create(<Container theme={themeA} />).toJSON();

      expect(tree).toMatchSnapshot();
    });

    it('should it applies default styles', () => {
      const tree = renderer.create(<Container theme={themeA} />).toJSON();

      expect(tree).toHaveStyleRule('flex-grow', 1);
      expect(tree).toHaveStyleRule('flex-shrink', 0);
      expect(tree).toHaveStyleRule('justify-content', 'flex-start');
      expect(tree).toHaveStyleRule('align-items', 'flex-start');
      expect(tree).toHaveStyleRule('width', '100%');
      expect(tree).toHaveStyleRule('height', '100%');
      testPadding(tree, 15);
      expect(tree).toHaveStyleRule('background-color', themeA.backgroundColor);
    });

    it('should it applies the prop\'s \'verticallyCentered\'', () => {
      const tree = renderer.create(
        <Container
          theme={themeA}
          verticallyCentered
        />
      ).toJSON();

      expect(tree).toHaveStyleRule('justify-content', 'center');
    });

    it('should it applies the prop\'s \'horizontallyCentered\'', () => {
      const tree = renderer.create(
        <Container
          theme={themeA}
          horizontallyCentered
        />
      ).toJSON();

      expect(tree).toHaveStyleRule('align-items', 'center');
    });
  });

  describe('Card', () => {
    it('should match the snapshot', () => {
      const tree = renderer.create(<Card theme={themeA} />).toJSON();

      expect(tree).toMatchSnapshot();
    });

    it('should it applies default styles', () => {
      const tree = renderer.create(<Card theme={themeA} />).toJSON();

      expect(tree).toHaveStyleRule('width', '100%');
      testPadding(tree, 15);
      expect(tree).toHaveStyleRule('border-radius', 8);
      expect(tree).toHaveStyleRule('elevation', 5);
      expect(tree).toHaveStyleRule('shadow-offset', { width: 2, height: 4});
      expect(tree).toHaveStyleRule('shadow-radius', 5);
      expect(tree).toHaveStyleRule('shadow-color', 'rgba(0, 0, 0, 0.2)');
      expect(tree).toHaveStyleRule('background-color', themeA.tertiary);
    });
  });

  describe('Switch', () => {
    it('should match the snapshot', () => {
      const tree = renderer.create(<Switch theme={themeA} />).toJSON();

      expect(tree).toMatchSnapshot();
    });
  });

  describe('ActivityIndicator', () => {
    it('should match the snapshot', () => {
      const tree = renderer.create(<ActivityIndicator theme={themeA} />).toJSON();

      expect(tree).toMatchSnapshot();
    });

    it('should it applies default styles', () => {
      const tree = renderer.create(<ActivityIndicator theme={themeA} />).toJSON();

      testPadding(tree, 0);
      testMargin(tree, 0);
      expect(tree.props.color).toEqual(themeA.secondary);
      expect(tree.props.size).toEqual('large');
    });

    it('should it applies the prop\'s \'color\'', () => {
      const tree = renderer.create(
        <ActivityIndicator
          theme={themeA}
          color="blue"
        />
      ).toJSON();

      expect(tree.props.color).toEqual('blue');
    });

    it('should it applies the prop\'s \'size\'', () => {
      const tree = renderer.create(
        <ActivityIndicator
          theme={themeA}
          size="small"
        />
      ).toJSON();

      expect(tree.props.size).toEqual('small');
    });
  });

  describe('Text', () => {
    it('should match the snapshot', () => {
      const tree = renderer.create(<Text theme={themeA} />).toJSON();

      expect(tree).toMatchSnapshot();
    });

    it('should it applies default styles', () => {
      const tree = renderer.create(<Text theme={themeA} />).toJSON();

      expect(tree).toHaveStyleRule('font-size', 16);
      expect(tree).toHaveStyleRule('color', themeA.secondary);
    });
  });

  describe('Button', () => {
    it('should match the snapshot', () => {
      const tree = renderer.create(<Button theme={themeA} />).toJSON();

      expect(tree).toMatchSnapshot();
    });

    it('should it applies default styles', () => {
      const tree = renderer.create(<Button theme={themeA} />).toJSON();

      expect(tree).toHaveStyleRule('flex-direction', 'row');
      expect(tree).toHaveStyleRule('justify-content', 'center');
      expect(tree).toHaveStyleRule('align-items', 'center');
      expect(tree).toHaveStyleRule('align-self', 'flex-start');
      expect(tree).toHaveStyleRule('height', 40);
      expect(tree).toHaveStyleRule('padding-top', 0);
      expect(tree).toHaveStyleRule('padding-right', 10);
      expect(tree).toHaveStyleRule('padding-bottom', 0);
      expect(tree).toHaveStyleRule('padding-left', 10);
      expect(tree).toHaveStyleRule('border-radius', 8);
      testMargin(tree, 'auto');
      expect(tree).toHaveStyleRule('background-color', themeA.backgroundColor);
    });
  });

  describe('ButtonText', () => {
    it('should match the snapshot', () => {
      const tree = renderer.create(<ButtonText theme={themeA} />).toJSON();

      expect(tree).toMatchSnapshot();
    });

    it('should it applies default styles', () => {
      const tree = renderer.create(<ButtonText theme={themeA} />).toJSON();

      expect(tree).toHaveStyleRule('text-transform', 'capitalize');
      expect(tree).toHaveStyleRule('font-size', 16);
      expect(tree).toHaveStyleRule('color', themeA.secondary);
    });
  });
});
