import React from 'react';

import TransactionPin from './TransactionPin';
import AmountToWithdraw from './AmountToWithdraw';

export default function displayWithdrawalModalContent(
  stage: string,
  closeModal: any,
) {
  switch (stage) {
    case 'pin': {
      return <TransactionPin />;
    }
    case 'withdawAmount': {
      return <AmountToWithdraw closeModal={closeModal} />;
    }
    default:
      return null;
  }
}
