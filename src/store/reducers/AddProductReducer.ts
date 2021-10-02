import {
  addProductStateType,
  addProductTypes,
} from '@/customTypes/addProductTypes';
import {ADD_PRODUCT_STEP_1, ADD_PRODUCT_STEP_2} from '@/store/constant';

export function AddProductReducer(
  state: addProductStateType = {
    product: {
      name: '',
      description: '',
      storeId: '',
      quantity: 0,
      categoryId: '',
      takeAwayPrice: 0,
      kg: '',
      duration: 0,
      price: '',
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
          quantity: payload.quantity,
          categoryId: payload.categoryId,
        },
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
