import {StyleSheet, Dimensions} from 'react-native';
import {colors} from '@/utils';

export const styles = StyleSheet.create({
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
