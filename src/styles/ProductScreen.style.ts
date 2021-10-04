import {StyleSheet, Dimensions} from 'react-native';
import {colors} from '@/utils/.';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: colors.neutralWhite,
    flexDirection: 'column',
    textAlign: 'center',
    padding: 15,
    width: Dimensions.get('window').width,
  },
  meal: {
    width: 100,
  },
  indicator: {
    marginTop: 0,
    fontFamily: 'Roboto-Medium',
  },
  edit: {
    color: colors.mallBlue5,
  },
  switch: {
    display: 'flex',
  },
  editIcon: {
    height: 15,
    width: 15,
  },
  listItem: {
    width: Dimensions.get('window').width,
  },
  listViewContent: {
    alignItems: 'flex-start',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: Dimensions.get('window').width * 0.85,
  },
  fabView: {
    height: 70,
  },
  productView: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  error: {
    color: colors.accentRed,
    fontFamily: 'Roboto-Medium',
  },
});
