import React from 'react';
import renderer from 'react-test-renderer';
import { shallow, ShallowWrapper } from "enzyme";
import OnboardingScreen from '../../src/screens/OnboardingScreen';
jest.mock("@react-native-google-signin/google-signin", () => ({
  default: jest.fn(),
}));
describe('OnBoarding Screen', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<OnboardingScreen navigation={undefined} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
