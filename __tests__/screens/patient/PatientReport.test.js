import React from 'react';
import renderer from 'react-test-renderer';
import PatientReport from '../../../src/screens/patient/PatientReport';
import Enzyme, { shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
Enzyme.configure({adapter: new Adapter()});
jest.mock("rn-fetch-blob", () => ({
  default: jest.fn(),
}));
jest.mock('@react-navigation/native', () => ({
  ...jest.requireActual('@react-navigation/native'),
  useNavigation: () => ({ goBack: jest.fn() }),
  useFocusEffect:jest.fn(),
  useRoute: () => ({
    params: {
     im:{}
    }
  }),
}));

jest.mock('axios', () => ({
 
  
  default : () => ({ goBack: jest.fn() }),
   request:() => ({ goBack: jest.fn() }),
}));



describe('Click send image', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<PatientReport route={undefined}/>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
 
  it('test open save button', () => {
    const mockFn = jest.fn();
    const wrapper = shallow(<PatientReport permFnc={mockFn} />);
    wrapper.find('#perm').simulate('press');
  });
});