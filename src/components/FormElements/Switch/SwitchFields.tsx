import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {Switch} from 'react-native-elements';

import colors from '@/utils/colors';
import {styles} from './SwitchFields.style';

interface SwitchViewProps {
  label: string;
}

interface SwitchFieldsProps {
  content: {
    name: string;
    label?: string;
    fields?: [{name: string; label: string}];
  };
}

export function SwitchView({label}: SwitchViewProps) {
  const [open, setOpen] = useState(false);
  return (
    <View style={styles.switchView}>
      <Text style={styles.switchText}>{label}</Text>
      <Switch
        color={colors.mallBlue5}
        value={open}
        onValueChange={() => setOpen(!open)}
      />
      <Text style={styles.switchText}>{open ? 'Open' : 'Close'}</Text>
    </View>
  );
}

export default function SwitchFields({content}: SwitchFieldsProps) {
  return (
    <View style={styles.SwitchFields}>
      <Text style={styles.label}>{content.label}</Text>
      {content.fields?.map((item, index) => (
        <SwitchView label={item.label} key={index} />
      ))}
    </View>
  );
}
