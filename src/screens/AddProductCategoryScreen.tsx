import React, {useState} from 'react';
import Spinner from 'react-native-loading-spinner-overlay';
import {Formik} from 'formik';
import {View} from 'react-native';
import {Button} from 'react-native-elements';
import {Input} from 'react-native-elements';

import colors from '@/utils/colors';
import {addProductsCategories} from '@/network/postRequest';
import {showToast} from '@/utils';
import {productCategorySchema} from '@/schemas/addExtraSchema';
import {styles} from '@/styles/AddProductCategoryScreen.style';
import AddExtrasModal from '@/components/AddExtraModal/AddExtrasModal';

export default function AddProductCategoryScreen() {
  const [loading, setLoading] = useState(false);
  const [submitForm, setSubmitForm] = useState(false);

  function toggleModal() {
    setSubmitForm(!submitForm);
  }

  return (
    <>
      <AddExtrasModal noText visible={submitForm} toggleOverlay={toggleModal} />
      <Spinner visible={loading} color={colors.cloudOrange5} />
      <Formik
        validationSchema={productCategorySchema}
        initialValues={{
          productCategory: '',
        }}
        onSubmit={(values: any, {resetForm}) => {
          setLoading(true);
          addProductsCategories({name: values.productCategory})
            .then(response => {
              setLoading(false);
              showToast(response.data.message);
              toggleModal();
              resetForm();
            })
            .catch(error => {
              setLoading(false);
              if (error.response) {
                showToast(error.response.data.message);
              } else if (error.request) {
                showToast('Oops, network error');
              }
            });
        }}
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          touched,
          errors,
          values,
          isValid,
        }) => (
          <View style={styles.container}>
            <Input
              value={values.productCategory}
              onBlur={handleBlur('productCategory')}
              onChangeText={handleChange('productCategory')}
              keyboardType="default"
              errorMessage={
                errors.productCategory &&
                touched.productCategory &&
                errors.productCategory
              }
              label="Add Product Category"
            />
            <View style={styles.buttonViewStyle}>
              <Button
                buttonStyle={styles.buttonStyle}
                titleStyle={styles.buttonText}
                type="solid"
                title="Add Product Category"
                disabled={!isValid}
                onPress={handleSubmit}
              />
            </View>
          </View>
        )}
      </Formik>
    </>
  );
}
