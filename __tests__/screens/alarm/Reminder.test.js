import React from "react";
import renderer from "react-test-renderer";
import Reminder from "../../../src/screens/alarm/Reminder";
import Enzyme, { shallow } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
Enzyme.configure({ adapter: new Adapter() });
jest.mock("react-native-push-notification", () => ({
  default: jest.fn(),
}));
jest.mock("@react-navigation/native", () => ({
  ...jest.requireActual("@react-navigation/native"),
  useFocusEffect: jest.fn().mockImplementation((func) => func()),
  useNavigation: () => ({ goBack: jest.fn() }),
  useRoute: () => ({
    params: {
      id: {},
    },
  }),
}));

const props = {
  check2: true,
  navigation: {
    addListener: jest.fn(),
    navigate: jest.fn(),
  },
};

const setHookState = (newState) =>
  jest.fn().mockImplementation(() => [newState, () => {}]);
const reactMock = require("react");

const findNodeByTestId = (wrapper, testID) => {
  return wrapper.findWhere((node) => {
    return node.prop("testID") === testID;
  });
};

describe("Click send image", () => {
  it("renders correctly", () => {
    const wrapper = shallow(<Reminder navigation={props.navigation} />);
    expect(wrapper).toMatchSnapshot();
  });

  it("should call onDeleteList", () => {
    const wrapper = shallow(<Reminder navigation={props.navigation} />);
    const tree = findNodeByTestId(wrapper, "TextInput");
    tree.props().onChangeText();
  });

  it("should call onDeleteList", () => {
    const wrapper = shallow(<Reminder navigation={props.navigation} />);
    const tree = findNodeByTestId(wrapper, "CheckBox2");
    tree.props().onClick();
  });

  it("should call onDeleteList", () => {
    const check2 = true;

    React.useState = jest.fn().mockReturnValue([check2, {}]);
    const wrapper = shallow(<Reminder props={props} check2={true} />);
    const tree = findNodeByTestId(wrapper, "SectionedMultiSelect");
    tree.props().onSelectedItemsChange();
  });
});
