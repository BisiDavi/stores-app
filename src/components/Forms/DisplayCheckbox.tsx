import React, {useState} from 'react';
import {CheckBox} from 'react-native-elements';
interface DisplayCheckboxProps {
  title: {
    name?: string;
    isCompulsory: boolean;
    _id: string;
    price: string;
  };
}

export function DisplayCheckbox({title}: DisplayCheckboxProps) {
  const [addExtra, setAddExtra] = useState(false);

  const extrasTitle = `${title.name} (${title.price})`;
  function toggleCheckBox() {
    return setAddExtra(!addExtra);
  }
  return (
    <CheckBox checked={addExtra} title={extrasTitle} onPress={toggleCheckBox} />
  );
}
