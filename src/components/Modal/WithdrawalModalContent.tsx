import React from 'react';

import TransactionPin from './TransactionPin';
import AmountToWithdraw from './AmountToWithdraw';
import PerformWithdrawal from './PerformWithdrawal';

export default function displayWithdrawalModalContent(
  stage: string,
  closeModal: any,
) {
  switch (stage) {
    case 'pin': {
      return <TransactionPin closeModal={closeModal} />;
    }
    case 'withdawAmount': {
      return <AmountToWithdraw closeModal={closeModal} />;
    }
    case 'performWithdrawal': {
      return <PerformWithdrawal closeModal={closeModal} />;
    }
    default:
      return null;
  }
}
