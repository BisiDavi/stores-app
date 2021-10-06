import {StyleSheet} from 'react-native';
import {colors} from '@/utils';

export const styles = StyleSheet.create({
  form: {
    padding: 0,
    margin: 0,
    width: '100%',
  },
  buttonView: {
    flexDirection: 'column',
  },
  checkboxView: {},
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
  promoTagText: {
    color: colors.accentRed,
    fontFamily: 'Roboto-Bold',
    margin: 10,
  },
  promoTagForm: {
    marginTop: 0,
  },
  extra: {
    color: colors.black,
    fontFamily: 'Roboto-Bold',
    fontSize: 14,
    letterSpacing: 0.0025,
    margin: 10,
  },
  buttonGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '92%',
    margin: 10,
    marginTop: 0,
  },
  productButtonGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '86%',
    margin: 10,
    marginTop: 0,
    marginLeft: 0,
  },
  error: {
    color: colors.accentRed,
    fontSize: 13,
    marginLeft: 10,
  },
  productAvailabiltyButtonGroup: {
    marginTop: 5,
  },
});
