import {StyleSheet, Dimensions} from 'react-native';
import {colors} from '@/utils';

export const styles = StyleSheet.create({
  form: {
    padding: 20,
    paddingTop: 10,
    paddingLeft: 0,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  nextButtonStyle: {
    width: Dimensions.get('window').width * 0.3,
    alignItems: 'center',
    color: colors.neutralWhite,
    backgroundColor: colors.mallBlue5,
    fontFamily: 'Roboto-Bold',
  },
  skipButtonStyle: {
    width: Dimensions.get('window').width * 0.3,
    alignItems: 'center',
    backgroundColor: 'transparent',
    borderColor: colors.mallBlue5,
    borderWidth: 1,
    fontFamily: 'Roboto-Bold',
  },
  skipTextStyle: {
    color: colors.mallBlue5,
  },
  nextTextStyle: {
    color: colors.neutralWhite,
  },
  buttonView: {
    alignItems: 'center',
    marginTop: 10,
    justifyContent: 'space-between',
    flexDirection: 'row',
    padding: 10,
    paddingTop: 0,
    width: '80%',
  },
  title: {
    fontSize: 20,
    textAlign: 'left',
    fontWeight: 'bold',
    justifyContent: 'flex-start',
    marginBottom: 0,
    marginTop: 0,
    width: '100%',
    alignItems: 'flex-start',
  },
});
