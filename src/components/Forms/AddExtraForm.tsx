import React, {useState} from 'react';
import {Formik} from 'formik';
import {Switch} from 'react-native-elements';
import {View, Text} from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';
import {Button} from 'react-native-elements';
import {useSelector} from 'react-redux';

import displayFormElements from './displayFormElements';
import addExtraSchema from '@/schemas/addExtraSchema';
import formContent from '@/json/add-extra.json';
import colors from '@/utils/colors';
import {addExtrasRequest} from '@/network/postRequest';
import {RootState} from '@/store/RootReducer';
import showToast from '@/utils/showToast';
import AddExtrasModal from '../AddExtraModal/AddExtrasModal';
import {styles} from './AddExtraForm.style';

export default function AddExtraForm({navigation: {goBack}}: any) {
  const [loading, setLoading] = useState(false);
  const [submitForm, setSubmitForm] = useState(false);
  const [isCompulsory, setIsCompulsory] = useState(false);

  function closeAddExtrasModal() {
    setSubmitForm(!submitForm);
  }

  const switchTextStyle = isCompulsory ? styles.compulsory : styles.optional;

  const {storeProfile}: any = useSelector(
    (state: RootState) => state.storeProfile,
  );

  function addExtras(data: any) {
    setLoading(true);
    addExtrasRequest(data)
      .then(response => {
        setLoading(false);
        showToast(response.data.message);
        setSubmitForm(true);
      })
      .catch(error => {
        setLoading(false);
        if (error.request) {
          showToast('Oops, an error occured');
        } else if (error.response) {
          showToast(error.response.data.message);
        }
      });
  }
  return (
    <>
      <Spinner visible={loading} color={colors.cloudOrange5} />
      <AddExtrasModal
        visible={submitForm}
        toggleOverlay={closeAddExtrasModal}
      />
      <Formik
        validationSchema={addExtraSchema}
        initialValues={{
          name: '',
          price: '',
          quantity: 1,
        }}
        onSubmit={(values: any) => {
          const formValues = {
            ...values,
            isAvailable: true,
            isCompulsory: isCompulsory,
            storeId: storeProfile.id,
            price: Number(values.price),
          };
          addExtras(formValues);
        }}
      >
        {formik => {
          return (
            <View style={styles.formContainer}>
              <View style={styles.formInputs}>
                {formContent.map((formElement, index) =>
                  displayFormElements(index, formElement, formik),
                )}
                <View style={styles.switchView}>
                  <Text style={styles.switchText}>
                    Is this extra compulsory
                  </Text>
                  <Switch
                    color={colors.mallBlue5}
                    value={isCompulsory}
                    onValueChange={() => setIsCompulsory(!isCompulsory)}
                  />
                  <Text style={{...styles.switchText, ...switchTextStyle}}>
                    {isCompulsory ? 'Compulsory' : 'Optional'}
                  </Text>
                </View>
              </View>
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
          );
        }}
      </Formik>
    </>
  );
}
