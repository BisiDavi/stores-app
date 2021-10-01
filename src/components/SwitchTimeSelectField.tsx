import React, {Dispatch, SetStateAction, useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import colors from '@/utils/colors';
import {StoreOpendaysTimeAction} from '@/store/actions/StoreDetailsAction';

const openOptions = [
  {name: 'Opens At'},
  {name: '24 hours', value: '24:00'},
  {name: '7:00 am', value: '7:00'},
  {name: '8:00 am', value: '8:00'},
  {name: '9:00 am', value: '9:00'},
  {name: '10:00 am', value: '10:00'},
  {name: '11:00 am', value: '11:00'},
  {name: '12:00 noon', value: '12:00'},
];

const closeOptions = [
  {name: 'Closes At'},
  {name: '5:00 pm', value: '5:00'},
  {name: '6:00 pm', value: '6:00'},
  {name: '7:00 pm', value: '7:00'},
  {name: '8:00 pm', value: '8:00'},
  {name: '9:00 pm', value: '9:00'},
  {name: '10:00 pm', value: '10:00'},
];

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

  const optionType = type === 'openingTime' ? openOptions : closeOptions;
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
                fontFamily="RobotoRegular"
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

const styles = StyleSheet.create({
  text: {
    margin: 5,
    marginLeft: 0,
    fontWeight: '500',
    fontSize: 14,
    textAlign: 'left',
    fontFamily: 'RobotoRegular',
  },
  textView: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  pickerStyle: {
    width: 140,
  },
  pickerView: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  selectField: {
    margin: 0,
    padding: 0,
    alignItems: 'flex-start',
    flexDirection: 'column',
  },
  picker: {
    height: 48,
    margin: 0,
    padding: 0,
    borderColor: colors.mallBlue3,
    borderWidth: 1,
    borderRadius: 5,
    justifyContent: 'center',
  },
});
