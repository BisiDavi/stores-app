import {MOVE_WITHDRAW_MODAL} from '../constant';

export default function UIReducer(
  state = {
    withdrawalModal: 'withdawAmount',
  },
  action: any,
) {
  const {type, payload} = action;

  switch (type) {
    case MOVE_WITHDRAW_MODAL:
      return {
        ...state,
        withdrawalModal: payload,
      };
    default:
      return state;
  }
}
