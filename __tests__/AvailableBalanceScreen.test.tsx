import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import {AvailableBalanceScreen} from '@/screens';
//import Geolocation from 'react-native-geolocation-service';

describe('Testing the AvailableBalanceScreen Component', () => {
  const renderer = new ShallowRenderer();
  it('renders correctly, Snapshot test', () => {
    renderer.render(<AvailableBalanceScreen />);
    const result = renderer.getRenderOutput();
    expect(result).toMatchSnapshot();
  });
});
