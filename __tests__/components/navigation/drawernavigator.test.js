import React from "react";
import enableHooks from "jest-react-hooks-shallow";
import Enzyme, { shallow,render } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
Enzyme.configure({ adapter: new Adapter() });
import DrawerNavigator from "../../../src/navigation/drawerNavigator";
import toJson from "enzyme-to-json";
enableHooks(jest);

jest.mock("@react-navigation/native", () => ({
  ...jest.requireActual("@react-navigation/native"),
  useFocusEffect: jest.fn(),
  useEffect: jest.fn(),
}));
jest.mock('@react-native-google-signin/google-signin/lib/commonjs', () => ({
  default: jest.fn(),
}));
const findNodeByTestId = (wrapper, testID) => {
  return wrapper.findWhere((node) => {
    return node.prop("testID") === testID;
  });
};
const props = {
  check2: true,
  navigation: {
    addListener: jest.fn(),
    navigate: jest.fn(),
  },
};
describe('drawer navigator', () => {
  it("test", () => {
    const wrapper = shallow(<DrawerNavigator />).childAt(0).dive();
    expect(toJson(wrapper)).toMatchSnapshot();
  })
  it("should call onDeleteList", () => {
    const wrapper = shallow(<DrawerNavigator navigation={props.navigation} />);
    const tree = findNodeByTestId(wrapper, "homeF");
    tree.props().drawerIcon;
  });
  });

