import React from 'react';
import {Button} from 'react-native-elements';
import {View, Text} from 'react-native';

import {styles} from '@/components/Modal/WithdrawalModal.style';
import useStoreData from '@/hooks/useStoreData';
import {UIWithdrawalModalAction} from '@/store/actions/UIActions';
import {useDispatch} from 'react-redux';

interface PerformWithdrawalProps {
  closeModal: () => void;
}

export default function PerformWithdrawal({
  closeModal,
}: PerformWithdrawalProps) {
  const {storeName} = useStoreData();
  const dispatch = useDispatch();

  function exitModal() {
    closeModal();
    dispatch(UIWithdrawalModalAction('pin'));
  }
  return (
    <View>
      <Text style={styles.performWithdrawalText}>
        Hello {storeName} , Withdrawal process will be completed in the next
        release.
      </Text>
      <View style={styles.performWithdrawalButton}>
        <Button
          buttonStyle={styles.buttonAmt}
          onPress={exitModal}
          title="Exit"
        />
      </View>
    </View>
  );
}
