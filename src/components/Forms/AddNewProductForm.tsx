import React, {useEffect} from 'react';
import {Formik} from 'formik';
import {View} from 'react-native';
import {useDispatch} from 'react-redux';
import {Button} from 'react-native-elements';

import addNewProductSchema from '@/schemas/AddNewProductSchema';
import {DisplayFormElements} from '@/components/Forms/DisplayFormElements';
import addproductContent from '@/json/add-product.json';
import {AddProductStep1Action} from '@/store/actions/addProductAction';
import {getProductsCategories} from '@/network/getRequest';
import {showToast} from '@/utils';
import {styles} from '@/styles/AddNewProductForm.style';
import {useQuery} from 'react-query';

async function fetchProductCategories() {
  const {data} = await getProductsCategories();
  const result = data.data;
  return result;
}

export default function AddNewProductForm({navigation}: any) {
  const dispatch = useDispatch();

  const {status, data: productCategories} = useQuery(
    'fetchProductCategories',
    fetchProductCategories,
  );

  useEffect(() => {
    if (productCategories) {
      addproductContent[1].options = productCategories;
    }
  }, [productCategories]);

  function navigationHandler(handleSubmit: any) {
    handleSubmit();
    navigation.navigate('AddProductOtherDetailsScreen');
  }
  function goBack() {
    navigation.goBack();
  }
  return (
    <Formik
      initialValues={{
        name: '',
        categoryId: '',
        description: '',
        price: '',
        takeAwayPrice: 100,
      }}
      validationSchema={addNewProductSchema}
      onSubmit={(values: any) => {
        console.log('values', values);
        dispatch(AddProductStep1Action(values));
      }}
    >
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        errors,
        touched,
        isValid,
      }) => (
        <>
          {status === 'error'
            ? showToast('unable to fetch product categories')
            : status === 'loading' && showToast('fetching product categories')}
          <View style={styles.formStyle}>
            {addproductContent.map((formElement, index) => (
              <DisplayFormElements
                key={index}
                formElement={formElement}
                handleChange={handleChange}
                handleBlur={handleBlur}
                values={values}
                errors={errors}
                touched={touched}
              />
            ))}
            <View style={styles.buttonGroup}>
              <Button
                title="Back"
                type="solid"
                titleStyle={styles.backButtonTitle}
                onPress={goBack}
                buttonStyle={styles.backButton}
              />
              <Button
                disabled={!isValid}
                title="Next"
                type="solid"
                onPress={() => navigationHandler(handleSubmit)}
                buttonStyle={styles.nextButton}
              />
            </View>
          </View>
        </>
      )}
    </Formik>
  );
}
