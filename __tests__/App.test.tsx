import 'react-native';
import React from 'react';
import App from '../App';

import renderer from 'react-test-renderer';
import {act} from '@testing-library/react-native';

const mockNavigation = jest.fn();
jest.mock('@react-navigation/native', () => {
  const actualNav = jest.requireActual('@react-navigation/native');
  return {
    ...actualNav,
    useNavigation: () => ({
      navigate: mockNavigation,
    }),
  };
});

jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

it('renders correctly', async () => {
  let component: any;
  await act(async () => {
    component = renderer.create(<App />);
  });
  expect(component.toJSON()).toMatchSnapshot();
});
