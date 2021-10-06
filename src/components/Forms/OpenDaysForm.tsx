import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import {useDispatch} from 'react-redux';
import {Switch} from 'react-native-elements';
import colors from '@/utils/colors';

import {StoreOpendaysStatusAction} from '@/store/actions/StoreDetailsAction';
import SwitchTimeSelectField from '@/components/FormElements/Switch/SwitchTimeSelectField';
import {styles} from './OpenDaysForm.style';

type TimeAndSwitchFieldType = {
  switch: {
    name: string;
    label: string;
  };
  time: [{name: string; label: string; options: {name: string}[]}];
};
interface TimeAndSwitchField {
  field: TimeAndSwitchFieldType;
  index: number;
}

interface TimeAndSwitchFieldProps {
  period: {
    name: string;
    key: string;
  };
}

const periodsArray = [
  {name: 'Week Days', key: 'weekDays'},
  {name: 'Saturday', key: 'saturday'},
  {name: 'Sunday', key: 'sunday'},
];

function TimeAndSwitchField({period}: TimeAndSwitchFieldProps) {
  const [status, setStatus] = useState(false);
  const [selectedTime, setSelectedTime] = useState('0:00');
  const [timeArray, setTimeArray] = useState(['openingTime', 'closingTime']);

  const dispatch = useDispatch();

  function handleSwitchChange() {
    return setStatus(!status);
  }
  useEffect(() => {
    if (selectedTime === '24:00') {
      setTimeArray(['openingTime']);
    } else {
      setTimeArray(['openingTime', 'closingTime']);
    }
  }, [selectedTime]);

  useEffect(() => {
    dispatch(StoreOpendaysStatusAction(period.key, status));
  }, [status, dispatch, period.key]);

  const textColor = status ? styles.open : styles.close;

  return (
    <View style={styles.timeAndSwitchField}>
      <View style={styles.switchView}>
        <Text style={{...styles.switchLabel, ...styles.switchText}}>
          {period.name}
        </Text>
        <Switch
          color={colors.mallBlue5}
          value={status}
          onValueChange={handleSwitchChange}
        />
        <Text style={{...textColor, ...styles.switchText}}>
          {status ? 'Open' : 'Close'}
        </Text>
      </View>
      {status && (
        <View style={styles.selectField}>
          {timeArray.map(switchTimeSelectField => {
            return (
              <SwitchTimeSelectField
                key={switchTimeSelectField}
                dispatch={dispatch}
                period={period.key}
                setSelectedTime={setSelectedTime}
                type={switchTimeSelectField}
              />
            );
          })}
        </View>
      )}
    </View>
  );
}

export default function OpenDaysForm() {
  return (
    <View style={styles.SwitchFields}>
      <Text style={styles.label}>Open Days*</Text>
      {periodsArray.map(period => (
        <TimeAndSwitchField key={period.name} period={period} />
      ))}
    </View>
  );
}
