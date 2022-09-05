import React from "react";
import enableHooks from "jest-react-hooks-shallow";
import Enzyme,{shallow} from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import configureStore from "redux-mock-store";
import toJson from "enzyme-to-json";
import { Provider } from "react-redux";
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
      isSignedIn : () =>({}),
    }
  }));
jest.mock("@react-navigation/native", () => ({
  ...jest.requireActual("@react-navigation/native"),
  useFocusEffect: jest.fn().mockImplementation((func) => func()),
  useEffect:jest.fn(),
}));

Enzyme.configure({ adapter: new Adapter() });
const mockStore = configureStore([]);
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

describe("test collector category", () => {
  let store;
  store = mockStore({
    field: {
      name: "hello",
      value: "San",
    },
  });
  it("test category", () => {
    const wrapper = shallow(
      <Provider store={store}>
        <CustomHeader  />
      </Provider>
    );

   
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('test open save button', () => {
    const wrapper = shallow(<CustomHeader />);
    wrapper.find('#test')
  });
  it('test open save button', () => {
    const wrapper = shallow(<CustomHeader />);
    wrapper.find('#press')
  });
  it("should call onDeleteList", () => {
    const wrapper = shallow(<CustomHeader navigation={props.navigation} />);
    const tree = findNodeByTestId(wrapper, "safe");
    tree.props().onPress();
  });
  it("should call onDeleteList", () => {
    const loggedin = true;

    React.useState = jest.fn().mockReturnValue([loggedin, {}]);
    const wrapper = shallow(<CustomHeader navigation={props.navigation} />);
    const tree = findNodeByTestId(wrapper, "button");
    tree.props().onPress();
  });
  it("should call onDeleteList", () => {
    const loggedin = true;

    React.useState = jest.fn().mockReturnValue([loggedin, {}]);
    const wrapper = shallow(<CustomHeader navigation={props.navigation} />);
    const tree = findNodeByTestId(wrapper, "button1");
    tree.props().onPress();
  });
  it("should call onDeleteList", () => {
    const loggedin = false;

    React.useState = jest.fn().mockReturnValue([loggedin, {}]);
    const wrapper = shallow(<CustomHeader navigation={props.navigation} />);
    const tree = findNodeByTestId(wrapper, "button2");
    tree.props().onPress();
  });
  

});