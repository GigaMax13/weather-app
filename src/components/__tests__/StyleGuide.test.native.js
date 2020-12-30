import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components/native';

import {
  SafeAreaView,
  Container,
  Switch,
} from '../StyleGuide';

const testPadding = (tree, value) => {
  expect(tree).toHaveStyleRule('padding-top', value);
  expect(tree).toHaveStyleRule('padding-right', value);
  expect(tree).toHaveStyleRule('padding-bottom', value);
  expect(tree).toHaveStyleRule('padding-left', value);
};

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
      testPadding(tree, 10);
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

  describe('Switch', () => {
    it('should match the snapshot', () => {
      const tree = renderer.create(<Switch theme={themeA} />).toJSON();

      expect(tree).toMatchSnapshot();
    });
  });
});
