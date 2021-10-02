import React from 'react';
import renderer from 'react-test-renderer';
import {useNavigation} from '@react-navigation/core';

import {DashboardScreen} from '@/screens';
import {DashboardScreenNavProps} from '@/screens/DashboardScreen';

describe('Testing the DashboardScreen Component', () => {
  const navigation: DashboardScreenNavProps = useNavigation();
  it('renders correctly, Snapshot test', () => {
    const dashboardScreenTree = renderer
      .create(<DashboardScreen navigation={navigation} />)
      .toJSON();
    expect(dashboardScreenTree).toMatchSnapshot();
  });
});
