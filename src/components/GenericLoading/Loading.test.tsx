import React from 'react';
import renderer from 'react-test-renderer';
import Loading from './Loading';
import {act} from '@testing-library/react-native';
import {expect} from '@jest/globals';

describe('Loading', () => {
  let wrapper: renderer.ReactTestRenderer;
  it('renders correctly', async () => {
    await act(async () => {
      wrapper = renderer.create(<Loading />);
    });
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
