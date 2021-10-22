import React, {useContext} from 'react';
import {StackNavigationProp} from '@react-navigation/stack';
import {Formik} from 'formik';
import {StyleSheet, View, Text} from 'react-native';
import {Button} from 'react-native-elements';

import AuthContext from '@/context/AuthContext';
import {RootStackParamList} from '@/customTypes';
import colors from '@/utils/colors';
import loginSchema from '@/schemas/LoginSchema';
import {PasswordInput, InputField} from '../FormElements';

type LoginScreenNavigationProps = StackNavigationProp<
  RootStackParamList,
  'LoginScreen'
>;

type loginFormProps = {
  navigation: LoginScreenNavigationProps;
};

export default function LoginForm({navigation}: loginFormProps) {
  const {authContext} = useContext(AuthContext);

  return (
    <Formik
      validationSchema={loginSchema}
      initialValues={{email: '', password: ''}}
      onSubmit={async values => {
        const {email, password} = values;
        authContext.loginIn(email, password, navigation);
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
          <Button
            type="solid"
            onPress={handleSubmit}
            title="Login"
            disabled={!isValid}
            buttonStyle={styles.login}
          />
          <View style={styles.withAccount}>
            <Text>Don't have an account? </Text>
            <Button
              onPress={() => navigation.navigate('SignupScreen')}
              buttonStyle={styles.signup}
              type="clear"
              title="Sign up"
            />
          </View>
        </View>
      )}
    </Formik>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  form: {
    justifyContent: 'space-around',
    marginTop: 20,
    marginBottom: 50,
    paddingLeft: 20,
    paddingRight: 20,
    alignItems: 'center',
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
  login: {
    alignItems: 'center',
    marginTop: 20,
    display: 'flex',
    marginBottom: 20,
    width: 250,
    borderRadius: 8,
    justifyContent: 'center',
    backgroundColor: colors.mallBlue5,
  },
  withAccount: {
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
  },
  signup: {
    marginTop: 0,
  },
});
