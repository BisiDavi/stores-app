import React from 'react';
import {StackNavigationProp} from '@react-navigation/stack';
import {RouteProp} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {Formik} from 'formik';
import {StyleSheet, View, Text} from 'react-native';
import {Button} from 'react-native-elements';

import colors from '@/utils/colors';
import {RootStackParamList} from '@/customTypes';
import registrationSchema from '@/schemas/SignupSchema';
import {PasswordInput, InputField} from '../FormElements';
import {persistStoresEmail} from '@/store/actions/SetupStoreAction';
import useAuth from '@/hooks/useAuth';

type SignupFormNavigationProps = StackNavigationProp<
  RootStackParamList,
  'SignupScreen'
>;

type SignupFormRouteProps = RouteProp<RootStackParamList, 'SignupScreen'>;

type signupFormProps = {
  route?: SignupFormRouteProps;
  navigation: SignupFormNavigationProps;
};

export default function SignupForm({navigation}: signupFormProps) {
  const {signUp} = useAuth();
  const dispatch = useDispatch();

  return (
    <Formik
      validationSchema={registrationSchema}
      initialValues={{email: '', password: '', confirmPassword: ''}}
      onSubmit={values => {
        const {email, password} = values;
        signUp(email, password);
        dispatch(persistStoresEmail(email));
      }}
    >
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        errors,
        touched,
        isValid,
      }) => (
        <View style={styles.form}>
          <InputField
            label="Email"
            onChangeText={handleChange('email')}
            onBlur={handleBlur('email')}
            value={values.email}
            keyboardType="email-address"
            textContentType="emailAddress"
            errorMessage={errors.email && touched.email && errors.email}
          />
          <PasswordInput
            label="Password"
            values={values.password}
            onChangeText={handleChange('password')}
            onBlur={handleBlur('password')}
            textContentType="password"
            errorMessage={
              errors.password && touched.password && errors.password
            }
          />
          <PasswordInput
            label="Re-enter Password"
            textContentType="password"
            values={values.confirmPassword}
            onChangeText={handleChange('confirmPassword')}
            onBlur={handleBlur('confirmPassword')}
            errorMessage={
              errors.confirmPassword &&
              touched.confirmPassword &&
              errors.confirmPassword
            }
          />
          <Button
            type="solid"
            onPress={handleSubmit}
            disabled={!isValid}
            title="Create Account"
            buttonStyle={styles.createAccount}
          />
          <View style={styles.withAccount}>
            <Text>Already have an account? </Text>
            <Button
              onPress={() => navigation.navigate('LoginScreen')}
              buttonStyle={styles.login}
              type="clear"
              title="Login in"
            />
          </View>
        </View>
      )}
    </Formik>
  );
}

const styles = StyleSheet.create({
  form: {
    justifyContent: 'space-around',
    marginTop: 20,
    marginBottom: 50,
    paddingLeft: 20,
    paddingRight: 20,
    alignItems: 'center',
  },

  label: {
    color: 'black',
    marginTop: 5,
    marginBottom: 5,
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 60,
    lineHeight: 24,
    textAlign: 'center',
  },
  button: {
    marginTop: 20,
    marginBottom: 20,
    backgroundColor: 'black',
  },
  createAccount: {
    marginTop: 20,
    marginBottom: 10,
    width: 250,
    borderRadius: 8,
    backgroundColor: colors.mallBlue5,
  },
  withAccount: {
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
  },
  login: {
    marginTop: 0,
  },
});
