import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {Button} from 'react-native-elements';
import {useSelector} from 'react-redux';

import {BottomTabParamList} from '@/customTypes/.';
import colors from '@/utils/colors';
import {RootState} from '@/store/RootReducer';

type PaymentApprovedNavigationProps = StackNavigationProp<
  BottomTabParamList,
  'PaymentApprovedScreen'
>;

type Props = {
  navigation: PaymentApprovedNavigationProps;
};

export default function PaymentApprovedScreen({navigation}: Props) {
  function nextScreen() {
    navigation.navigate('FailedPaymentScreen');
  }
  const {amount} = useSelector((state: RootState) => state.order);
  return (
    <View style={styles.container}>
      <Text style={styles.status}>Payment Approved</Text>
      <Text style={styles.textStyle}>
        N ${amount} has been transferred to your account
      </Text>
      <View style={styles.buttonView}>
        <Button
          titleStyle={styles.buttonStyle}
          type="clear"
          onPress={nextScreen}
          title="Back to Home"
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
    color: colors.mallBlue5,
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
