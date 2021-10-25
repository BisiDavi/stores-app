import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {useDispatch} from 'react-redux';
import {Button, Icon} from 'react-native-elements';
import {useQuery} from 'react-query';

import {styles} from '@/components/Modal/WithdrawalModal.style';
import {InputField} from '@/components/FormElements/Input';
import {UIWithdrawalModalAction} from '@/store/actions/UIActions';
import {colors} from '@/utils';
import useRequest from '@/hooks/useRequest';

interface TransactionPin {
  closeModal: () => void;
}

export default function TransactionPin({closeModal}: TransactionPin) {
  const [pin, setPin] = useState('');
  const [checkPin, setCheckPin] = useState(false);
  const [pinError, setPinError] = useState(false);
  const disableBtnState = pin.length !== 4 ? true : false;
  const dispatch = useDispatch();

  const {fetchStoreProfile} = useRequest();
  const {data, status} = useQuery('storeProfile', fetchStoreProfile);

  function exitModal() {
    closeModal();
    dispatch(UIWithdrawalModalAction('pin'));
  }

  function nextStage() {
    setCheckPin(true);
    if (Number(pin) !== Number(data?.transactionPin) && status === 'success') {
      setPinError(true);
    } else if (
      Number(pin) === Number(data?.transactionPin) &&
      status === 'success'
    ) {
      setPinError(false);
      !pinError && dispatch(UIWithdrawalModalAction('performWithdrawal'));
    }
    setCheckPin(false);
  }

  const pinColor = pinError ? colors.accentRed : 'green';

  const pinStyle = pinError ? styles.pinError : styles.pinSuccess;
  function displayPinIcon(iconName: string, text: string) {
    return (
      <>
        <Icon color={pinColor} name={iconName} type="antdesign" />
        <Text style={pinStyle}>{text}</Text>
      </>
    );
  }

  return (
    <View style={styles.modalPinView}>
      {checkPin && !disableBtnState && (
        <View style={styles.pinErrorView}>
          {pinError
            ? displayPinIcon('exclamationcircle', 'Incorrect Pin')
            : displayPinIcon('checkcircle', 'Valid Pin')}
        </View>
      )}
      <View style={styles.modalContent}>
        <View style={styles.inputView}>
          <InputField
            label="Please enter your transaction pin"
            styleContainer={styles.input}
            value={pin}
            onChangeText={(value: string) => setPin(value)}
            placeholder="Please enter your transaction pin"
            keyboardType="number-pad"
          />
          {pin.length !== 0 && pin.length !== 4 && (
            <Text style={styles.error}>
              Transaction Pin must be four digits
            </Text>
          )}
        </View>
        <View style={styles.buttonGroup}>
          <Button
            buttonStyle={styles.buttonAmt}
            onPress={exitModal}
            title="Exit"
          />
          <Button
            disabled={disableBtnState}
            buttonStyle={styles.buttonAmt}
            onPress={nextStage}
            title="Proceed"
          />
        </View>
      </View>
    </View>
  );
}
