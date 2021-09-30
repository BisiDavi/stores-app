import React from 'react';
import {StackNavigationProp} from '@react-navigation/stack';
import {
  StyleSheet,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
  View,
  Text,
  Dimensions,
} from 'react-native';

import {RootStackParamList} from 'customTypes';
import SignupForm from '../components/forms/SignupForm';
import colors from '../utils/colors';
import {SafeAreaView} from 'react-native-safe-area-context';

type SignupScreenNavigationProps = StackNavigationProp<
  RootStackParamList,
  'SignupScreen'
>;

type signupScreenProps = {
  navigation: SignupScreenNavigationProps;
};

export default function SignupScreen({navigation}: signupScreenProps) {
  return (
    <SafeAreaView style={styles.view}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        enabled={true}
        style={styles.view}
      >
        <ScrollView style={styles.view}>
          <View style={styles.container}>
            <View style={styles.textView}>
              <Text style={styles.title}>Create an Account</Text>
              <Text style={styles.text}>
                Create a cloudmall account to begin your shopping experience
              </Text>
            </View>
            <SignupForm navigation={navigation} />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  view: {
    flex: 1,
  },
  container: {
    width: '100%',
    height: Dimensions.get('window').height,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flex: 1,
    paddingTop: 10,
    backgroundColor: colors.neutralWhite,
  },
  title: {
    color: colors.cloudOrange5,
    fontFamily: 'Montserrat-Bold',
    fontSize: 18,
    lineHeight: 28,
  },
  textView: {
    margin: 30,
    marginTop: 20,
    marginBottom: 0,
  },
  text: {
    fontFamily: 'Roboto-Medium',
    fontSize: 14,
    lineHeight: 20,
  },
});
