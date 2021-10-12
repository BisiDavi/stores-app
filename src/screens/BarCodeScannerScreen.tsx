/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from 'react';
import {View, PermissionsAndroid} from 'react-native';
//import BarcodeMask from '@nartc/react-native-barcode-mask';
import BarcodeMask from 'react-native-barcode-mask';
import {RNCamera} from 'react-native-camera';
import {useSelector} from 'react-redux';

import {styles} from '@/styles/BarCodeScannerScreen.style';
import {postScanResponse} from '@/network/postRequest';
import {useNavigation} from '@react-navigation/core';

import {RootState} from '@/store/RootReducer';
import useRequest from '@/hooks/useRequest';
import {useQuery} from 'react-query';
import BarcodeModal from '@/components/Modal/BarcodeModal';

export default function BarCodeScannerScreen() {
  const [scannedResult, setScannedResult] = useState<any>(null);
  const {fetchStoreProfile} = useRequest();
  const [isAmountAccurate, setIsAmountAccurate] = useState<null | boolean>(
    null,
  );
  const successRoute: any = 'PaymentApprovedScreen';
  const failedRoute: any = 'FailedPaymentScreen';
  const navigation = useNavigation();
  const [visible, setModalVisible] = useState(false);

  const {data, status} = useQuery('storeProfile', fetchStoreProfile);

  const {amount} = useSelector((state: RootState) => state.order);

  console.log('BarCodeScannerScreen amount', amount);

  console.log('scannedResult scannedResult', scannedResult);

  async function takePermissions() {
    await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.CAMERA, {
      title: 'Cloudmall Stores App Camera Permission',
      message: 'Cloudmall Stores App needs access to your camera',
      buttonNegative: 'Cancel',
      buttonPositive: 'OK',
    });
  }

  useEffect(() => {
    takePermissions();
  }, []);

  function closeModal() {
    setModalVisible(false);
  }

  const modalText =
    isAmountAccurate !== null && isAmountAccurate
      ? 'Payment Successful!'
      : 'Payment Successful!';

  useEffect(() => {
    if (scannedResult !== null && status === 'success') {
      if (
        data.storeId === scannedResult.storeId &&
        Number(scannedResult.totalPrice) === Number(amount)
      ) {
        postScanResponse({
          orderIds: scannedResult.orderIds,
          status: true,
          totalPrice: scannedResult.totalPrice,
          storeId: scannedResult.storeId,
        });
        setModalVisible(true);
        setIsAmountAccurate(true);
        navigation.navigate(successRoute);
      } else {
        setIsAmountAccurate(false);
        navigation.navigate(failedRoute);
      }
    }
  }, [scannedResult, status]);

  return (
    <>
      <BarcodeModal
        closeModal={closeModal}
        visible={visible}
        text={modalText}
      />
      <View style={styles.container}>
        <RNCamera
          ref={ref => ref?._cameraRef}
          style={styles.preview}
          autoFocus="on"
          autoFocusPointOfInterest={{
            x: 0.5,
            y: 0.5,
          }}
          type={RNCamera.Constants.Type.back}
          captureAudio={false}
          onBarCodeRead={event => {
            console.log('event', event.data);
            //Alert.alert('barCode Data', JSON.stringify(event.data));

            setScannedResult(event.data);
          }}
        >
          <BarcodeMask edgeColor={'#62B1F6'} showAnimatedLine={true} />
        </RNCamera>
      </View>
    </>
  );
}
