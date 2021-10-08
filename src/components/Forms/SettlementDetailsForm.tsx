/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from 'react';
import {Button} from 'react-native-elements';
import {useDispatch, useSelector} from 'react-redux';
import {Formik} from 'formik';
import Spinner from 'react-native-loading-spinner-overlay';
import {Dimensions, StyleSheet, View} from 'react-native';

import {useFormValues, useStoreSetupNavigation} from '@/hooks/.';
import {colors, showToast} from '@/utils/.';
import settlementDetails from '@/json/settlement-details.json';
import {DisplayFormElements} from './DisplayFormElements';
import {storeSettlementDetailsSchema} from '@/schemas/StoreDetailsSchema';
import {StoreSettlementAction} from '@/store/actions/StoreDetailsAction';
import {postStoreDetailsRequest} from '@/network/postRequest';
import {RootState} from '@/store/RootReducer';
import TransactionPinModal from '../Modal/TransactionPinModal';

interface formValuesState {
  settlementPlan: string;
  bankName: string;
  bankCode: string;
  accountNumber: string;
  accountName: string;
}

export default function SettlementDetailsForm() {
  const [loading, setLoading] = useState(false);
  const [submitForm, setSubmitForm] = useState(false);
  const [transactionModal, setTransactionModal] = useState(false);

  const {onBoardingNextScreen} = useStoreSetupNavigation();
  const dispatch = useDispatch();
  const {storeDetails} = useSelector((state: RootState) => state.storeDetails);
  const {formThreeMainValues} = useFormValues();

  function toggleTransactionModal() {
    return setTransactionModal(!transactionModal);
  }

  console.log('storeDetails', storeDetails);

  useEffect(() => {
    let postSettlementDetails = true;
    if (submitForm) {
      console.log('running request');
      postStoreDetailsRequest(storeDetails)
        .then(response => {
          console.log('response postStoreDetailsRequest', response.data);
          setLoading(false);
          if (postSettlementDetails) {
            showToast(response.data.message);
            onBoardingNextScreen(4, false);
          }
        })
        .catch(error => {
          console.log('error postStoreDetailsRequest', error);
          setLoading(false);
          let errorMessage;
          if (error.request) {
            errorMessage = 'Oops, poor network, try again';
          } else if (error.response) {
            errorMessage = error.response.data.message;
          }
          showToast(errorMessage);
        });
    }
    //cancel subscription to useEffect
    return () => {
      postSettlementDetails = false;
    };
  }, [submitForm]);

  const settlementOptions: any = settlementDetails[1].options;

  return (
    <>
      <Spinner visible={loading} color={colors.cloudOrange5} />
      <TransactionPinModal
        visible={transactionModal}
        closeModal={toggleTransactionModal}
      />
      <View style={styles.form}>
        <Formik
          validationSchema={storeSettlementDetailsSchema}
          initialValues={formThreeMainValues}
          onSubmit={values => {
            const selectedBank: any = settlementOptions.filter(
              (bank: any) => bank.bank_code === values.bankCode,
            );
            const selectedBankArray = selectedBank.map(
              (bank: any) => bank.bank_name,
            );
            values.bankName = selectedBankArray[0];
            setLoading(true);
            dispatch(StoreSettlementAction(values));
            setSubmitForm(true);
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
              {settlementDetails.map((formElement, index: number) => (
                <DisplayFormElements
                  key={index}
                  formElement={formElement}
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  values={values}
                  errors={errors}
                  touched={touched}
                  toggleModal={toggleTransactionModal}
                />
              ))}
              <View style={styles.buttonView}>
                <Button
                  buttonStyle={styles.nextButtonStyle}
                  onPress={handleSubmit}
                  titleStyle={styles.nextTextStyle}
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
    padding: 20,
    paddingTop: 10,
    paddingLeft: 0,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  nextButtonStyle: {
    width: Dimensions.get('window').width * 0.3,
    alignItems: 'center',
    color: colors.neutralWhite,
    backgroundColor: colors.mallBlue5,
    fontFamily: 'Roboto-Bold',
  },
  skipButtonStyle: {
    width: Dimensions.get('window').width * 0.3,
    alignItems: 'center',
    backgroundColor: 'transparent',
    borderColor: colors.mallBlue5,
    borderWidth: 1,
    fontFamily: 'Roboto-Bold',
  },
  skipTextStyle: {
    color: colors.mallBlue5,
  },
  nextTextStyle: {
    color: colors.neutralWhite,
  },
  buttonView: {
    alignItems: 'center',
    marginTop: 10,
    justifyContent: 'space-between',
    flexDirection: 'row',
    padding: 10,
    paddingTop: 0,
    width: '80%',
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
