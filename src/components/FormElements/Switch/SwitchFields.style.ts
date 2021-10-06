import {StyleSheet, Dimensions} from 'react-native';

export const styles = StyleSheet.create({
  switchView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10,
    width: Dimensions.get('window').width * 0.85,
    alignItems: 'flex-start',
  },
  SwitchFields: {
    marginTop: 0,
    margin: 10,
  },
  label: {
    fontFamily: 'Roboto-Regular',
    fontSize: 14,
    lineHeight: 20,
    marginBottom: 10,
  },
  switchText: {
    fontFamily: 'Roboto-Regular',
    fontSize: 17,
    lineHeight: 20,
  },
});
