import React from 'react';
import renderer from 'react-test-renderer';
import CameraScreen from '../../../src/screens/adherence/ClickSendImage';
import Enzyme, { shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
Enzyme.configure({adapter: new Adapter()});
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
describe('Click send image', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<CameraScreen navigation={undefined} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('test open save button', () => {
    const mockFn = jest.fn();
    const wrapper = shallow(<CameraScreen picture={mockFn} />);
    wrapper.find('#picture').simulate('press');
  });
  it("should call onDeleteList", () => {
    const wrapper = shallow(<CameraScreen navigation={props.navigation} />);
    const tree = findNodeByTestId(wrapper, "pic");
    tree.props().onPress();
  });
});
