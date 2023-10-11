import React from 'react';
import renderer from 'react-test-renderer';
import ProductListScreen from './ProductListScreen';
import {act} from '@testing-library/react-native';
import {expect} from '@jest/globals';

describe('ProductListScreen', () => {
  let wrapper: renderer.ReactTestRenderer;
  it('renders correctly', async () => {
    await act(async () => {
      wrapper = renderer.create(<ProductListScreen />);
    });
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
