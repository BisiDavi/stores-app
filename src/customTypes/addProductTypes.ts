export type productType =
  | 'ADD_PRODUCT_STEP_1'
  | 'ADD_PRODUCT_STEP_2'
  | 'SUBMIT_PRODUCT';

export type productPayloadType = {
  name: string;
  description: string;
  price: string;
  categoryId: string;
  takeAwayPrice: number;
  isAvailable: number;
  duration: string;
};

export type addProductTypes = {
  payload: productPayloadType;
  type: productType;
};

export type addProductStateType = {
  product: {
    name: string;
    description: string;
    price: number;
    categoryId: string;
    takeAwayPrice: number;
    storeId: string;
    duration: number;
    isAvailable: boolean;
  };
  submitProduct: boolean;
};
