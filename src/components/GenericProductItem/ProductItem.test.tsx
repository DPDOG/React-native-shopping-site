import React from 'react';
import renderer from 'react-test-renderer';
import ProductItem from './ProductItem';
import {act} from '@testing-library/react-native';
import {expect} from '@jest/globals';

describe('ProductItem', () => {
  let wrapper: renderer.ReactTestRenderer;
  let id = 10;
  let colour = 'red';
  let name = 'test';
  let price = 10;
  let img = 'testimage.png';
  it('renders correctly', async () => {
    await act(async () => {
      wrapper = renderer.create(
        <ProductItem
          id={id}
          colour={colour}
          name={name}
          price={price}
          img={img}
        />,
      );
    });
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
