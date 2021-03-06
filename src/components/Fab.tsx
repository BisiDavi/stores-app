import React from 'react';
import {StyleSheet} from 'react-native';
import {FAB} from 'react-native-elements';
import colors from '@/utils/colors';

export default function Fab({onPress}: FabProps) {
  return (
    <FAB
      color={colors.mallBlue3}
      title="+"
      onPress={onPress}
      buttonStyle={styles.fab}
      titleStyle={styles.fabStyle}
      placement="right"
    />
  );
}

const styles = StyleSheet.create({
  fab: {
    borderRadius: 100,
    borderWidth: 0,
    height: 60,
    width: 60,
    padding: 0,
    backgroundColor: colors.mallBlue5,
  },
  fabStyle: {
    fontSize: 40,
    marginTop: -5,
    width: 40,
  },
});

interface FabProps {
  onPress: () => void;
}
