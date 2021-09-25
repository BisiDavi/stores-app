import React, {useState, ChangeEvent} from 'react';
import InputField from '@components/InputField';
import EyesOffSvg from '@assets/EyeoffSvg';
import EyesSvg from '@assets/EyeSvg';

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
      <EyesOffSvg onPress={passwordVisbilityHandler} />
    ) : (
      <EyesSvg onPress={passwordVisbilityHandler} />
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
