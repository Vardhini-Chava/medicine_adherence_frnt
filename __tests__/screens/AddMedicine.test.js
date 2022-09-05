import React from 'react';
import {Enzyme,shallow} from "enzyme";
import { cleanup } from '@testing-library/react-native';

import renderer from 'react-test-renderer';
import Addmedicine from '../../src/screens/AddMedicine';

jest.mock("@react-navigation/native", () => ({
  ...jest.requireActual("@react-navigation/native"),
  useFocusEffect: jest.fn(),
}));


const findNodeByTestId = (wrapper, testID) => {
  return wrapper.findWhere((node) => {
    return node.prop("testID") === testID;
  });
};

describe('Click send image', () => {
  afterEach(cleanup);
  it('renders correctly', () => {
    const tree = renderer
      .create(<Addmedicine navigation={undefined} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("should call onDeleteList", () => {
    const wrapper = shallow(<Addmedicine  />);
    const tree = findNodeByTestId(wrapper, "addR");
    tree.props.onPress();
  });
  
  


});