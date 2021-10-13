import {StyleSheet, Dimensions} from 'react-native';
import colors from '@/utils/colors';

export const styles = StyleSheet.create({
  completed: {
    backgroundColor: 'green',
  },
  pending: {
    backgroundColor: colors.cloudOrange5,
  },
  new: {
    backgroundColor: colors.accentRed,
  },
  touchableOpacity: {
    width: Dimensions.get('window').width,
    height: 120,
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: Dimensions.get('window').width,
    height: 120,
  },
  listItemContent: {
    width: Dimensions.get('window').width,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: Dimensions.get('window').width * 0.7,
    marginTop: 10,
    marginBottom: 10,
  },
  clipboard: {
    height: 20,
    width: 20,
  },
  avatar: {
    height: 50,
    width: 50,
    borderRadius: 100,
    margin: 5,
  },
  status: {
    padding: 5,
    paddingLeft: 8,
    paddingRight: 8,
    borderRadius: 4,
    fontSize: 12,
    color: colors.neutralWhite,
  },
  appModal: {
    flex: 1,
  },
});
