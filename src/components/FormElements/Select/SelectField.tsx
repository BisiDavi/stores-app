import React from 'react';
import {View, Text} from 'react-native';
import {Picker} from '@react-native-picker/picker';

import {styles} from './SelectField.style';

interface selectFieldProps {
  content: {
    label?: string;
    options?: any;
    value?: string;
    optionName?: string;
    placeholder?: string;
  };
  selectedValue?: any;
  onValueChange?: any;
  error?: string;
  style?: any;
}

export default function SelectField({content, ...props}: selectFieldProps) {
  function getPickerValue(item: any) {
    const pickerValue = content.value
      ? item[content.value]
      : item.value
      ? item.value
      : item.name;
    return pickerValue;
  }
  return (
    <>
      {content.options !== null ? (
        <View style={styles.selectField}>
          {content.label && (
            <View style={styles.textView}>
              <Text style={styles.text}>{content.label}</Text>
            </View>
          )}
          <View style={styles.pickerView}>
            <View style={{...props.style, ...styles.picker}}>
              <Picker
                selectedValue={props.selectedValue}
                onValueChange={props.onValueChange}
                style={props.style}
              >
                {content.placeholder && (
                  <Picker.Item label={content.placeholder} value="" />
                )}
                {content.options.length > 0 ? (
                  content.options.map((item: any, index: number) => {
                    const labelName = content.optionName
                      ? item[content.optionName]
                      : item.name;
                    return (
                      <Picker.Item
                        fontFamily="Roboto-Regular"
                        key={`${item.name}-${index}`}
                        label={labelName}
                        value={getPickerValue(item)}
                      />
                    );
                  })
                ) : (
                  <Picker.Item
                    fontFamily="Roboto-Regular"
                    label="Loading ..."
                    value="loading"
                  />
                )}
              </Picker>
            </View>
          </View>
          <Text style={styles.error}>{props.error}</Text>
        </View>
      ) : null}
    </>
  );
}
