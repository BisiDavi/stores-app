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
  modalView: {
    backgroundColor: colors.neutralWhite,
    height: 180,
    borderRadius: 10,
    padding: 20,
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: Dimensions.get('window').width * 0.5,
  },
});
