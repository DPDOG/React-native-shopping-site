import React from 'react';
import renderer from 'react-test-renderer';
import Header from './Header';
import {act} from '@testing-library/react-native';
import {expect} from '@jest/globals';

describe('Header', () => {
  let wrapper: renderer.ReactTestRenderer;
  let showBackMock = false;
  let titleMock = 'test';
  let cartCountMock = 10;
  it('renders correctly', async () => {
    await act(async () => {
      wrapper = renderer.create(
        <Header
          showBack={showBackMock}
          title={titleMock}
          cartCount={cartCountMock}
        />,
      );
    });
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
