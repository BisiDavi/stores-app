import {ConfirmRiderScreen} from '@/screens';
import React from 'react';
import renderer from 'react-test-renderer';

describe('Testing the ConfirmRiderScreen Component', () => {
  it('renders correctly, Snapshot test', () => {
    const confirmRiderScreenTree = renderer
      .create(<ConfirmRiderScreen />)
      .toJSON();
    expect(confirmRiderScreenTree).toMatchSnapshot();
  });
});
