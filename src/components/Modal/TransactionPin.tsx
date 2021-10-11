import React, {useState} from 'react';
import {Icon} from 'react-native-elements';
import {View, Text} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {Button} from 'react-native-elements';

import {styles} from '@/components/Modal/WithdrawalModal.style';
import {InputField} from '@/components/FormElements/Input';
import {UIWithdrawalModalAction} from '@/store/actions/UIActions';
import {RootState} from '@/store/RootReducer';
import {colors} from '@/utils';

export default function TransactionPin() {
  const [pin, setPin] = useState('');
  const [pinError, setPinError] = useState(false);
  const disableBtnState = pin.length !== 4 ? true : false;
  const dispatch = useDispatch();
  const {storeDetails} = useSelector((state: RootState) => state.storeDetails);

  const {transactionPin} = storeDetails;

  function nextStage() {
    if (pin !== transactionPin) {
      setPinError(true);
      return;
    }
    !pinError && dispatch(UIWithdrawalModalAction());
  }
  return (
    <View>
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
