import Enzyme, { shallow,render } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import { Provider } from "react-redux";
import React from "react";
import configureStore from "redux-mock-store";
import toJson from "enzyme-to-json";

import TodayPerformance from '../../../src/screens/adherence/TodayPerformance';

Enzyme.configure({ adapter: new Adapter() });
const mockStore = configureStore([]);
jest.mock('@react-navigation/native', () => ({
    ...jest.requireActual('@react-navigation/native'),
    useNavigation: () => ({ goBack: jest.fn() }),
    useFocusEffect: jest.fn().mockImplementation((func) => func()),
    useRoute: () => ({
      params: {
       im:{}
      }
    }),
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
    const wrapper = render(
      <Provider store={store}>
        <TodayPerformance  />
      </Provider>
    );

    expect.assertions(1);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('test share button', () => {
    const mockFn = jest.fn();
   const wrapper = shallow(<TodayPerformance updatetimes={mockFn} />);
   wrapper.find("#share")
   });
});