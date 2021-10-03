import React, {useState} from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import {RNCamera} from 'react-native-camera';
import {Icon} from 'react-native-elements';
import Spinner from 'react-native-loading-spinner-overlay';
import {colors, showToast} from '@/utils';

export default function BarCodeScannerScreen() {
  const [showFlashMode, setShowFlashMode] = useState(false);

  async function takePicture(camera: any) {
    if (camera) {
      const options = {quality: 0.5, base64: true};
      const data = await camera.takePictureAsync(options);
      console.log('takePicture', data.uri);
    }
  }

  function flashModeHandler() {
    setShowFlashMode(!showFlashMode);
  }

  return (
    <View>
      <RNCamera
        style={styles.preview}
        type={RNCamera.Constants.Type.back}
        flashMode={
          showFlashMode
            ? RNCamera.Constants.FlashMode.on
            : RNCamera.Constants.FlashMode.off
        }
        androidCameraPermissionOptions={{
          title: 'Permission to use camera',
          message: 'We need your permission to use your camera',
          buttonPositive: 'Ok',
          buttonNegative: 'Cancel',
        }}
        onBarCodeRead={event => {
          console.log('onBarCodeReadbarcodes', event);
        }}
      >
        {({camera, status}) => {
          if (status !== 'READY') {
            return <Spinner color={colors.cloudOrange5} />;
          } else {
            showToast('Hello, your permission is required to approve payment');
          }
          <View style={styles.snapView}>
            <TouchableOpacity
              onPress={() => takePicture(camera)}
              style={styles.capture}
            >
              <Icon name="camera" type="ionicon" />
            </TouchableOpacity>
            <TouchableOpacity onPress={flashModeHandler} style={styles.capture}>
              <Icon name="flashlight" type="entypo" />
            </TouchableOpacity>
          </View>;
        }}
      </RNCamera>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20,
  },
  snapView: {
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'center',
  },
});
