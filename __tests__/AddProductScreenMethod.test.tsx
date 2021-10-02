import React from 'react';
import renderer from 'react-test-renderer';
import {useNavigation} from '@react-navigation/core';
import {AddProductScreenMethod} from '@/screens';
import {addProductScreenMethodNavProps} from '@/screens/AddProductScreenMethod';

describe('Testing the AddProductScreenMethod Component', () => {
  const navigation: addProductScreenMethodNavProps = useNavigation();
  it('renders correctly, Snapshot test', () => {
    const addProductScreenMethodTree = renderer
      .create(<AddProductScreenMethod navigation={navigation} />)
      .toJSON();
    expect(addProductScreenMethodTree).toMatchSnapshot();
  });
});
