import {StyleSheet, Dimensions} from 'react-native';
import colors from '@/utils/colors';

export const styles = StyleSheet.create({
  view: {
    flex: 1,
  },
  container: {
    width: '100%',
    height: Dimensions.get('window').height,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flex: 1,
    paddingTop: 10,
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
    fontFamily: 'Roboto-Medium',
    fontSize: 14,
    lineHeight: 20,
  },
});
