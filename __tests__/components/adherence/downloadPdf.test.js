import Enzyme, { shallow } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import { Provider } from "react-redux";
import React from "react";
import configureStore from "redux-mock-store";
import toJson from "enzyme-to-json";
import DownloadPdf from "../../../src/components/adherence/downloadPdf";
import enableHooks from "jest-react-hooks-shallow";
enableHooks(jest);
Enzyme.configure({ adapter: new Adapter() });
const mockStore = configureStore([]);
jest.mock("rn-fetch-blob", () => ({
  default: jest.fn(),
}));
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
        <DownloadPdf />
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