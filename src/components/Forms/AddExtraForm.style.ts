import {StyleSheet, Dimensions} from 'react-native';
import {colors} from '@/utils';

export const styles = StyleSheet.create({
  formContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  formInputs: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  nextButton: {
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    width: 100,
    borderRadius: 10,
    backgroundColor: colors.mallBlue5,
  },
  backButton: {
    borderWidth: 1,
    borderColor: colors.mallBlue5,
    backgroundColor: 'transparent',
    width: 100,
    borderRadius: 10,
  },
  backButtonTitle: {
    color: colors.mallBlue5,
  },
  buttonGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '90%',
    margin: 10,
    marginTop: 10,
  },
  switchView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10,
    width: Dimensions.get('window').width * 0.85,
    alignItems: 'flex-start',
  },
  switchText: {
    fontFamily: 'Roboto-Regular',
    fontSize: 17,
    lineHeight: 20,
  },
  compulsory: {
    color: 'red',
  },
  optional: {
    color: 'green',
  },
});
