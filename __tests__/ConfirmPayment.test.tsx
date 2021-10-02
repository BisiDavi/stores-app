import React from 'react';
import renderer from 'react-test-renderer';
import {useNavigation} from '@react-navigation/core';

import {ConfirmPaymentScreen} from '@/screens';
import {confirmPaymentNavProps} from '@/screens/ConfirmPaymentScreen';

describe('Testing the ConfirmPayment Component', () => {
  const navigation: confirmPaymentNavProps = useNavigation();
  it('renders correctly, Snapshot test', () => {
    const confirmPaymentTree = renderer
      .create(<ConfirmPaymentScreen navigation={navigation} />)
      .toJSON();
    expect(confirmPaymentTree).toMatchSnapshot();
  });
});
