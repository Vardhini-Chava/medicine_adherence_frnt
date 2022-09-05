import React from "react";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";

import OnboardingScreen from "../../src/screens/OnboardingScreen";
jest.mock("@react-native-google-signin/google-signin", () => ({
  default: jest.fn(),
}));
jest.mock("@react-navigation/native", () => ({
  ...jest.requireActual("@react-navigation/native"),
  useFocusEffect: jest.fn().mockImplementation((func) => func()),
}));
const props = {
  check2: true,
  navigation: {
    addListener: jest.fn(),
    navigate: jest.fn(),
   
  },
};
describe("OnBoarding Screen", () => {
  it("renders correctly", () => {
    
    const tree = renderer
      .create(<OnboardingScreen props={props.navigation} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  beforeEach(function () {
    jest.setTimeout(500) 
});

  
  
});
