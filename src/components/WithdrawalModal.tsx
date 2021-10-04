import React from 'react';
import Modal from 'react-native-modal';
import {View, Text} from 'react-native';
import {styles} from '@/styles/WithdrawalModal.style';
interface AppModalProps {
  closeModal: () => void;
  visible: boolean;
}
export default function WithdrawalModal({closeModal, visible}: AppModalProps) {
  return (
    <Modal
      style={styles.modal}
      isVisible={visible}
      onBackdropPress={closeModal}
    >
      <View style={styles.modalView}>
        <View style={styles.modalTitle}>
          <Text style={styles.welcome}>Welcome </Text>
        </View>
        <Text style={styles.modalContent}>
          Thank you for creating your store’s account. We will verify your
          details in the next 24 -48 hours. Set up your store while at this.
        </Text>
      </View>
    </Modal>
  );
}
