import React from 'react';
import renderer from 'react-test-renderer';
import {AvailableBalanceScreen} from '@/screens';
//import Geolocation from 'react-native-geolocation-service';

describe('Testing the AvailableBalanceScreen Component', () => {
  it('renders correctly, Snapshot test', () => {
    const availableBalanceScreenTree = renderer
      .create(<AvailableBalanceScreen />)
      .toJSON();
    expect(availableBalanceScreenTree).toMatchSnapshot();
  });
});
