import {StyleSheet} from 'react-native';
import {colors} from '@/utils';

export const styles = StyleSheet.create({
  avatar: {
    height: 50,
    width: 50,
    alignItems: 'center',
  },
  userName: {
    color: colors.mallBlue5,
    fontFamily: 'Roboto-Bold',
    textAlign: 'center',
    fontSize: 16,
  },
  sidebarText: {
    color: 'black',
  },
  drawerItem: {
    fontFamily: 'Roboto-Bold',
    fontSize: 16,
    color: 'black',
  },
  profileIconView: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: 40,
  },
  drawerItemList: {
    color: colors.neutralWhite,
  },
  drawerScrollView: {
    backgroundColor: colors.neutralWhite,
  },
  balanceText: {
    color: colors.accentRed,
    fontFamily: 'Roboto-Bold',
  },
  profileIcon: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
