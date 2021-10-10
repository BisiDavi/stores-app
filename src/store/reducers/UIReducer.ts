import {MOVE_TO_WITHDRAW_AMOUNT_MODAL} from '../constant';

export default function UIReducer(
  state = {
    withdrawalModal: 'pin',
  },
  action: any,
) {
  const {type} = action;

  switch (type) {
    case MOVE_TO_WITHDRAW_AMOUNT_MODAL:
      return {
        ...state,
        withdrawalModal: 'withdawAmount',
      };
    default:
      return state;
  }
}
