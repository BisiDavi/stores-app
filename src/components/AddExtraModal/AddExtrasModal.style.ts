import {Dimensions, StyleSheet} from 'react-native';
import {colors} from '@/utils';

export const styles = StyleSheet.create({
  text: {
    fontFamily: 'Roboto-Bold',
    color: colors.black,
    textAlign: 'center',
  },
  buttonGroup: {
    marginTop: 30,
  },
  buttonText: {
    fontFamily: 'Roboto-Light',
    textAlign: 'center',
  },
  buttonStyle: {
    backgroundColor: colors.mallBlue5,
    marginBottom: 10,
  },
  modalView: {
    backgroundColor: colors.neutralWhite,
    height: 170,
    borderRadius: 10,
    padding: 20,
    margin: 0,
    justifyContent: 'center',
    alignItems: 'center',
    width: Dimensions.get('window').width * 0.8,
  },
  modal: {
    alignItems: 'center',
  },
});
