import React from 'react';
import renderer from 'react-test-renderer';
import CartButton from './CartIcon';
import {act} from '@testing-library/react-native';
import {expect} from '@jest/globals';

describe('CartIcon', () => {
  let wrapper: renderer.ReactTestRenderer;
  let count = 10;
  it('renders correctly', async () => {
    await act(async () => {
      wrapper = renderer.create(<CartButton count={count} />);
    });
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
