import {ACCEPT_ORDER, PAYMENT_AMOUNT, REJECT_ORDER} from '../constant';

export function OrderReducer(
  state: stateType = {
    order: null,
    amount: null,
  },
  action: {type: actionType; payload: payloadType},
) {
  const {type, payload} = action;

  switch (type) {
    case ACCEPT_ORDER:
      return {
        ...state,
        order: true,
      };
    case REJECT_ORDER:
      return {
        ...state,
        order: false,
      };
    case PAYMENT_AMOUNT:
      return {
        ...state,
        amount: payload,
      };
    default:
      return state;
  }
}
type actionType = 'ACCEPT_ORDER' | 'REJECT_ORDER' | 'PAYMENT_AMOUNT';

type stateType = {
  order: null | boolean;
  amount: null | number;
};

type payloadType = {
  amount: boolean;
};
