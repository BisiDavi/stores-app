/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import {Switch} from 'react-native-elements';
import {useDispatch} from 'react-redux';

import {StoreOpendaysAction} from '@/store/actions/StoreDetailsAction';
import colors from '@/utils/colors';
import SelectGroup from '../Select/SelectGroup';
import {styles} from './SwitchfieldTimefield.style';

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

interface SwitchFieldsProps {
  content: {
    name: string;
    label?: string;
    fields?: TimeAndSwitchFieldType[];
  };
}

function TimeAndSwitchField(props: TimeAndSwitchField) {
  const dispatch = useDispatch();
  const {field} = props;

  const period: string = field.switch.name;

  const [openDays, setOpenDays] = useState({
    [period]: {
      openingTime: '0:00',
      closingTime: '0:00',
      status: false,
    },
  });

  const specificPeriod = openDays[period];

  useEffect(() => {
    dispatch(StoreOpendaysAction({specificPeriod, period}));
  }, []);

  const switchStatus: boolean = openDays[period].status;
  function handleSelect(value: string, index: number) {
    const fieldName = field.time[index].name;

    return setOpenDays({
      ...openDays,
      [period]: {
        ...openDays[period],
        [fieldName]: value,
      },
    });
  }

  const textColor = switchStatus ? styles.open : styles.close;

  function handleSwitchChange() {
    setOpenDays((prevState: any) => ({
      ...prevState,
      [period]: {
        ...prevState[period],
        status: !prevState[period].status,
      },
    }));
  }

  return (
    <View style={styles.timeAndSwitchField}>
      <View style={styles.switchView}>
        <Text style={{...styles.switchLabel, ...styles.switchText}}>
          {field.switch.label}
        </Text>
        <Switch
          color={colors.mallBlue5}
          value={switchStatus}
          onValueChange={handleSwitchChange}
        />
        <Text style={{...textColor, ...styles.switchText}}>
          {switchStatus ? 'Open' : 'Close'}
        </Text>
      </View>
      {switchStatus && (
        <View style={styles.selectField}>
          <SelectGroup
            selectedValue={openDays}
            onValueChange={handleSelect}
            selectField={field.time}
            {...props}
          />
        </View>
      )}
    </View>
  );
}

export default function SwitchfieldTimefield(props: SwitchFieldsProps) {
  const {content} = props;

  return (
    <View style={styles.SwitchFields}>
      <Text style={styles.label}>{content.label}</Text>
      {content.fields?.map((item, index) => (
        <TimeAndSwitchField index={index} key={index} field={item} {...props} />
      ))}
    </View>
  );
}
