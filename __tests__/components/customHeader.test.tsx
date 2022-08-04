import Enzyme, { render } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import { Provider } from "react-redux";
import React from "react";
import enableHooks from "jest-react-hooks-shallow";
import renderer from 'react-test-renderer';
import toJson from "enzyme-to-json";
import ProfileHeader from "../../src/components/ProfileHeader";
import CustomHeader from "../../src/components/customHeader";
enableHooks(jest);
jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useSelector: jest.fn(),
  useDispatch: jest.fn(),
}));jest.mock("@react-native-google-signin/google-signin", () => ({
    default: jest.fn(),
  }));
jest.mock("@react-navigation/native", () => ({
  ...jest.requireActual("@react-navigation/native"),
  useFocusEffect: jest.fn(),
}));
describe('Click send image', () => {
    it('renders correctly', () => {
      const tree = renderer
        .create(<CustomHeader/>)
        .toJSON();
      expect(tree).toMatchSnapshot();
    });
});