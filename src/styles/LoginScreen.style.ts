import {StyleSheet, Dimensions} from 'react-native';
import {colors} from '@/utils';

export const styles = StyleSheet.create({
  view: {
    flex: 1,
  },
  container: {
    height: Dimensions.get('window').height,
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    backgroundColor: colors.neutralWhite,
  },
  title: {
    color: colors.cloudOrange5,
    fontFamily: 'Montserrat-Bold',
    fontSize: 18,
    lineHeight: 28,
  },
  textView: {
    margin: 30,
    marginTop: 20,
    marginBottom: 0,
  },
  text: {
    fontFamily: 'Roboto-Regular',
    fontSize: 14,
    lineHeight: 20,
  },
});
