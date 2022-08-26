import Enzyme, { shallow } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import { Provider } from "react-redux";
import React from "react";
import configureStore from "redux-mock-store";
import toJson from "enzyme-to-json";
import allreminderdata from "../../../src/components/adherence/allReminderData";
import enableHooks from "jest-react-hooks-shallow";
enableHooks(jest);
Enzyme.configure({ adapter: new Adapter() });
const mockStore = configureStore([]);

describe("test all rem data", () => {
  let store;
  store = mockStore({
    field: {
      name: "abc",
      value: "nas",
    },
  });
  it("test category", () => {
    const wrapper = shallow(
      <Provider store={store}>
        <allreminderdata />
      </Provider>
    );

    expect.assertions(1);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('test open save button', () => {
    const wrapper = shallow(<allreminderdata />);
    wrapper.find('#test')
  });
});