import React, {useState} from 'react';
import {Formik} from 'formik';
import {Switch} from 'react-native-elements';
import {View, Text} from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';
import {Button} from 'react-native-elements';
import {useSelector} from 'react-redux';

import {DisplayFormElements} from '@/components/Forms/DisplayFormElements';
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

  function toggleAddExtrasModal() {
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
        toggleOverlay={toggleAddExtrasModal}
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
            storeId: storeProfile._id,
            price: Number(values.price),
          };
          addExtras(formValues);
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
          <View style={styles.formContainer}>
            <View style={styles.formInputs}>
              {formContent.map((formElement, index) => (
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
              <View style={styles.switchView}>
                <Text style={styles.switchText}>Is this extra compulsory</Text>
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
                disabled={!isValid}
                title="Submit"
                type="solid"
                onPress={handleSubmit}
                buttonStyle={styles.nextButton}
              />
            </View>
          </View>
        )}
      </Formik>
    </>
  );
}
