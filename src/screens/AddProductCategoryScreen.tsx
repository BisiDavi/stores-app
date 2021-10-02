import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Button} from 'react-native-elements';
import colors from '@/utils/colors';
import InputField from '@/components/InputField';

export default function AddProductCategoryScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <InputField label="Add Product Category" />
        <View style={styles.buttonViewStyle}>
          <Button
            buttonStyle={styles.buttonStyle}
            titleStyle={styles.buttonText}
            title="Add Product Category"
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    flex: 1,
  },
  buttonStyle: {
    backgroundColor: colors.mallBlue5,
    width: '100%',
  },
  input: {
    height: 50,
  },
  buttonViewStyle: {},
  buttonText: {
    color: colors.neutralWhite,
  },
  form: {
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 10,
  },
});
