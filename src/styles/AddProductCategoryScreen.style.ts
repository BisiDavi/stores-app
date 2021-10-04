import {StyleSheet} from 'react-native';
import colors from '@/utils/colors';

export const styles = StyleSheet.create({
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
