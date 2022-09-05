import React from 'react';
import renderer from 'react-test-renderer';
import {Enzyme,shallow} from "enzyme";
import HomeScreen from '../../src/screens/HomeScreen';
jest.mock("@react-native-google-signin/google-signin", () => ({
  default: jest.fn(),
  
}));
// const createTestProps = (props) => ({
//   navigation:{
//     navigate:jest.fn(),
//   }});
const props = {
  check2: true,
  navigation: {
    addListener: jest.fn(),
    navigate: jest.fn(),
   
  },
};

const findNodeByTestId = (wrapper, testID) => {
  return wrapper.findWhere((node) => {
    return node.prop("testID") === testID;
  });
};
describe('Click send image', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<HomeScreen/>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

// describe('login', () => {
//   const props = createTestProps({});
//   let useEffect;

//   const mockUseEffect = () => {
//       useEffect.mockImplementationOnce((f) => f());
//   };
it("should call onDeleteList", () => {
  const wrapper = shallow(<HomeScreen navigation={props.navigation}  />);
  const tree = findNodeByTestId(wrapper, "camI");
  tree.props.headerRight;
});

