import React, {useState} from 'react';
import {Button} from 'react-native-elements';
import {useDispatch} from 'react-redux';
import {Formik} from 'formik';
import Spinner from 'react-native-loading-spinner-overlay';
import {View} from 'react-native';

import {useStoreSetupNavigation, useFormValues} from '@/hooks/.';
import storeDetailsFormTwo from '@/json/storeDetailsFormTwo.json';
import {storeDetailsScreenTwoSchema} from '@/schemas';
import displayFormElements from './displayFormElements';
import {StoreOwnerAction} from '@/store/actions/StoreDetailsAction';
import {colors} from '@/utils/.';
import {styles} from './StoreDetailsFormTwo.style';

export default function StoreDetailsFormTwo() {
  const [loading, setLoading] = useState(false);
  const {onBoardingNextScreen} = useStoreSetupNavigation();
  const dispatch = useDispatch();
  const {formTwoMainValues} = useFormValues();

  return (
    <>
      <Spinner visible={loading} color={colors.cloudOrange5} />
      <Formik
        validationSchema={storeDetailsScreenTwoSchema}
        initialValues={formTwoMainValues}
        onSubmit={values => {
          setLoading(true);
          dispatch(StoreOwnerAction(values));
          setLoading(false);
          onBoardingNextScreen(3, false);
        }}
      >
        {formik => (
          <View style={styles.form}>
            {storeDetailsFormTwo.map(formElement =>
              displayFormElements(formElement, formik),
            )}
            <View style={styles.buttonView}>
              <Button
                buttonStyle={styles.buttonStyle}
                onPress={formik.handleSubmit}
                disabled={!formik.isValid}
                title="Next"
              />
            </View>
          </View>
        )}
      </Formik>
    </>
  );
}
