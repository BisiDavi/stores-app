import React, {memo, ChangeEvent} from 'react';
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

function FormElements(props: displayFormElementsProps) {
  const {formElement, toggleModal} = props;
  switch (formElement.type) {
    case 'input': {
      return (
        <InputField
          label={formElement.label}
          placeholder={formElement.placeholder}
          textContentType={formElement?.textContentType}
          onChangeText={props?.handleChange(formElement.name)}
          onBlur={props?.handleBlur(formElement.name)}
          value={props.values[formElement.name]}
          keyboardType={formElement?.keyboardType}
          helperText={formElement.helperText}
          rightIcon={displayAsset(formElement.iconName, toggleModal)}
          errorMessage={
            props.errors[formElement.name] &&
            props.touched[formElement.name] &&
            props.errors[formElement.name]
          }
        />
      );
    }
    case 'radio': {
      return <RadioField content={formElement} toggleModal={toggleModal} />;
    }
    case 'switchView': {
      return <SwitchView label={formElement.label} />;
    }
    case 'select': {
      return (
        <SelectField
          content={formElement}
          style={styles.selectField}
          onValueChange={props.handleChange(formElement.name)}
          selectedValue={props.values[formElement.name]}
          error={
            props.errors[formElement.name] &&
            props.touched[formElement.name] &&
            props.errors[formElement.name]
          }
        />
      );
    }
    case 'input-group': {
      return (
        <InputGroup
          inputGroup={formElement}
          value={props.values[formElement.name]}
          onChangeText={props?.handleChange(formElement.name)}
          onBlur={props?.handleBlur(formElement.name)}
          errorMessage={
            props.errors[formElement.name] &&
            props.touched[formElement.name] &&
            props.errors[formElement.name]
          }
        />
      );
    }
    case 'switch': {
      return <SwitchFields content={formElement} />;
    }
    case 'switch&Time': {
      return <SwitchfieldTimefield content={formElement} />;
    }
    default:
      return null;
  }
}

interface displayFormElementsProps {
  formElement: {
    name: string;
    label?: any;
    placeholder?: string;
    fields?: any;
    type: string;
    keyboardType?: KeyboardTypeOptions | undefined | any;
    options?: any;
    iconName?: string;
    inputs?: {placeholder: string; name: string; type: string}[];
    helperText?: string;
    textContentType?:
      | 'password'
      | 'emailAddress'
      | 'telephoneNumber'
      | 'fullStreetAddress'
      | undefined
      | any;
  };
  handleChange: (e: string | ChangeEvent<any>) => any;
  handleBlur: (e: string | ChangeEvent<any>) => any;
  values?: any;
  errors?: any;
  touched?: any;
  toggleModal?: () => void;
}

const styles = StyleSheet.create({
  selectField: {
    width: Dimensions.get('window').width * 0.85,
  },
});

export const DisplayFormElements = memo((props: displayFormElementsProps) => (
  <FormElements {...props} />
));
