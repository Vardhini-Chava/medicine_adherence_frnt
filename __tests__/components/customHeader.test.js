import React from "react";
import renderer from 'react-test-renderer';
import enableHooks from "jest-react-hooks-shallow";
import Enzyme from 'enzyme';
import {shallow} from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
Enzyme.configure({adapter: new Adapter()});
import CustomHeader from "../../src/components/customHeader";
enableHooks(jest);
jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useSelector: jest.fn(),
  useDispatch: jest.fn(),
}));jest.mock("@react-native-google-signin/google-signin", () => ({
    default: jest.fn(),
    GoogleSignin: {
      Configure : () => ({}),
    }
  }));
jest.mock("@react-navigation/native", () => ({
  ...jest.requireActual("@react-navigation/native"),
  useFocusEffect: jest.fn(),
  useEffect: jest.fn(),
}));
describe('customheader', () => {
    it('renders correctly', () => {
      const tree = renderer
        .create(<CustomHeader/>)
        .toJSON();
      expect(tree).toMatchSnapshot();
    }); 
      
});