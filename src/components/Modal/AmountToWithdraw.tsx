import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import {useQuery} from 'react-query';
import {Button} from 'react-native-elements';

import {styles} from '@/components/Modal/WithdrawalModal.style';
import {InputField} from '@/components/FormElements/Input';
import {useDispatch} from 'react-redux';
import {UIWithdrawalModalAction} from '@/store/actions/UIActions';
import useRequest from '@/hooks/useRequest';

export default function AmountToWithdraw({closeModal}: any) {
  const [amount, setAmount] = useState(0);
  const [proceed, setProceedAction] = useState(false);

  const dispatch = useDispatch();
  const {fetchAnalytics} = useRequest();

  const {status, data: walletDetails} = useQuery(
    'storeAnalytics',
    fetchAnalytics,
  );

  const walletBalance = walletDetails?.walletBalance;

  console.log('walletDetails', walletDetails);

  useEffect(() => {
    if (amount <= walletBalance && proceed) {
      setProceedAction(false);
    } else if (amount > walletBalance && proceed) {
      dispatch(UIWithdrawalModalAction('pin'));
    }
  }, [amount, dispatch, walletBalance, proceed]);

  function nextStage() {
    setProceedAction(true);
  }

  function exitModal() {
    closeModal();
    dispatch(UIWithdrawalModalAction('pin'));
  }

  const note =
    status === 'success' && amount < walletDetails.walletBalance
      ? `Your wallet balance is NGN ${walletDetails.walletBalance}, you can't perform this operation`
      : 'Proceed to enter your transaction pin';

  return (
    <View style={styles.modalContent}>
      {proceed && <Text>{note}</Text>}
      <InputField
        styleContainer={styles.input}
        value={amount}
        label="How much do you want to withdraw ?"
        onChangeText={(value: number) => setAmount(value)}
        placeholder="How much do you want to withdraw ?"
        keyboardType="number-pad"
      />
      <View style={styles.buttonGroup}>
        <Button
          buttonStyle={styles.buttonAmt}
          onPress={exitModal}
          title="Exit"
        />
        <Button
          onPress={nextStage}
          buttonStyle={styles.buttonAmt}
          title="Proceed"
        />
      </View>
    </View>
  );
}
