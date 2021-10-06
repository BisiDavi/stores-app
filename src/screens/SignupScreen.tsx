import React from 'react';
import {StackNavigationProp} from '@react-navigation/stack';
import {
  KeyboardAvoidingView,
  ScrollView,
  Platform,
  View,
  Text,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import {RootStackParamList} from 'customTypes';
import SignupForm from '@/components/Forms/SignupForm';
import {styles} from '@/styles/SignupScreen.style';

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
