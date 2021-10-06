import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  selectGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    alignItems: 'flex-start',
    marginTop: 5,
  },
  select: {
    width: 130,
    borderWidth: 1,
  },
  error: {
    color: 'red',
    fontSize: 13,
    marginTop: -15,
  },
  selectView: {
    display: 'none',
  },
});
