import {ACCEPT_ORDER, PAYMENT_AMOUNT, REJECT_ORDER} from '../constant';

export function OrderReducer(
  state = {
    order: null,
    amount: null,
  },
  action: {type: any},
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
