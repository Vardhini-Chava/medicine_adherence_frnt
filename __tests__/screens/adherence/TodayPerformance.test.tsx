import React from 'react';
import renderer from 'react-test-renderer';
import TodayPerformance from '../../../src/screens/adherence/TodayPerformance';
import Enzyme, { shallow } from "enzyme";
import Adatper from "@wojtekmaj/enzyme-adapter-react-17";
import toJson from "enzyme-to-json";

describe('Click send image', () => {
  it('renders correctly', () => {
    Enzyme.configure({ adapter: new Adatper() });

    expect.assertions(1);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});

function wrapper(wrapper: any): import("enzyme-to-json").Json {
  throw new Error('Function not implemented.');
}
    // const tree = 
    //   .create(<TodayPerformance route={undefined} />)
    //   .toJSON();
    // expect(tree).toMatchSnapshot();
