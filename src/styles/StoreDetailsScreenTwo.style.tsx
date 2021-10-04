import {StyleSheet} from 'react-native';
import colors from '@/utils/colors';

export const styles = StyleSheet.create({
  view: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: colors.neutralWhite,
  },
  inputField: {
    marginTop: 1,
    padding: 0,
  },
  typeView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 10,
    paddingRight: 20,
    paddingTop: 0,
    marginTop: 20,
    marginBottom: 10,
  },
  storeTypeText: {
    fontSize: 16,
    fontWeight: '500',
  },
  iconImage: {
    height: 20,
    width: 10,
  },
  input: {
    width: 100,
    margin: 0,
    padding: 0,
  },
  addressField: {
    height: 70,
  },
  button: {
    width: 250,
  },
  buttonView: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
