import React, {useState, useEffect} from 'react';
import {Button} from 'react-native-elements';
import {useDispatch} from 'react-redux';
import {Formik} from 'formik';
import Spinner from 'react-native-loading-spinner-overlay';
import {Dimensions, StyleSheet, View} from 'react-native';
import {storeDetailsScreenOneSchema} from '.';
import {colors, showToast} from '@/utils/.';
import storeDetailsFormOne from '@/json/storDetailsFormOneOne.json';
import {StoreDetailsAction} from '@/store/actions/StoreDetailsAction';
import {DisplayFormElements} from './DisplayFormElements';
import {useStoreSetupNavigation, useFormValues} from '@/hooks';
import {
  getAvailableState,
  getStoreCategoriesRequest,
} from '@/network/getRequest';
import StoreTypeInfoModal from '@/components/StoreTypeInfoModal';
import OpenDays from '../OpenDays';

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
              <OpenDays />
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

const styles = StyleSheet.create({
  form: {
    marginTop: 10,
    padding: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonStyle: {
    width: Dimensions.get('window').width * 0.7,
    alignItems: 'center',
    backgroundColor: colors.mallBlue5,
    justifyContent: 'center',
  },
  buttonView: {
    alignItems: 'center',
    marginTop: 20,
    justifyContent: 'center',
    marginBottom: 40,
  },
  title: {
    fontSize: 20,
    textAlign: 'left',
    fontWeight: 'bold',
    justifyContent: 'flex-start',
    marginBottom: 0,
    marginTop: 0,
    width: '100%',
    alignItems: 'flex-start',
  },
});
