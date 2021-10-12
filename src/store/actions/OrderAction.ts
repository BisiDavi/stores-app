import {ACCEPT_ORDER, PAYMENT_AMOUNT} from '../constant';

export const AcceptOrderAction =
  () => (dispatch: (arg0: {type: 'ACCEPT_ORDER'}) => void) => {
    dispatch({
      type: ACCEPT_ORDER,
    });
  };

export const PaymentAction =
  (amount: number) =>
  (dispatch: (arg0: {type: 'PAYMENT_AMOUNT'; payload: number}) => void) => {
    dispatch({
      type: PAYMENT_AMOUNT,
      payload: amount,
    });
  };
