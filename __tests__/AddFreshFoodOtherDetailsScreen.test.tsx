/**
 * @format
 */
import React from 'react';
import renderer from 'react-test-renderer';
import {useNavigation} from '@react-navigation/core';
import AddFreshFoodOtherDetailsScreen, {
  AddFreshFoodOtherDetailsScreenNavigationProps,
} from '@/screens/AddFreshFoodOtherDetailsScreen';

describe('Testing the AddExtra Component', () => {
  const navigation: AddFreshFoodOtherDetailsScreenNavigationProps =
    useNavigation();
  it('renders correctly, Snapshot test', () => {
    const tree = renderer
      .create(<AddFreshFoodOtherDetailsScreen navigation={navigation} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
