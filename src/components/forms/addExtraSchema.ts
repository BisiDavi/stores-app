import * as yup from 'yup';

const addExtraSchema = yup.object().shape({
  name: yup.string().required('Please enter an extra product name'),
  price: yup.string().required('Price is required'),
  quantity: yup.string().required('Quantity is required'),
});

export default addExtraSchema;
