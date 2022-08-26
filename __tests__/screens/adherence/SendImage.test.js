import React from 'react';
import {create} from 'react-test-renderer';
import SendImageToCaretaker from '../../../src/screens/adherence/SendImageToCaretaker';
import Enzyme, { shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import enableHooks from "jest-react-hooks-shallow";
Enzyme.configure({adapter: new Adapter()});

enableHooks(jest);
jest.mock("react-native-share", () => ({
  default: jest.fn(),
}));
jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
 // useSelector: jest.fn(),
  useDispatch: jest.fn(),
}));
jest.mock('@react-navigation/native', () => ({
  ...jest.requireActual('@react-navigation/native'),
  useFocusEffect: jest.fn().mockImplementation(func => func()),
  useNavigation: () => ({ goBack: jest.fn() }),
  useRoute: () => ({
    params: {
     image_uri: {}
    }
  }),
}));

jest.mock("@react-navigation/native", () => ({
  ...jest.requireActual("@react-navigation/native"),
  useFocusEffect: jest.fn().mockImplementation((func) => func()),
  useRoute: () => ({
    params: {
     image_uri: {}
    }
  }),
}));

describe('Send Image Screen', () => {
  it('renders correctly', () => {
    const tree = create(<SendImageToCaretaker navigation={undefined}/>);
    expect(tree).toMatchSnapshot();
  });
  it('test open save button', () => {
    const mockFn = jest.fn();
    const wrapper = shallow(<SendImageToCaretaker pressFnc={mockFn} />);
    wrapper.find('#press').simulate('press');
  });

});