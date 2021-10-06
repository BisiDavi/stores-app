import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import {RadioButton} from 'react-native-paper';
import {useDispatch} from 'react-redux';

import {colors, displayAsset} from '@/utils/.';
import {StoreDetailsTypeAction} from '@/store/actions/StoreDetailsAction';
import {styles} from './RadioField.style';
interface RadioFieldProps {
  content: {
    name?: string;
    label?: string;
    icon?: boolean;
    type: string;
    fields?: itemType[] | undefined;
    iconName?: string | undefined;
  };
  toggleModal?: () => void;
}

type itemType = {
  label?: any;
  status?: 'checked' | 'unchecked';
  value?: any;
};

export default function RadioField({content, toggleModal}: RadioFieldProps) {
  const [checked, setChecked] = useState('');
  const dispatch = useDispatch();

  function checkHandler(item: string) {
    return setChecked(item);
  }
  const isTypeValid = checked.length > 0;

  useEffect(() => {
    if (checked.length > 0) {
      dispatch(StoreDetailsTypeAction(checked));
    }
  }, [checked, dispatch]);

  return (
    <View style={styles.storeType}>
      <View style={styles.typeView}>
        <Text style={styles.storeTypeText}>{content.label}</Text>
        {displayAsset(content.iconName, toggleModal)}
      </View>
      <View style={styles.radioFields}>
        {content.fields?.map((item: itemType, index: number) => (
          <View key={index} style={styles.radioField}>
            <Text style={styles.label}>{item.label}</Text>
            <RadioButton
              value={item.value}
              onPress={() => checkHandler(item.value)}
              uncheckedColor={colors.mallBlue4}
              color={colors.mallBlue5}
              status={checked === item.value ? 'checked' : 'unchecked'}
            />
          </View>
        ))}
      </View>
      {!isTypeValid && <Text style={styles.error}>Store type is required</Text>}
    </View>
  );
}
