import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import SelectField from './SelectField';

type stateType = {
  weekDays: {openingTime: string; closingTime: string} | boolean;
  saturday: {openingTime: string; closingTime: string} | boolean;
  sunday: {openingTime: string; closingTime: string} | boolean;
};

interface SelectOptionsProps {
  content: {
    name?: string;
    label?: string;
    options?: any;
    value?: string;
    optionName?: string;
  };
  durationName: string;
}

export default function SelectOptions(props: SelectOptionsProps) {
  const {durationName} = props;
  const [openDays, setOpenDays] = useState<stateType>({
    weekDays: {openingTime: '', closingTime: ''},
    saturday: {openingTime: '', closingTime: ''},
    sunday: {openingTime: '', closingTime: ''},
  });

  function handleSelect(field: any, value: any) {
    setOpenDays((prevState: any) => {
      return {
        ...prevState,
        [durationName]: {
          ...prevState[durationName],
          ...{[field]: value},
        },
      };
    });
  }

  return (
    <SelectField
      content={props.content}
      selectedValue={openDays}
      onValueChange={(value: string) => handleSelect(props.content.name, value)}
      style={styles.select}
    />
  );
}

const styles = StyleSheet.create({
  select: {
    width: 130,
    borderWidth: 1,
  },
});
