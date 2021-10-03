import React from 'react';
import {StackNavigationProp} from '@react-navigation/stack';
import {BottomTabParamList} from '@/customTypes/.';
import {View, Text, StyleSheet} from 'react-native';
import {Button} from 'react-native-elements';
import colors from '@/utils/colors';

type FailedPaymentNavigationProps = StackNavigationProp<
  BottomTabParamList,
  'FailedPaymentScreen'
>;

type Props = {
  navigation: FailedPaymentNavigationProps;
};

export default function FailedPaymentScreen({navigation}: Props) {
  const orderScreen: keyof BottomTabParamList = 'OrdersScreen';
  function nextScreen() {
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
          onPress={nextScreen}
          title="Back"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  status: {
    color: colors.accentRed,
    fontFamily: 'Montserrat-Bold',
    fontSize: 20,
    lineHeight: 24,
  },
  buttonView: {
    position: 'absolute',
    bottom: 20,
  },
  textStyle: {
    marginTop: 50,
    fontFamily: 'Montserrat-Regular',
    fontSize: 18,
    lineHeight: 28,
    textAlign: 'center',
  },
  buttonStyle: {
    color: colors.mallBlue5,
  },
});
