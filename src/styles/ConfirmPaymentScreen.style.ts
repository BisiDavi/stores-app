import {StyleSheet} from 'react-native';
import {colors} from '@/utils';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  buttonStyle: {
    backgroundColor: colors.mallBlue5,
    width: '100%',
  },
  buttonViewStyle: {
    position: 'absolute',
    bottom: 20,
  },
  buttonText: {
    color: colors.neutralWhite,
  },
  labelStyle: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 18,
    lineHeight: 28,
    marginTop: 50,
    marginBottom: 25,
  },
  inputField: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
