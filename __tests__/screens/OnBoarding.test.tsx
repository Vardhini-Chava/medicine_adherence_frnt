import React from 'react';
import renderer from 'react-test-renderer';
import { shallow, ShallowWrapper } from "enzyme";
import OnboardingScreen from '../../src/screens/OnboardingScreen';
import DrawerNavigator from '../../src/navigation/drawerNavigator';

describe('OnBoarding Screen', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<OnboardingScreen _navigation={undefined} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
