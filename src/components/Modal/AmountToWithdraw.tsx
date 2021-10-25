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
  const [amount, setAmount] = useState<string | any>('');
  const [proceed, setProceedAction] = useState(false);

  const isAmountValid = amount.length > 0 ? true : false;

  const dispatch = useDispatch();
  const {fetchAnalytics} = useRequest();

  const {status, data: walletDetails} = useQuery(
    'storeAnalytics',
    fetchAnalytics,
  );

  const walletBalance = Number(walletDetails?.walletBalance);

  console.log('walletDetails', walletDetails);

  useEffect(() => {
    if (Number(amount) <= walletBalance && proceed) {
      setProceedAction(false);
    } else if (walletBalance >= Number(amount)) {
      setProceedAction(true);
      proceed && dispatch(UIWithdrawalModalAction('pin'));
    }
  }, [amount, dispatch, walletBalance, proceed]);

  function nextStage() {
    setProceedAction(true);
  }

  function exitModal() {
    closeModal();
    dispatch(UIWithdrawalModalAction('withdawAmount'));
  }

  const note =
    status === 'success' && walletBalance < Number(amount)
      ? `Your wallet balance is NGN ${walletBalance.toFixed(
          2,
        )}, you can't perform this operation`
      : 'Proceed to enter your transaction pin';

  return (
    <View style={styles.modalContent}>
      {proceed && <Text style={styles.note}>{note}</Text>}
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
          disabled={!isAmountValid}
          buttonStyle={styles.buttonAmt}
          title="Proceed"
        />
      </View>
    </View>
  );
}
