/**
 * @format
 */
import React from 'react';
import renderer from 'react-test-renderer';
import AddExtraScreen, {
  AddProductScreenNavigationProps,
} from '@/screens/AddExtraScreen';
import {useNavigation} from '@react-navigation/core';

describe('Testing the AddExtra Component', () => {
  const navigation: AddProductScreenNavigationProps = useNavigation();
  it('renders correctly, Snapshot test', () => {
    const addExtraScreenTree = renderer
      .create(<AddExtraScreen navigation={navigation} />)
      .toJSON();
    expect(addExtraScreenTree).toMatchSnapshot();
  });
});
