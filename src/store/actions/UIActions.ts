import {MOVE_WITHDRAW_MODAL} from '../constant';

export const UIWithdrawalModalAction =
  (payload: string) =>
  (
    dispatch: (arg0: {type: 'MOVE_WITHDRAW_MODAL'; payload: string}) => void,
  ) => {
    dispatch({
      type: MOVE_WITHDRAW_MODAL,
      payload,
    });
  };
