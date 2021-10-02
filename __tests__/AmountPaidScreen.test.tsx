import {AmountPaidScreen} from '@/screens';
import React from 'react';
import renderer from 'react-test-renderer';

describe('Testing the AmountPaidScreen Component', () => {
  it('renders correctly, Snapshot test', () => {
    const amountPaidScreenTree = renderer.create(<AmountPaidScreen />).toJSON();
    expect(amountPaidScreenTree).toMatchSnapshot();
  });
});
