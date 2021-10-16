import {MOVE_TO_WITHDRAW_AMOUNT_MODAL} from '../constant';

export default function UIReducer(
  state = {
    withdrawalModal: 'withdawAmount',
  },
  action: any,
) {
  const {type} = action;

  switch (type) {
    case MOVE_TO_WITHDRAW_AMOUNT_MODAL:
      return {
        ...state,
        withdrawalModal: 'pin',
      };
    default:
      return state;
  }
}
