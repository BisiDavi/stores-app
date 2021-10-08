import React from 'react';
import {useSelector} from 'react-redux';
import {View, Text, Image} from 'react-native';
import Modal from 'react-native-modal';
import HandWave from '@/assets/hand-wave.png';
import {RootState} from '@/store/RootReducer';
import {StoreDetailsStateType} from '@/customTypes/storeDetailsTypes';
import {styles} from './WelcomeModal.style';

interface AppModalProps {
  closeModal: () => void;
  visible: boolean;
}

export default function TransactionPinModal({
  closeModal,
  visible,
}: AppModalProps) {
  const {storeDetails}: StoreDetailsStateType = useSelector(
    (state: RootState) => state.storeDetails,
  );

  return (
    <Modal
      style={styles.modal}
      isVisible={visible}
      onBackdropPress={closeModal}
    >
      <View style={styles.modalView}>
        <View style={styles.modalTitle}>
          <Text style={styles.welcome}>Hello {storeDetails.name}. </Text>
          <Image source={HandWave} />
        </View>
        <Text style={styles.modalContent}>
          The transaction pin is a unique pin that authorizes you to withdraw
          from your stores wallet.
        </Text>
        <Text style={styles.note}>
          Please note: Your transaction pin is not your CARD PIN. Thank you
        </Text>
      </View>
    </Modal>
  );
}
