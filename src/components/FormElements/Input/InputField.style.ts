import {StyleSheet, Dimensions} from 'react-native';
import {colors} from '@/utils';

export const inputStyles = StyleSheet.create({
  inputContainer: {
    width: Dimensions.get('window').width * 0.85,
    margin: 0,
    height: 48,
    borderColor: colors.mallBlue3,
    borderWidth: 1,
    borderRadius: 5,
  },
  input: {
    height: 48,
    padding: 10,
    margin: 0,
    fontSize: 14,
    fontFamily: 'Roboto-Regular',
  },
  label: {
    color: 'black',
    marginTop: 5,
    marginBottom: 5,
    fontWeight: '500',
    fontSize: 14,
    fontFamily: 'Roboto-Regular',
  },
  rightIconStyle: {
    width: 30,
  },
  inputView: {
    position: 'relative',
  },
  helperText: {
    fontSize: 11,
    fontFamily: 'Roboto-Regular',
    left: 12,
    textAlign: 'left',
    bottom: 5,
    color: colors.mallBlue5,
    position: 'absolute',
  },
});
