import React from 'react';
import {StackNavigationProp} from '@react-navigation/stack';
import {View, Text} from 'react-native';
import {Button} from 'react-native-elements';

import InputField from '@/components/InputField';
import {BottomTabParamList} from '@/customTypes/.';
import {styles} from '@/styles/ConfirmPaymentScreen.style';

export type confirmPaymentNavProps = StackNavigationProp<
  BottomTabParamList,
  'ConfirmPaymentScreen'
>;

type Props = {
  navigation: confirmPaymentNavProps;
};

export default function ConfirmPaymentScreen({navigation}: Props) {
  const barcodeScreen: keyof BottomTabParamList = 'BarCodeScannerScreen';
  function nextScreen() {
    //PaymentApprovedScreen
    navigation.navigate(barcodeScreen);
  }
  return (
    <View style={styles.container}>
      <Text style={styles.labelStyle}>Input Total Amount</Text>
      <View style={styles.inputField}>
        <InputField keyboardType={'numeric'} />
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
