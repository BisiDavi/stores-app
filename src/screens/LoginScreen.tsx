import React from 'react';
import {StackNavigationProp} from '@react-navigation/stack';
import {
  KeyboardAvoidingView,
  ScrollView,
  Platform,
  View,
  Text,
} from 'react-native';

import {RootStackParamList} from '@/customTypes';
import LoginForm from '@/components/forms/LoginForm';
import {SafeAreaView} from 'react-native-safe-area-context';
import {styles} from '@/styles/LoginScreen.style';

type LoginScreenNavigationProps = StackNavigationProp<
  RootStackParamList,
  'LoginScreen'
>;

type Props = {
  navigation: LoginScreenNavigationProps;
};

export default function LoginScreen({navigation}: Props) {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      enabled={true}
      style={styles.view}
    >
      <SafeAreaView style={styles.view}>
        <ScrollView style={styles.view}>
          <View style={styles.container}>
            <View style={styles.textView}>
              <Text style={styles.title}>Welcome Back</Text>
            </View>
            <LoginForm navigation={navigation} />
          </View>
        </ScrollView>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
}
