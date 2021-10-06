import {Dimensions, StyleSheet} from 'react-native';
import {colors} from '@/utils';

export const styles = StyleSheet.create({
  progressView: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    marginBottom: 10,
  },
  progressIndicator: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    marginTop: 0,
    paddingTop: 0,
    width: '100%',
  },
  bar: {
    height: 5,
    width: Dimensions.get('window').width * 0.2,
    borderColor: colors.gray,
    borderWidth: 1,
    margin: 0,
  },
  selected: {
    backgroundColor: colors.cloudOrange5,
  },
  notSelected: {
    backgroundColor: 'white',
  },
  title: {
    color: colors.cloudOrange5,
    fontFamily: 'Montserrat-Bold',
    fontSize: 18,
    lineHeight: 28,
    marginBottom: 10,
    padding: 0,
  },
});
