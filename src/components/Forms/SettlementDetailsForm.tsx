/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from 'react';
import {Button} from 'react-native-elements';
import {useDispatch, useSelector} from 'react-redux';
import {Formik} from 'formik';
import Spinner from 'react-native-loading-spinner-overlay';
import {View} from 'react-native';

import {useFormValues, useStoreSetupNavigation} from '@/hooks/.';
import {colors, showToast} from '@/utils/.';
import settlementDetails from '@/json/settlement-details.json';
import displayFormElements from './displayFormElements';
import {storeSettlementDetailsSchema} from '@/schemas/StoreDetailsSchema';
import {StoreSettlementAction} from '@/store/actions/StoreDetailsAction';
import {postStoreDetailsRequest} from '@/network/postRequest';
import {RootState} from '@/store/RootReducer';
import TransactionPinModal from '../Modal/TransactionPinModal';
import {styles} from './SettlementDetailsForm.style';

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

  useEffect(() => {
    let postSettlementDetails = true;
    if (submitForm) {
      setLoading(true);
      postStoreDetailsRequest(storeDetails)
        .then(response => {
          setLoading(false);
          if (postSettlementDetails) {
            showToast(response.data.message);
            onBoardingNextScreen(4, false);
          }
          setSubmitForm(false);
        })
        .catch(error => {
          console.log('error', error);
          setLoading(false);
          let errorMessage;
          if (error.response) {
            errorMessage = error.response.data.message;
          } else if (error.request) {
            errorMessage = 'Oops, poor network, try again';
          }
          showToast(errorMessage);
          setSubmitForm(false);
        });
    }
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
            dispatch(StoreSettlementAction(values));
            setSubmitForm(true);
          }}
        >
          {formik => (
            <>
              {settlementDetails.map(formElement =>
                displayFormElements(
                  formElement,
                  formik,
                  toggleTransactionModal,
                ),
              )}
              <View style={styles.buttonView}>
                <Button
                  buttonStyle={styles.nextButtonStyle}
                  onPress={formik.handleSubmit}
                  titleStyle={styles.nextTextStyle}
                  disabled={!formik.isValid}
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
