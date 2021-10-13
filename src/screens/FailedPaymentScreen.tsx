import React from 'react';
import {StackNavigationProp} from '@react-navigation/stack';
import {BottomTabParamList} from '@/customTypes/.';
import {View, Text} from 'react-native';
import {Button} from 'react-native-elements';
import {styles} from '@/styles/FailedPaymentScreen.style';

type FailedPaymentNavigationProps = StackNavigationProp<
  BottomTabParamList,
  'FailedPaymentScreen'
>;

type Props = {
  navigation: FailedPaymentNavigationProps;
};

export default function FailedPaymentScreen({navigation}: Props) {
  const orderScreen: keyof BottomTabParamList = 'BarCodeScannerScreen';

  function goBackHandler() {
    navigation.navigate(orderScreen);
  }
  return (
    <View style={styles.container}>
      <Text style={styles.status}>Failed Payment</Text>
      <Text style={styles.textStyle}>
        Total amount contradiction. Please verify again
      </Text>
      <View style={styles.buttonView}>
        <Button
          titleStyle={styles.buttonStyle}
          type="clear"
          onPress={goBackHandler}
          title="Back"
        />
      </View>
    </View>
  );
}
