import React, {useState} from 'react';
import {colors} from '@/utils';
import {Snackbar} from 'react-native-paper';
import {StyleSheet} from 'react-native';

interface SnackbarViewProps {
  text: string;
}

export default function SnackbarView({text}: SnackbarViewProps) {
  const [snackVisibility, setSnackVisibility] = useState(true);

  function onDimissSnackbar() {
    setSnackVisibility(false);
  }

  return (
    <Snackbar
      style={styles.snackbar}
      visible={snackVisibility}
      onDismiss={onDimissSnackbar}
    >
      {text}
    </Snackbar>
  );
}

const styles = StyleSheet.create({
  snackbar: {
    backgroundColor: colors.mallBlue5,
  },
});
