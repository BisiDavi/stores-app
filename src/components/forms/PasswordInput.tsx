import React, {useState, ChangeEvent} from 'react';
import InputField from '../InputField';
import {Icon} from 'react-native-elements';

interface InputFieldProps {
  onChangeText?: (e: string | ChangeEvent<any>) => void | undefined;
  values?: any;
  label?: string;
  secureTextEntry?: boolean;
  styles?: any;
  rightIcon?: any;
  errorMessage?: any;
  styleContainer?: any;
  styleLabel?: any;
  styleInput?: any;
  placeholder?: string;
  onBlur?: (e: string | ChangeEvent<any>) => void | undefined;
  textContentType?:
    | 'password'
    | 'emailAddress'
    | 'telephoneNumber'
    | 'fullStreetAddress';
}

const PasswordInput = ({
  values,
  onChangeText,
  onBlur,
  errorMessage,
}: InputFieldProps) => {
  const [hidePassword, setHidePassword] = useState(true);

  function passwordVisbilityHandler() {
    setHidePassword(!hidePassword);
  }

  function inputIcon() {
    return hidePassword ? (
      <Icon
        name="eye-off"
        reverse
        type="ionicon"
        onPress={passwordVisbilityHandler}
      />
    ) : (
      <Icon
        name="eye"
        reverse
        type="ionicon"
        onPress={passwordVisbilityHandler}
      />
    );
  }

  return (
    <InputField
      label="Password"
      value={values.password}
      onChangeText={onChangeText}
      onBlur={onBlur}
      textContentType="password"
      errorMessage={errorMessage}
      secureTextEntry={hidePassword}
      rightIcon={inputIcon()}
    />
  );
};

export default PasswordInput;
