import {StyleSheet} from 'react-native';
import colors from '@/utils/colors';

export const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    flex: 1,
    flexDirection: 'column',
  },
  buttonStyle: {
    backgroundColor: colors.mallBlue5,
    width: '100%',
  },
  input: {
    //height: 50,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    //width: '100%',
    margin: 30,
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
  view: {
    flex: 1,
  },
});
