import React, {useState} from 'react';
import {View} from 'react-native';
import {Button} from 'react-native-elements';

import {styles} from '@/components/Modal/WithdrawalModal.style';
import {InputField} from '@/components/FormElements/Input';

export default function AmountToWithdraw({closeModal}: any) {
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
        <Button
          buttonStyle={styles.buttonAmt}
          onPress={closeModal}
          title="Exit"
        />
        <Button buttonStyle={styles.buttonAmt} title="Proceed" />
      </View>
    </View>
  );
}
