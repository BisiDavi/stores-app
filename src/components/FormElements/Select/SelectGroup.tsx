import React, {useState} from 'react';
import {View} from 'react-native';

import SelectField from './SelectField';
import {styles} from './SelectGroup.style';

interface SelectGroupProps {
  selectedValue: any;
  onValueChange: (value: string, index: number) => void;
  selectField: any;
}

export default function SelectGroup(props: SelectGroupProps) {
  const [wholeday, setWholeday] = useState(false);
  const {selectedValue, onValueChange, selectField} = props;
  const [flag, setFlag] = useState({
    openFlag: '',
    closeFlag: '',
  });
  const [secondOptions] = useState(selectField[1].options);
  return (
    <View style={styles.selectGroup}>
      {selectField.map((field: any, index: number) => {
        wholeday
          ? (selectField[1].options = null)
          : (selectField[1].options = secondOptions);

        return (
          <View key={index}>
            <SelectField
              content={field}
              selectedValue={selectedValue}
              onValueChange={(value: string) => {
                value === '24:00' ? setWholeday(true) : setWholeday(false);
                onValueChange(value, index);
                value === 'Opens At' &&
                  setFlag({
                    ...flag,
                    openFlag: 'openingTime',
                  });
                value === 'Closes At' &&
                  setFlag({
                    ...flag,
                    closeFlag: 'closingTime',
                  });
              }}
              style={styles.select}
            />
          </View>
        );
      })}
    </View>
  );
}
