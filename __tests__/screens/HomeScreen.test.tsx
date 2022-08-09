import React from 'react';
import renderer from 'react-test-renderer';
import { render, cleanup, fireEvent } from '@testing-library/react-native';
import HomeScreen from '../../src/screens/HomeScreen';
jest.mock("@react-native-google-signin/google-signin", () => ({
  default: jest.fn(),
}));
jest.mock("@react-native-async-storage/async-storage", () => ({
  default: jest.fn(),
}));
jest.mock("react-native-vector-icons/FontAwesome", () => ({
  default: jest.fn(),
}));
describe('Click send image', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<HomeScreen />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});