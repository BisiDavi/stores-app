import React, {ChangeEvent} from 'react';
import {Input} from 'react-native-elements';
import {Text, View, KeyboardTypeOptions} from 'react-native';
import colors from '@/utils/colors';
import {inputStyles} from './InputField.style';

export default function InputField({
  onChangeText,
  value,
  keyboardType,
  label,
  secureTextEntry = false,
  rightIcon,
  errorMessage,
  ...props
}: InputFieldProps) {
  return (
    <View style={inputStyles.inputView}>
      <Input
        {...props}
        label={label}
        placeholder={props.placeholder}
        inputContainerStyle={[inputStyles.inputContainer, props.styleContainer]}
        labelStyle={[inputStyles.label, props.styleLabel]}
        inputStyle={[inputStyles.input, props.styleInput]}
        keyboardType={keyboardType}
        value={value}
        placeholderTextColor={colors.neutral4}
        errorMessage={errorMessage}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        rightIcon={rightIcon}
        rightIconContainerStyle={inputStyles.rightIconStyle}
      />
      {!errorMessage && (
        <Text style={inputStyles.helperText}>{props.helperText}</Text>
      )}
    </View>
  );
}

interface InputFieldProps {
  onChangeText?: any;
  value?: any;
  label?: string;
  keyboardType?: KeyboardTypeOptions;
  secureTextEntry?: boolean;
  styles?: any;
  rightIcon?: any;
  errorMessage?: any;
  styleContainer?: any;
  styleLabel?: any;
  styleInput?: any;
  helperText?: string;
  placeholder?: string;
  onBlur?: (e: string | ChangeEvent<any>) => void | undefined;
  textContentType?:
    | 'password'
    | 'emailAddress'
    | 'telephoneNumber'
    | 'fullStreetAddress';
}
