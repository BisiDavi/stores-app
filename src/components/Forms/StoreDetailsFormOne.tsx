/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from 'react';
import {Button} from 'react-native-elements';
import {useDispatch, useSelector} from 'react-redux';
import {Formik} from 'formik';
import Spinner from 'react-native-loading-spinner-overlay';
import {View} from 'react-native';
import {useQuery} from 'react-query';

import {storeDetailsScreenOneSchema} from '@/schemas';
import {colors, showToast} from '@/utils/.';
import storeDetailsFormOne from '@/json/storDetailsFormOneOne.json';
import {StoreDetailsAction} from '@/store/actions/StoreDetailsAction';
import displayFormElements from './displayFormElements';
import {useStoreSetupNavigation, useFormValues} from '@/hooks';
import StoreTypeInfoModal from '@/components/Modal/StoreTypeInfoModal';
import OpenDaysForm from './OpenDaysForm';
import {styles} from './StoreDetailsFormOne.style';
import useRequest from '@/hooks/useRequest';
import {StoreProfileIdActions} from '@/store/actions/storeProfileActions';
import {RootState} from '@/store/RootReducer';

export default function StoreDetailsFormOne() {
  const {fetchStoreCategories, fetchAvailableState} = useRequest();
  const dispatch = useDispatch();
  const {storeProfile}: any = useSelector(
    (state: RootState) => state.storeProfile,
  );
  const {fetchStoreProfile} = useRequest();
  const {status: storeCategoryStatus, data: storeCategoryData} = useQuery(
    'storeCategories',
    fetchStoreCategories,
  );

  const {status: availableStateStatus, data: availableStateData} = useQuery(
    'availableState',
    fetchAvailableState,
  );
  const {data, status} = useQuery('storeProfile', fetchStoreProfile);

  useEffect(() => {
    if (status === 'success' && storeProfile.id === null) {
      dispatch(StoreProfileIdActions(data._id));
    }
  }, [status, dispatch]);

  storeDetailsFormOne[4].options = availableStateData;
  storeDetailsFormOne[5].options = storeCategoryData;

  const {onBoardingNextScreen} = useStoreSetupNavigation();
  const [loading, setLoading] = useState(false);
  const [infoModal, setInfoModal] = useState(false);

  const {formOneMainValues} = useFormValues();

  function toggleModal() {
    return setInfoModal(!infoModal);
  }

  return (
    <>
      {storeCategoryStatus === 'error' &&
        showToast('unable to fetch store categories')}
      {availableStateStatus === 'error' &&
        showToast('unable to fetch available state')}

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
          {formik => (
            <>
              {storeDetailsFormOne.map(formElement =>
                displayFormElements(formElement, formik, toggleModal),
              )}
              <OpenDaysForm />
              <View style={styles.buttonView}>
                <Button
                  buttonStyle={styles.buttonStyle}
                  onPress={formik.handleSubmit}
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
