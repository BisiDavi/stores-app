import {StyleSheet} from 'react-native';
import {colors} from '@/utils';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  status: {
    color: colors.accentRed,
    fontFamily: 'Montserrat-Bold',
    fontSize: 20,
    lineHeight: 24,
  },
  buttonView: {
    position: 'absolute',
    bottom: 20,
  },
  textStyle: {
    marginTop: 50,
    fontFamily: 'Montserrat-Regular',
    fontSize: 18,
    lineHeight: 28,
    textAlign: 'center',
  },
  buttonStyle: {
    color: colors.mallBlue5,
  },
});
