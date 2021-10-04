import {StyleSheet} from 'react-native';
import colors from '@/utils/colors';

export const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: colors.neutralWhite,
  },
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: colors.neutralWhite,
  },
  profileText: {
    color: 'black',
  },
  profileImage: {
    height: 50,
    width: 50,
  },
  profileDetails: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    padding: 20,
    backgroundColor: colors.neutralWhite,
  },
  reviewBtn: {
    alignItems: 'center',
  },
  btnTitle: {
    fontSize: 14,
    color: colors.neutralWhite,
    fontFamily: 'Roboto-Bold',
    padding: 0,
  },
});
