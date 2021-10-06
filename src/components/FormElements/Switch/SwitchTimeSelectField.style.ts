import {StyleSheet} from 'react-native';
import {colors} from '@/utils';

export const styles = StyleSheet.create({
  text: {
    margin: 5,
    marginLeft: 0,
    fontWeight: '500',
    fontSize: 14,
    textAlign: 'left',
    fontFamily: 'RobotoRegular',
  },
  textView: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  pickerStyle: {
    width: 140,
  },
  pickerView: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  selectField: {
    margin: 0,
    padding: 0,
    alignItems: 'flex-start',
    flexDirection: 'column',
  },
  picker: {
    height: 48,
    margin: 0,
    padding: 0,
    borderColor: colors.mallBlue3,
    borderWidth: 1,
    borderRadius: 5,
    justifyContent: 'center',
  },
});
