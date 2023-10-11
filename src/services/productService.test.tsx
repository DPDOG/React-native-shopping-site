import {fetchProducts} from './productService';
import {expect} from '@jest/globals';

describe('Product Service', () => {
  let mock = jest.fn();
  it('fetchProducts', async () => {
    expect(fetchProducts()).toBeCalledWith(mock);
  });
});
