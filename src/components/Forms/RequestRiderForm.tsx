import React from 'react';
import {Formik} from 'formik';
import {Button} from 'react-native-elements';
import {View, StyleSheet, Dimensions} from 'react-native';

import requestRiderSchema from '@/schemas/RequestRiderSchema';
import displayFormElements from './displayFormElements';
import requestRiderContent from '@/json/request-rider.json';
import colors from '@/utils/colors';

export default function RequestRiderForm() {
  return (
    <Formik
      initialValues={{
        personName: '',
        phone: '',
        address: '',
        additionalDescription: '',
      }}
      validationSchema={requestRiderSchema}
      onSubmit={(values: any) => {
        console.log('values', values);
      }}
    >
      {formik => (
        <>
          {requestRiderContent.map((formElement, index) =>
            displayFormElements(index, formElement, formik),
          )}
          <View style={styles.buttonGroup}>
            <Button
              title="Proceed to Payment"
              type="solid"
              onPress={formik.handleSubmit}
              titleStyle={styles.buttonTitle}
              buttonStyle={styles.button}
            />
          </View>
        </>
      )}
    </Formik>
  );
}

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    width: Dimensions.get('window').width * 0.7,
    borderRadius: 8,
    height: 40,
    backgroundColor: colors.mallBlue5,
  },
  buttonTitle: {
    color: colors.neutralWhite,
  },
  buttonGroup: {
    alignItems: 'center',
    justifyContent: 'space-between',
    width: Dimensions.get('window').width * 0.8,
    margin: 10,
    marginTop: 10,
  },
});
