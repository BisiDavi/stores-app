import React, {useState} from 'react';
import {Icon} from 'react-native-elements';
import {View, Text} from 'react-native';
import {useDispatch} from 'react-redux';
import {Button} from 'react-native-elements';
import {useQuery} from 'react-query';

import {styles} from '@/components/Modal/WithdrawalModal.style';
import {InputField} from '@/components/FormElements/Input';
import {UIWithdrawalModalAction} from '@/store/actions/UIActions';
import {colors} from '@/utils';
import useRequest from '@/hooks/useRequest';

export default function TransactionPin() {
  const [pin, setPin] = useState('');
  const [pinError, setPinError] = useState(false);
  const disableBtnState = pin.length !== 4 ? true : false;
  const dispatch = useDispatch();

  const {fetchStoreProfile} = useRequest();
  const {data} = useQuery('storeProfile', fetchStoreProfile);

  console.log('data fetchStoreProfile', data);

  console.log('transactionPin', data?.transactionPin);

  function nextStage() {
    if (pin !== data?.transactionPin && !data) {
      return setPinError(true);
    }
    !pinError && dispatch(UIWithdrawalModalAction());
  }
  return (
    <View style={styles.modalPinView}>
      {pinError && (
        <View style={styles.pinErrorView}>
          <Icon
            color={colors.accentRed}
            name="exclamationcircle"
            type="antdesign"
          />
          <Text style={styles.pinError}>Incorrect Pin</Text>
        </View>
      )}
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
