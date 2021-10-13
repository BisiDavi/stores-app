import React from 'react';
import {Formik} from 'formik';
import {View, StyleSheet} from 'react-native';
import {Button} from 'react-native-elements';

import addProductSchema from '@/schemas/AddProductSchema';
import displayFormElements from './displayFormElements';
import formContent from '@/json/isbnProduct.json';
import colors from '@/utils/colors';

export default function ProdutWithISBNForm({navigation: {goBack}}: any) {
  return (
    <Formik
      validationSchema={addProductSchema}
      initialValues={{
        ISBN: '',
        productName: '',
        productCategory: '',
        productDescription: '',
        productPrice: '',
        quantity: '',
      }}
      onSubmit={(values: any) => {
        console.log('values', values);
      }}
    >
      {formik => (
        <View>
          {formContent.map(formElement =>
            displayFormElements(formElement, formik),
          )}
          <View style={styles.buttonGroup}>
            <Button
              title="Back"
              type="solid"
              titleStyle={styles.backButtonTitle}
              onPress={() => goBack()}
              buttonStyle={styles.backButton}
            />
            <Button
              disabled={!formik.isValid}
              title="Submit"
              type="solid"
              onPress={formik.handleSubmit}
              buttonStyle={styles.nextButton}
            />
          </View>
        </View>
      )}
    </Formik>
  );
}
const styles = StyleSheet.create({
  nextButton: {
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    width: 100,
    borderRadius: 10,
    backgroundColor: colors.mallBlue5,
  },
  backButton: {
    borderWidth: 1,
    borderColor: colors.mallBlue5,
    backgroundColor: 'transparent',
    width: 100,
    borderRadius: 10,
  },
  backButtonTitle: {
    color: colors.mallBlue5,
  },
  buttonGroup: {
    //   display:"flex",
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '92%',
    margin: 10,
    marginTop: 0,
  },
});
