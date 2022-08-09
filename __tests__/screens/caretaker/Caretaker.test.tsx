import React from 'react';
import renderer from 'react-test-renderer';
import Caretaker from '../../../src/screens/caretaker/Caretaker';

describe('Caretaker Request', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Caretaker navigation={undefined} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
