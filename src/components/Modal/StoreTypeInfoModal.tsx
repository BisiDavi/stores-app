import React from 'react';
import {View, Text} from 'react-native';
import Modal from 'react-native-modal';
import {styles} from './StoreTypeInfoModal.style';

interface StoreTypeInfoModalProps {
  modal: boolean;
  toggleModal: () => void;
}

export default function StoreTypeInfoModal({
  modal,
  toggleModal,
}: StoreTypeInfoModalProps) {
  return (
    <Modal
      style={styles.modal}
      onBackdropPress={toggleModal}
      isVisible={modal}
      animationIn="slideInUp"
    >
      <View style={styles.modalView}>
        <Text style={styles.title}>Pick up Shopping Store</Text>
        <Text style={styles.text}>
          Help sort and package the orders. The dispatcher, just picks up (this
          comes with a little reward from us)
        </Text>
        <Text style={styles.title}>In-store Shipping Store</Text>
        <Text style={styles.text}>
          Leave the shopping and sorting of orders to the dispatcher
        </Text>
      </View>
    </Modal>
  );
}
