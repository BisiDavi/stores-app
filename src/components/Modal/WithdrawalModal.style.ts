import {Dimensions, StyleSheet} from 'react-native';
import {colors} from '@/utils';

export const styles = StyleSheet.create({
  modal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    backgroundColor: colors.neutralWhite,
    height: 240,
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
    fontFamily: 'Montserrat-Bold',
    lineHeight: 32,
    textAlign: 'center',
  },
  title: {
    fontSize: 18,
    fontFamily: 'Montserrat-Bold',
    lineHeight: 24,
    color: colors.textColor,
  },
  modalContent: {
    fontSize: 14,
    fontFamily: 'Roboto-Regular',
    lineHeight: 20,
    color: colors.textColor,
    marginTop: 10,
    alignItems: 'center',
    width: Dimensions.get('window').width * 0.8,
  },
  input: {
    width: Dimensions.get('window').width * 0.75,
  },
  button: {
    width: 200,
    alignItems: 'center',
    backgroundColor: colors.mallBlue5,
  },
  buttonAmt: {
    width: 120,
    alignItems: 'center',
    backgroundColor: colors.mallBlue5,
  },
  buttonGroup: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: '100%',
  },
  inputView: {
    position: 'relative',
  },
  error: {
    color: colors.accentRed,
    fontSize: 13,
    position: 'absolute',
    left: 10,
    bottom: 5,
  },
  pinErrorView: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    width: '60%',
  },
  pinError: {
    marginLeft: 10,
    marginRight: 5,
    color: colors.accentRed,
    fontFamily: 'Roboto-Bold',
    fontSize: 20,
  },
  pinSuccess: {
    marginLeft: 10,
    marginRight: 5,
    color: 'green',
    fontFamily: 'Roboto-Bold',
    fontSize: 20,
  },
  modalPinView: {
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
  },
  performWithdrawalText: {
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'Roboto-Medium',
    marginTop: 40,
    marginBottom: 40,
  },
  performWithdrawalButton: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
