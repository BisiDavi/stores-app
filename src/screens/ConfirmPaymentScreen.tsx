import React from 'react';
import {StackNavigationProp} from '@react-navigation/stack';
import {View, Text, StyleSheet} from 'react-native';
import {Button} from 'react-native-elements';

import InputField from '@/components/InputField';
import {DrawerStackParamList} from '@/customTypes/.';
import colors from '@/utils/colors';

export type confirmPaymentNavProps = StackNavigationProp<
  DrawerStackParamList,
  'ConfirmPaymentScreen'
>;

type Props = {
  navigation: confirmPaymentNavProps;
};

export default function ConfirmPaymentScreen({navigation}: Props) {
  function nextScreen() {
    navigation.navigate('PaymentApprovedScreen');
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  buttonStyle: {
    backgroundColor: colors.mallBlue5,
    width: '100%',
  },
  buttonViewStyle: {
    position: 'absolute',
    bottom: 20,
  },
  buttonText: {
    color: colors.neutralWhite,
  },
  labelStyle: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 18,
    lineHeight: 28,
    marginTop: 50,
    marginBottom: 25,
  },
  inputField: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
