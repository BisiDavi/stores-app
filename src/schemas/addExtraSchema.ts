import * as yup from 'yup';

export const productCategorySchema = yup.object().shape({
  productCategory: yup
    .string()
    .min(3, 'enter a valid product category ')
    .required('Please enter a product category'),
});

const addExtraSchema = yup.object().shape({
  name: yup.string().required('Please enter an extra product name'),
  price: yup.string().required('Price is required'),
  quantity: yup.string().required('Quantity is required'),
});

export default addExtraSchema;
