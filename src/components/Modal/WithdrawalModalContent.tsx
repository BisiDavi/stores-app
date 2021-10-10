import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {useDispatch} from 'react-redux';
import {Button} from 'react-native-elements';

import {styles} from '@/components/Modal/WithdrawalModal.style';
import {InputField} from '@/components/FormElements/Input';
import {UIWithdrawalModalAction} from '@/store/actions/UIActions';

export default function displayWithdrawalModalContent(stage: string) {
  switch (stage) {
    case 'pin': {
      return <TransactionPin />;
    }
    case 'withdawAmount': {
      return <AmountToWithdraw />;
    }
    default:
      return null;
  }
}

function AmountToWithdraw() {
  const [amount, setAmount] = useState('');

  return (
    <View style={styles.modalContent}>
      <InputField
        styleContainer={styles.input}
        value={amount}
        label="How much do you want to withdraw ?"
        onChangeText={(value: string) => setAmount(value)}
        placeholder="How much do you want to withdraw ?"
        keyboardType="number-pad"
      />
      <View style={styles.buttonGroup}>
        <Button buttonStyle={styles.button} title="Exit" />
        <Button buttonStyle={styles.button} title="Proceed" />
      </View>
    </View>
  );
}

function TransactionPin() {
  const [pin, setPin] = useState('');
  const disableBtnState = pin.length !== 4 ? true : false;
  const dispatch = useDispatch();

  function nextStage() {
    dispatch(UIWithdrawalModalAction());
  }
  return (
    <View>
      <View style={styles.modalContent}>
        <View style={styles.inputView}>
          <InputField
            label="Please enter your transaction Pin"
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
        <Button
          disabled={disableBtnState}
          buttonStyle={styles.button}
          onPress={nextStage}
          title="Proceed"
        />
      </View>
    </View>
  );
}
