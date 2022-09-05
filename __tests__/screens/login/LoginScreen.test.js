import React from 'react';
import Enzyme, {shallow, render,mount} from 'enzyme';
import {toJson} from 'enzyme-to-json';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Loginscreen from '../../../src/screens/login/LoginScreen';

Enzyme.configure({adapter: new Adapter()});
describe('Req', () => {
  it('should test ChangePasswordScreen', () => {
    const wrapper = mount(<Loginscreen />);
    expect.assertions(1);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
