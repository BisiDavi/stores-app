import {
  addProductStateType,
  addProductTypes,
} from '@/customTypes/addProductTypes';
import {
  ADD_PRODUCT_STEP_1,
  ADD_PRODUCT_STEP_2,
  SUBMIT_PRODUCT,
} from '@/store/constant';

export function AddProductReducer(
  state: addProductStateType = {
    product: {
      name: '',
      description: '',
      storeId: '',
      categoryId: '',
      takeAwayPrice: 0,
      duration: 0,
      price: 0,
      isAvailable: true,
    },
    submitProduct: false,
  },
  action: addProductTypes,
) {
  const {payload, type} = action;
  switch (type) {
    case ADD_PRODUCT_STEP_1: {
      return {
        ...state,
        product: {
          ...state.product,
          name: payload.name,
          description: payload.description,
          price: payload.price,
          takeAwayPrice: payload.takeAwayPrice,
          categoryId: payload.categoryId,
        },
      };
    }
    case SUBMIT_PRODUCT: {
      console.log('payload SUBMIT_PRODUCT', payload);
      return {
        ...state,
        submitProduct: payload,
      };
    }
    case ADD_PRODUCT_STEP_2: {
      return {
        ...state,
        product: {
          ...state.product,
          duration: payload.duration,
          isAvailable: payload.isAvailable,
        },
        submitProduct: true,
      };
    }
    default:
      return state;
  }
}
