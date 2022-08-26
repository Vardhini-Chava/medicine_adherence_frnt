import React from 'react';
import {create} from 'react-test-renderer';
import AdherenceHistory from '../../../src/screens/adherence/AdherenceHistory';
import Enzyme, { shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
Enzyme.configure({adapter: new Adapter()});
import enableHooks from "jest-react-hooks-shallow";
enableHooks(jest);

jest.mock("@react-navigation/native", () => ({
  ...jest.requireActual("@react-navigation/native"),
  useFocusEffect: jest.fn().mockImplementation((func) => func()),
}));
jest.mock("rn-fetch-blob", () => ({
  default: jest.fn(),
}));
describe('Settins Screen', () => {
  it('renders correctly', () => {
    const tree = create(<AdherenceHistory />);
    expect(tree).toMatchSnapshot();
  });
  it('test open save button', () => {
    const mockFn = jest.fn();
    const wrapper = shallow(<AdherenceHistory perm={mockFn} />);
    wrapper.find('#perm').simulate('press');
  });
});
