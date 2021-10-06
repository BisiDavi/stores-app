import React, {Dispatch, SetStateAction, useState} from 'react';
import {View} from 'react-native';
import {Picker} from '@react-native-picker/picker';

import {StoreOpendaysTimeAction} from '@/store/actions/StoreDetailsAction';
import switchTimeSelectContent from '@/json/switch-time-select-field.json';
import {styles} from './SwitchTimeSelectField.style';

interface SwitchTimeSelectFieldProps {
  type: string;
  dispatch: Dispatch<any>;
  period: string;
  setSelectedTime: Dispatch<SetStateAction<string>>;
}

export default function SwitchTimeSelectField({
  type,
  period,
  dispatch,
  setSelectedTime,
}: SwitchTimeSelectFieldProps) {
  const [availableTime, setAvailableTime] = useState('0:00');

  const optionType =
    type === 'openingTime'
      ? switchTimeSelectContent.openOptions
      : switchTimeSelectContent.closeOptions;
  return (
    <View style={styles.pickerView}>
      <View style={styles.picker}>
        <Picker
          selectedValue={availableTime}
          onValueChange={value => {
            setAvailableTime(value);
            setSelectedTime(value);
            dispatch(StoreOpendaysTimeAction(period, value, type));
          }}
          style={styles.pickerStyle}
        >
          {optionType.map((item: any, index: number) => {
            return (
              <Picker.Item
                fontFamily="Roboto-Regular"
                key={`${item.name}-${index}`}
                label={item.name}
                value={item.value}
              />
            );
          })}
        </Picker>
      </View>
    </View>
  );
}
