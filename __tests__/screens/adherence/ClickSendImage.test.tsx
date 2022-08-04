import React from 'react';
import renderer from 'react-test-renderer';
import CameraScreen from '../../../src/screens/adherence/ClickSendImage';

describe('Click send image', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<CameraScreen _navigation={undefined} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
