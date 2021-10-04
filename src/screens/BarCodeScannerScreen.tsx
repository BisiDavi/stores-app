import React, {useState, useEffect} from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Alert,
  PermissionsAndroid,
} from 'react-native';
import {RNCamera} from 'react-native-camera';
import {Icon} from 'react-native-elements';
import Spinner from 'react-native-loading-spinner-overlay';
import {colors} from '@/utils';

export default function BarCodeScannerScreen() {
  const [showFlashMode, setShowFlashMode] = useState(false);

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

  const flashlightStyle = showFlashMode && styles.flashLightMode;
  const flashlightIconStyle = showFlashMode
    ? colors.neutralWhite
    : colors.black;

  async function takePicture(camera: any) {
    if (camera) {
      try {
        const options = {quality: 0.5, base64: true};
        const data = await camera.takePictureAsync(options);
        console.log('takePicture', data.uri);
      } catch (error) {
        console.log('error', error);
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
        type={RNCamera.Constants.Type.back}
        captureAudio={false}
        flashMode={
          showFlashMode
            ? RNCamera.Constants.FlashMode.on
            : RNCamera.Constants.FlashMode.off
        }
        onBarCodeRead={event => {
          console.log('event', event);
          //Alert.alert('barCode Data', JSON.stringify(event.data));
        }}
      >
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
    borderRadius: 100,
    padding: 15,
    alignSelf: 'center',
    margin: 10,
  },
  snapView: {
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    position: 'absolute',
    left: 0,
    zIndex: 200,
    width: Dimensions.get('window').width,
  },
  flashLightMode: {
    backgroundColor: colors.mallBlue5,
  },
  flashLighIconOn: {
    color: colors.neutralWhite,
  },
  flashLighIconOff: {
    color: colors.black,
  },
});
