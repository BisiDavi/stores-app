import React, {PropsWithChildren} from 'react';
import {View} from 'react-native';
import Modal from 'react-native-modal';

export default function AppModal({
  children,
  visible,
  style,
  toggleOverlay,
}: PropsWithChildren<AppModalProps>) {
  return (
    <View>
      <Modal style={style} isVisible={visible} onBackdropPress={toggleOverlay}>
        {children}
      </Modal>
    </View>
  );
}

export interface AppModalProps {
  toggleOverlay: () => void;
  visible: boolean;
  style?: any;
}
