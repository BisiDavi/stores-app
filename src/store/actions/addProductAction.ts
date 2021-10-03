import {productPayloadType, productType} from '@/customTypes/addProductTypes';
import {
  ADD_PRODUCT_STEP_1,
  ADD_PRODUCT_STEP_2,
  SUBMIT_PRODUCT,
} from '../constant';

export const AddProductStep1Action =
  (payload: productPayloadType) =>
  (
    dispatch: (arg0: {type: productType; payload: productPayloadType}) => void,
  ) => {
    dispatch({
      type: ADD_PRODUCT_STEP_1,
      payload,
    });
  };

export const AddProductStep2Action =
  (payload: productPayloadType) =>
  (
    dispatch: (arg0: {type: productType; payload: productPayloadType}) => void,
  ) => {
    dispatch({
      type: ADD_PRODUCT_STEP_2,
      payload,
    });
  };

export const SubmitProductAction =
  (payload: boolean) =>
  (dispatch: (arg0: {type: productType; payload: boolean}) => void) => {
    dispatch({
      type: SUBMIT_PRODUCT,
      payload,
    });
  };
