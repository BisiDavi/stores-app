import React from 'react';
import Modal from 'react-native-modal';
import {View, Text} from 'react-native';
import {Button} from 'react-native-elements';

import {styles} from '@/components/Modal/WithdrawalModal.style';
import {InputField} from '..';
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
          <Text style={styles.title}>Withdraw from Wallet</Text>
        </View>
        <View style={styles.modalContent}>
          <InputField
            styleContainer={styles.input}
            placeholder="How much do you want to withdraw ?"
          />
          <Button buttonStyle={styles.button} title="Proceed" />
        </View>
      </View>
    </Modal>
  );
}
