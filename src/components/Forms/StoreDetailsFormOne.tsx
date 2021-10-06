import React, {useState, useEffect} from 'react';
import {Button} from 'react-native-elements';
import {useDispatch} from 'react-redux';
import {Formik} from 'formik';
import Spinner from 'react-native-loading-spinner-overlay';
import {View} from 'react-native';

import {storeDetailsScreenOneSchema} from '@/schemas';
import {colors, showToast} from '@/utils/.';
import storeDetailsFormOne from '@/json/storDetailsFormOneOne.json';
import {StoreDetailsAction} from '@/store/actions/StoreDetailsAction';
import {DisplayFormElements} from './DisplayFormElements';
import {useStoreSetupNavigation, useFormValues} from '@/hooks';
import {
  getAvailableState,
  getStoreCategoriesRequest,
} from '@/network/getRequest';
import StoreTypeInfoModal from '@/components/Modal/StoreTypeInfoModal';
import OpenDaysForm from './OpenDaysForm';
import {styles} from './StoreDetailsFormOne.style';

export default function StoreDetailsFormOne() {
  const dispatch = useDispatch();
  const {onBoardingNextScreen} = useStoreSetupNavigation();
  const [loading, setLoading] = useState(false);
  const [infoModal, setInfoModal] = useState(false);
  const [storeCategory, setStoreCategory] = useState([]);
  const [availableStates, setAvailableState] = useState([]);
  const {formOneMainValues} = useFormValues();

  storeDetailsFormOne[4].options = availableStates;
  storeDetailsFormOne[5].options = storeCategory;

  function toggleModal() {
    return setInfoModal(!infoModal);
  }

  useEffect(() => {
    let useEffectRendered = true;
    getStoreCategoriesRequest()
      .then(response => {
        if (useEffectRendered) {
          setStoreCategory(response.data.data);
        }
      })
      .catch(error => {
        if (error.response) {
          showToast(error.response.data.message);
        } else if (error.request) {
          showToast('Oops an error occured');
        }
      });

    getAvailableState()
      .then(response => {
        if (useEffectRendered) {
          setAvailableState(response.data.data);
        }
      })
      .catch(error => console.log('error', error));

    return () => {
      useEffectRendered = false;
    };
  }, []);

  return (
    <>
      <Spinner visible={loading} color={colors.cloudOrange5} />
      <StoreTypeInfoModal modal={infoModal} toggleModal={toggleModal} />
      <View style={styles.form}>
        <Formik
          validationSchema={storeDetailsScreenOneSchema}
          initialValues={formOneMainValues}
          onSubmit={values => {
            setLoading(true);
            dispatch(StoreDetailsAction(values));
            setLoading(false);
            onBoardingNextScreen(1, false);
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
              {storeDetailsFormOne.map((formElement, index) => (
                <DisplayFormElements
                  key={index}
                  formElement={formElement}
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  values={values}
                  errors={errors}
                  touched={touched}
                  toggleModal={toggleModal}
                />
              ))}
              <OpenDaysForm />
              <View style={styles.buttonView}>
                <Button
                  buttonStyle={styles.buttonStyle}
                  onPress={handleSubmit}
                  disabled={!isValid}
                  title="Next"
                />
              </View>
            </>
          )}
        </Formik>
      </View>
    </>
  );
}
