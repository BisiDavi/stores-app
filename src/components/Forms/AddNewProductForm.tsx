import React from 'react';
import {Formik} from 'formik';
import {View} from 'react-native';
import {useDispatch} from 'react-redux';
import {useQuery} from 'react-query';
import {Button} from 'react-native-elements';

import addNewProductSchema from '@/schemas/AddNewProductSchema';
import displayFormElements from './displayFormElements';
import addproductContent from '@/json/add-product.json';
import {AddProductStep1Action} from '@/store/actions/addProductAction';
import {getProductsCategories} from '@/network/getRequest';
import {showToast} from '@/utils';
import {styles} from '@/styles/AddNewProductForm.style';

async function fetchProductCategories() {
  const {data} = await getProductsCategories();
  const result = data.data;
  addproductContent[1].options = result;
  return result;
}

export default function AddNewProductForm({navigation}: any) {
  const dispatch = useDispatch();

  const {status} = useQuery('fetchProductCategories', fetchProductCategories);

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
      {formik => (
        <>
          {status === 'error' &&
            showToast('unable to fetch product categories')}
          <View style={styles.formStyle}>
            {addproductContent.map(formElement =>
              displayFormElements(formElement, formik),
            )}
            <View style={styles.buttonGroup}>
              <Button
                title="Back"
                type="solid"
                titleStyle={styles.backButtonTitle}
                onPress={goBack}
                buttonStyle={styles.backButton}
              />
              <Button
                disabled={!formik.isValid}
                title="Next"
                type="solid"
                onPress={() => navigationHandler(formik.handleSubmit)}
                buttonStyle={styles.nextButton}
              />
            </View>
          </View>
        </>
      )}
    </Formik>
  );
}
