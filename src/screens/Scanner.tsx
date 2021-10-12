import React, {PureComponent} from 'react';
import getQueue from '@/utils/getQueue';
import {StyleSheet, Animated, Easing, View} from 'react-native';
import {RNCamera} from 'react-native-camera';
import getStyles from '@/styles/ScannerStyle';

const ANIM_DURATION = 1000;

export class Scanner extends PureComponent {
  constructor(props) {
    super(props);
    this._queue = getQueue();
    this.state = {
      containerWidth: 0,
      containerHeight: 0,
    };
    this._lineOffset = new Animated.Value(0);
  }

  _setRef = function (ref: any) {
    this._camera = ref;
  }.bind(this);

  _slideDown = function () {
    this._lineOffset.setValue(0);
    Animated.timing(this._lineOffset, {
      toValue: 1,
      duration: ANIM_DURATION,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start();
    setTimeout(this._slideUp, ANIM_DURATION);
  }.bind(this);

  _slideUp = function () {
    this._lineOffset.setValue(1);
    Animated.timing(this._lineOffset, {
      toValue: 0,
      duration: ANIM_DURATION,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start();
    setTimeout(this._slideDown, ANIM_DURATION);
  }.bind(this);

  _onLayout = async function (e) {
    const {
      nativeEvent: {
        layout: {width: containerWidth, height: containerHeight},
      },
    } = e;
    await new Promise(resolve => {
      this.setState(
        (prevState: any) => ({
          ...prevState,
          containerWidth,
          containerHeight,
        }),
        resolve,
      );
    });
  }.bind(this);

  _parseBarcode = async function (e: {data: any}) {
    const {correctCode, onBarcodeMatch} = this.props;
    if (
      correctCode !== this._lastMatched &&
      e.data === correctCode &&
      typeof onBarcodeMatch === 'function'
    ) {
      await Promise.resolve(onBarcodeMatch());
      this._lastMatched = correctCode;
    }
  }.bind(this);

  _onBarcodeDetected = async function (e) {
    await this._queue.asyncAdd({
      task: this._parseBarcode,
      args: [e],
      context: this,
    });
  }.bind(this);

  componentDidMount() {
    this._slideDown();
  }

  render() {
    const {containerWidth, containerHeight} = this.state;
    const {
      container: _sContainer,
      camera: _sCamera,
      hotspot: _sHotspot,
      borders: {tl: _sTLBorder, tr: _sTRBorder, bl: _sBLBorder, br: _sBRBorder},
      line: _sLScanner,
    } = getStyles({
      containerWidth,
      containerHeight,
      lineOffset: this._lineOffset,
    });
    return (
      <View onLayout={e => this._onLayout(e)} style={styles.container}>
        {containerWidth && containerHeight ? (
          <RNCamera
            captureAudio={false}
            ref={this._setRef}
            onBarCodeRead={e => this._onBarcodeDetected(e)}
            useNativeZoom={true}
            style={styles.preview}
            androidCameraPermissionOptions={{
              title: 'Permission to use camera',
              message: 'We need your permission to use your camera',
              buttonPositive: 'Ok',
              buttonNegative: 'Cancel',
            }}
            androidRecordAudioPermissionOptions={{
              title: 'Permission to use audio recording',
              message: 'We need your permission to use your audio',
              buttonPositive: 'Ok',
              buttonNegative: 'Cancel',
            }}
          >
            <View style={_sHotspot}>
              <View style={_sTLBorder} />
              <View style={_sBLBorder} />
              <View style={_sTRBorder} />
              <View style={_sBRBorder} />
              <Animated.View style={_sLScanner} />
            </View>
          </RNCamera>
        ) : null}
      </View>
    );
  }
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
  touchView: {flex: 0, flexDirection: 'row', justifyContent: 'center'},
  snap: {fontSize: 14},
});
