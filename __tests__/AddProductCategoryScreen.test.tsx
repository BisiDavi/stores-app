/**
 * @format
 */
import React from 'react';
import renderer from 'react-test-renderer';
import {AddProductCategoryScreen} from '@/screens';

describe('Testing the AddProductCategoryScreen Component', () => {
  it('renders correctly, Snapshot test', () => {
    const tree = renderer.create(<AddProductCategoryScreen />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
