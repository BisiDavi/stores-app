import {MOVE_TO_WITHDRAW_AMOUNT_MODAL} from '../constant';

export const UIWithdrawalModalAction =
  () => (dispatch: (arg0: {type: 'MOVE_TO_WITHDRAW_AMOUNT_MODAL'}) => void) => {
    dispatch({
      type: MOVE_TO_WITHDRAW_AMOUNT_MODAL,
    });
  };
