import React, {useEffect, useState} from 'react';
import {StackNavigationProp} from '@react-navigation/stack';
import {View, Text} from 'react-native';
import {Button} from 'react-native-elements';

import {InputField} from '@/components/FormElements/Input';
import {BottomTabParamList} from '@/customTypes/.';
import {styles} from '@/styles/ConfirmPaymentScreen.style';
import {useDispatch} from 'react-redux';
import {PaymentAction} from '@/store/actions/OrderAction';

export type confirmPaymentNavProps = StackNavigationProp<
  BottomTabParamList,
  'ConfirmPaymentScreen'
>;

type Props = {
  navigation: confirmPaymentNavProps;
};

export default function ConfirmPaymentScreen({navigation}: Props) {
  const [amount, setAmount] = useState(0);
  const [toScan, setToScan] = useState(false);
  const barcodeScreen: keyof BottomTabParamList = 'BarCodeScannerScreen';
  const dispatch = useDispatch();
  //const barcodeScreen: keyof BottomTabParamList = 'Scanner';

  console.log('amount', amount);

  function nextScreen() {
    setToScan(true);
    navigation.navigate(barcodeScreen);
  }

  useEffect(() => {
    if (amount !== 0 && toScan) {
      dispatch(PaymentAction(amount));
    }
  }, [amount, dispatch, toScan]);

  return (
    <View style={styles.container}>
      <Text style={styles.labelStyle}>Input Total Amount</Text>
      <View style={styles.inputField}>
        <InputField
          value={amount}
          onChangeText={(value: number) => setAmount(value)}
          keyboardType={'numeric'}
        />
      </View>
      <View style={styles.buttonViewStyle}>
        <Button
          buttonStyle={styles.buttonStyle}
          titleStyle={styles.buttonText}
          onPress={nextScreen}
          title="Scan to Accept Payment"
        />
      </View>
    </View>
  );
}
