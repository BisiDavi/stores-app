import React, {ChangeEvent} from 'react';
import {Dimensions, KeyboardTypeOptions, StyleSheet} from 'react-native';

import {
  InputField,
  InputGroup,
  RadioField,
  SelectField,
  SwitchfieldTimefield,
} from '@/components/FormElements';
import {displayAsset} from '@/utils/.';
import SwitchFields, {SwitchView} from '../FormElements/Switch/SwitchFields';

export default function displayFormElements(
  formElement: formElement,
  formikValues: formikValuesType,
  toggleModal?: (() => void) | undefined,
) {
  switch (formElement.type) {
    case 'input': {
      return (
        <InputField
          key={formElement.name}
          label={formElement.label}
          placeholder={formElement.placeholder}
          textContentType={formElement?.textContentType}
          onChangeText={formikValues?.handleChange(formElement.name)}
          onBlur={formikValues?.handleBlur(formElement.name)}
          value={formikValues.values[formElement.name]}
          keyboardType={formElement?.keyboardType}
          helperText={formElement.helperText}
          rightIcon={displayAsset(formElement.iconName, toggleModal)}
          errorMessage={
            formikValues.errors[formElement.name] &&
            formikValues.touched[formElement.name] &&
            formikValues.errors[formElement.name]
          }
        />
      );
    }
    case 'radio': {
      return (
        <RadioField
          key={formElement.name}
          content={formElement}
          toggleModal={toggleModal}
        />
      );
    }
    case 'switchView': {
      return <SwitchView label={formElement.label} />;
    }
    case 'select': {
      return (
        <SelectField
          key={formElement.name}
          content={formElement}
          style={styles.selectField}
          onValueChange={formikValues.handleChange(formElement.name)}
          selectedValue={formikValues.values[formElement.name]}
          error={
            formikValues.errors[formElement.name] &&
            formikValues.touched[formElement.name] &&
            formikValues.errors[formElement.name]
          }
        />
      );
    }
    case 'input-group': {
      return (
        <InputGroup
          key={formElement.name}
          inputGroup={formElement}
          value={formikValues.values[formElement.name]}
          onChangeText={formikValues?.handleChange(formElement.name)}
          onBlur={formikValues?.handleBlur(formElement.name)}
          errorMessage={
            formikValues.errors[formElement.name] &&
            formikValues.touched[formElement.name] &&
            formikValues.errors[formElement.name]
          }
        />
      );
    }
    case 'switch': {
      return <SwitchFields key={formElement.name} content={formElement} />;
    }
    case 'switch&Time': {
      return (
        <SwitchfieldTimefield key={formElement.name} content={formElement} />
      );
    }
    default:
      return null;
  }
}

const styles = StyleSheet.create({
  selectField: {
    width: Dimensions.get('window').width * 0.85,
  },
});

type formikValuesType = {
  handleChange: (e: string | ChangeEvent<any>) => any;
  handleBlur: (e: string | ChangeEvent<any>) => any;
  values?: any;
  errors?: any;
  touched?: any;
  toggleModal?: () => void;
  isValid: boolean;
};

type formElement = {
  name: string;
  label?: any;
  placeholder?: string;
  fields?: any;
  type: string;
  keyboardType?: KeyboardTypeOptions | undefined | any;
  options?: any[];
  iconName?: string;
  inputs?: {placeholder: string; name: string; type: string}[];
  helperText?: string;
  textContentType?:
    | 'password'
    | 'emailAddress'
    | 'telephoneNumber'
    | 'fullStreetAddress'
    | any
    | undefined;
};
