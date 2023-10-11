import React from 'react';
import renderer from 'react-test-renderer';
import CartScreen from './CartScreen';
import {act} from '@testing-library/react-native';
import {expect} from '@jest/globals';

describe('CartScreen', () => {
  let wrapper: renderer.ReactTestRenderer;
  it('renders correctly', async () => {
    await act(async () => {
      wrapper = renderer.create(<CartScreen />);
    });
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
