import {StyleSheet} from 'react-native';
import {colors} from '@/utils';

export const styles = StyleSheet.create({
  modal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    backgroundColor: colors.neutralWhite,
    height: 180,
    borderRadius: 10,
    padding: 20,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  modalTitle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userNameView: {
    borderRadius: 50,
    borderWidth: 1,
    height: 40,
    width: 40,
    borderColor: colors.mallBlue5,
    margin: 10,
    padding: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  userName: {
    color: 'black',
    fontSize: 24,
    fontFamily: 'MontserratBold',
    lineHeight: 32,
    textAlign: 'center',
  },
  welcome: {
    fontSize: 14,
    fontFamily: 'MontserratBold',
    lineHeight: 16,
    color: colors.textColor,
  },
  modalContent: {
    fontSize: 14,
    fontFamily: 'RobotoRegular',
    lineHeight: 20,
    color: colors.textColor,
    marginTop: 10,
  },
});
