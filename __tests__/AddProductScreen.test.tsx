import React from 'react';
import renderer from 'react-test-renderer';
import {useNavigation} from '@react-navigation/core';
import {AddProductScreen} from '@/screens';
import {AddProductScreenNavigationProps} from '@/screens/AddProductScreen';

describe('Testing the AddProductScreen Component', () => {
  const navigation: AddProductScreenNavigationProps = useNavigation();
  it('renders correctly, Snapshot test', () => {
    const addProductScreenTree = renderer
      .create(<AddProductScreen navigation={navigation} />)
      .toJSON();
    expect(addProductScreenTree).toMatchSnapshot();
  });
});
