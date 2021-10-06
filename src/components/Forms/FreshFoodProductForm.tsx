import React from 'react';
import {Formik} from 'formik';
import {View} from 'react-native';
import {useDispatch} from 'react-redux';
import {Button} from 'react-native-elements';

import addNewProductSchema from '@/schemas/AddNewProductSchema';
import {DisplayFormElements} from '@/components/Forms/DisplayFormElements';
import addFreshProductContent from '@/json/add-fresh-food.json';
import {AddProductStep1Action} from '@/store/actions/addProductAction';
import {checkObjectKey} from '@/utils/checkExistingStore';
import {styles} from './FreshFoodProductForm.style';

export default function FreshFoodProductForm({navigation}: any) {
  const dispatch = useDispatch();

  function navigationHandler(handleSubmit: any, isFormFilled: number) {
    handleSubmit();
    if (isFormFilled === 6) {
      navigation.navigate('AddFreshFoodOtherDetailsScreen');
    }
  }
  function goBack() {
    navigation.goBack();
  }
  return (
    <Formik
      initialValues={{
        name: '',
        categoryId: '5e677e28ef014a1626d2b5ed',
        description: '',
        price: 0,
        takeAwayPrice: 0,
        quantity: 100,
      }}
      validationSchema={addNewProductSchema}
      onSubmit={(values: any) => {
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
      }) => {
        const isFormFilled = checkObjectKey('errors');
        return (
          <View style={styles.formView}>
            {addFreshProductContent.map((formElement, index) => (
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
                onPress={() => navigationHandler(handleSubmit, isFormFilled)}
                buttonStyle={styles.nextButton}
              />
            </View>
          </View>
        );
      }}
    </Formik>
  );
}
