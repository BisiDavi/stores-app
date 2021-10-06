import React, {useEffect, useState} from 'react';
import {Formik} from 'formik';
import {View} from 'react-native';
import {useDispatch} from 'react-redux';
import {Button} from 'react-native-elements';

import addNewProductSchema from '@/components/Schemas/AddNewProductSchema';
import {DisplayFormElements} from '@/components/Forms/DisplayFormElements';
import addproductContent from '@/json/add-product.json';
import {AddProductStep1Action} from '@/store/actions/addProductAction';
import {getProductsCategories} from '@/network/getRequest';
import {showToast} from '@/utils';
import {styles} from '@/styles/AddNewProductForm.style';

export default function AddNewProductForm({navigation}: any) {
  const [productCategories, setProductCategories] = useState<any>([]);
  const dispatch = useDispatch();

  useEffect(() => {
    let renderOnce = true;
    getProductsCategories()
      .then(response => {
        if (renderOnce) {
          return setProductCategories(response.data.data);
        }
      })
      .catch(error => {
        if (error.request) {
        } else if (error.response) {
          showToast(error.response?.data?.message);
        }
      });
    return () => {
      renderOnce = false;
    };
  }, []);

  addproductContent[1].options = productCategories;

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
      )}
    </Formik>
  );
}
