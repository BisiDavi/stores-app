import React, {useState, useEffect} from 'react';
import {View, TouchableOpacity, Alert, PermissionsAndroid} from 'react-native';
import BarcodeMask from '@nartc/react-native-barcode-mask';
import {RNCamera} from 'react-native-camera';
import {Icon} from 'react-native-elements';
import Spinner from 'react-native-loading-spinner-overlay';

import {colors} from '@/utils';
import {styles} from '@/styles/BarCodeScannerScreen.style';
import {postScanResponse} from '@/network/postRequest';
import {useSelector} from 'react-redux';
import {RootState} from '@/store/RootReducer';
import useRequest from '@/hooks/useRequest';
import {useQuery} from 'react-query';

export default function BarCodeScannerScreen() {
  const [showFlashMode, setShowFlashMode] = useState(false);
  const [scannedResult, setScannedResult] = useState(null);
  const [snapPicture, setSnapPicture] = useState(false);
  const {fetchStoreProfile} = useRequest();

  const {data, status} = useQuery('storeProfile', fetchStoreProfile);

  const {amount} = useSelector((state: RootState) => state.order);

  console.log('BarCodeScannerScreen amount', amount);

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

  useEffect(() => {
    if (scannedResult !== null && snapPicture && status === 'success') {
      if (data.storeId === scannedResult.storeId) {
        postScanResponse({
          orderIds: scannedResult.orderIds,
          status: true,
        });
      }
    }
  }, [scannedResult, snapPicture, status]);

  const flashlightStyle = showFlashMode && styles.flashLightMode;
  const flashlightIconStyle = showFlashMode
    ? colors.neutralWhite
    : colors.black;

  async function takePicture(camera: any) {
    if (camera) {
      try {
        const options = {quality: 0.5, base64: true};
        const data = await camera.takePictureAsync(options);
        setSnapPicture(true);
        console.log('takePicture', data.uri);
      } catch (error) {
        console.log('error', error);
        setSnapPicture(false);
        Alert.alert('Error, Error reading ISBN');
      }
    }
  }

  function flashModeHandler() {
    setShowFlashMode(!showFlashMode);
  }

  return (
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
        flashMode={
          showFlashMode
            ? RNCamera.Constants.FlashMode.on
            : RNCamera.Constants.FlashMode.off
        }
        onBarCodeRead={event => {
          console.log('event', event);
          Alert.alert('barCode Data', JSON.stringify(event.data));
          setScannedResult(event.data);
        }}
      >
        <>
          {({camera, status}) => {
            if (status !== 'READY') {
              return <Spinner color={colors.cloudOrange5} />;
            }
            return (
              <View style={styles.snapView}>
                <TouchableOpacity
                  onPress={() => takePicture(camera)}
                  style={styles.capture}
                >
                  <Icon name="camera" type="ionicon" />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={flashModeHandler}
                  style={{...styles.capture, ...flashlightStyle}}
                >
                  <Icon
                    name="flashlight"
                    color={flashlightIconStyle}
                    type="entypo"
                  />
                </TouchableOpacity>
              </View>
            );
          }}
          <BarcodeMask edgeColor={'#62B1F6'} showAnimatedLine={true} />
        </>
      </RNCamera>
    </View>
  );
}
