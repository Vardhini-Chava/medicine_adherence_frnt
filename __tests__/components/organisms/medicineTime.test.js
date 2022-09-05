import Enzyme, { shallow, render } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import { Provider } from "react-redux";
import React from "react";
import configureStore from "redux-mock-store";
import toJson from "enzyme-to-json";
import Box from "../../../src/components/organisms/medicineTime";
import enableHooks from "jest-react-hooks-shallow";
enableHooks(jest);

Enzyme.configure({ adapter: new Adapter() });
const mockStore = configureStore([]);

const findNodeByTestId = (wrapper, testID) => {
  return wrapper.findWhere((node) => {
    return node.prop("testID") === testID;
  });
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
    const wrapper = render(
      <Provider store={store}>
        <Box />
      </Provider>
    );

    expect.assertions(1);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it("test open save button", () => {
    const mockFn = jest.fn();
    const wrapper = shallow(<Box updateMed={mockFn} />);
    wrapper.find("BouncyCheckbox#date");
  });

  it("not open save button", () => {
    const mockFn = jest.fn();
    let updatetimes = jest.fn();
    const props = {
      time: "BouncyCheckbox",
      updatetimes: jest.fn(),
    };
    const wrapper = shallow(<Box props={props} updatetimes={updatetimes} />);
    const tree = findNodeByTestId(wrapper, "BouncyCheckbox");
    expect(wrapper).toBeDefined();
    tree.props().onPress();
  });
});
