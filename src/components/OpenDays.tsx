import React, {useState} from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import {useDispatch} from 'react-redux';
import {Switch} from 'react-native-elements';
import colors from '@/utils/colors';
import SwitchTimeSelectField from './SwitchTimeSelectField';
import {StoreOpendaysStatusAction} from '@/store/actions/StoreDetailsAction';

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

const SwitchTimeSelectFieldArray = ['openingTime', 'closingTime'];

function TimeAndSwitchField({period}: TimeAndSwitchFieldProps) {
  const [status, setStatus] = useState(false);
  const dispatch = useDispatch();

  function handleSwitchChange() {
    dispatch(StoreOpendaysStatusAction(period.key, status));
    setStatus(!status);
  }

  console.log('period', period);

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
          {SwitchTimeSelectFieldArray.map(switchTimeSelectField => (
            <SwitchTimeSelectField
              dispatch={dispatch}
              period={period.key}
              type={switchTimeSelectField}
            />
          ))}
        </View>
      )}
    </View>
  );
}

export default function SwitchfieldTimefield() {
  return (
    <View style={styles.SwitchFields}>
      <Text style={styles.label}>Open Days*</Text>
      {periodsArray.map(period => (
        <TimeAndSwitchField key={period.name} period={period} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  SwitchFields: {
    marginTop: 0,
    padding: 0,
    alignItems: 'flex-start',
    width: Dimensions.get('window').width * 0.85,
  },
  timeAndSwitchField: {
    paddingTop: 5,
    paddingBottom: 5,
  },
  selectField: {
    width: Dimensions.get('window').width * 0.85,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  switchView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    alignItems: 'center',
  },
  open: {
    color: 'green',
  },
  close: {
    color: colors.accentRed,
  },

  label: {
    fontFamily: 'RobotoRegular',
    fontSize: 14,
    lineHeight: 18,
    marginBottom: 10,
  },
  switchText: {
    fontFamily: 'RobotoRegular',
    fontSize: 17,
    lineHeight: 19,
  },
  switchLabel: {
    width: 100,
  },
  error: {
    color: 'red',
    fontSize: 13,
  },
});
