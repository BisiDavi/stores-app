import React from 'react';
import Modal from 'react-native-modal';
import {useSelector} from 'react-redux';
import {View, Text} from 'react-native';

import {styles} from '@/components/Modal/WithdrawalModal.style';
import displayWithdrawalModalContent from './WithdrawalModalContent';
import {RootState} from '@/store/RootReducer';

interface AppModalProps {
  closeModal: () => void;
  visible: boolean;
}
export default function WithdrawalModal({closeModal, visible}: AppModalProps) {
  const {withdrawalModal} = useSelector((state: RootState) => state.ui);

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
        {displayWithdrawalModalContent(withdrawalModal, closeModal)}
      </View>
    </Modal>
  );
}
