import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import App from '../App';

describe('<App />', () => {
  it('should match the snapshot', () => {
    const tree = renderer.create(<App />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
