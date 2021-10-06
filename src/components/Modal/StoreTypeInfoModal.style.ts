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
    height: 260,
    borderRadius: 10,
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    color: colors.cloudOrange5,
    fontFamily: 'Roboto-Bold',
    fontSize: 18,
    textAlign: 'center',
    margin: 10,
  },
  text: {
    fontFamily: 'Roboto-Regular',
    fontSize: 15,
    textAlign: 'left',
    color: 'black',
    lineHeight: 18,
    marginBottom: 10,
  },
});
