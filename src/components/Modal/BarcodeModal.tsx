import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {View, Text, Button, Image} from 'react-native';
import Modal from 'react-native-modal';
import HandWave from '@/assets/hand-wave.png';
import {RootState} from '@/store/RootReducer';
import {StoreDetailsStateType} from '@/customTypes/storeDetailsTypes';
import {styles} from './WelcomeModal.style';
import {AcceptOrderAction} from '@/store/actions/OrderAction';

interface AppModalProps {
  closeModal: () => void;
  visible: boolean;
  text: string;
}

export default function BarcodeModal({
  closeModal,
  visible,
  text,
}: AppModalProps) {
  const {storeDetails}: StoreDetailsStateType = useSelector(
    (state: RootState) => state.storeDetails,
  );
  const {storeProfile}: any = useSelector(
    (state: RootState) => state.storeProfile,
  );
  const dispatch = useDispatch();

  function acceptOrder() {
    dispatch(AcceptOrderAction());
    closeModal();
  }
  const {name}: any | string = storeDetails;

  const storeName = name.length === 0 ? storeProfile?.name : name;

  const storeFirstLetter = storeName.split('')[0];

  return (
    <Modal
      style={styles.modal}
      isVisible={visible}
      onBackdropPress={closeModal}
    >
      <View style={styles.modalView}>
        <View style={styles.modalTitle}>
          <View style={styles.userNameView}>
            <Text style={styles.userName}>{storeFirstLetter}</Text>
          </View>
          <Text style={styles.welcome}>Welcome {storeName}. </Text>
          <Image source={HandWave} />
        </View>
        <Text style={styles.modalContent}>{text}</Text>
        <View>
          <Button onPress={acceptOrder} title="Accept" />
          <Button onPress={closeModal} title="Reject" />
        </View>
      </View>
    </Modal>
  );
}
