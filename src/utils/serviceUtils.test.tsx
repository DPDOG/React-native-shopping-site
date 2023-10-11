import {Cart} from '../redux';
import {
  checkIsLoading,
  checkItemAlreadyOrAdd,
  incDecQuantity,
  removeFromCart,
  totalPrice,
  create_UUID,
} from './servicesUtils';
import {expect} from '@jest/globals';

describe('Service Utilities', () => {
  let mockCart: Cart[] = [
    {id: 1, name: 'test', quantity: 1, price: 10},
    {id: 2, name: 'test', quantity: 1, price: 10},
    {id: 3, name: 'test', quantity: 1, price: 10},
    {id: 4, name: 'test', quantity: 1, price: 10},
    {id: 5, name: 'test', quantity: 1, price: 10},
  ];
  it('checkIsLoading', async () => {
    let mockLoading = 'loading';
    let mockLoadingFalse = 'idle';
    expect(checkIsLoading(mockLoading)).toBe(true);
    expect(checkIsLoading(mockLoadingFalse)).toBe(false);
  });

  it('checkItemAlreadyOrAdd', async () => {
    let mockData: Cart = {id: 5, name: 'test', quantity: 1, price: 10};
    expect(checkItemAlreadyOrAdd(mockCart, mockData)).not.toBeNull();
  });

  it('incDecQuantity', async () => {
    expect(incDecQuantity(mockCart, 5)).not.toBeNull();
    expect(incDecQuantity(mockCart, 5, false)).not.toBeNull();
  });

  it('removeFromCart', async () => {
    expect(removeFromCart(mockCart, 5)).not.toBeNull();
  });

  it('totalPrice', async () => {
    expect(totalPrice(mockCart)).not.toBeNull();
  });

  it('create_UUID', async () => {
    expect(create_UUID()).not.toBeNull();
  });
});
