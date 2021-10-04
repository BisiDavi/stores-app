import {StyleSheet, Dimensions} from 'react-native';

export const styles = StyleSheet.create({
  view: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    flexDirection: 'column',
    margin: 20,
    width: Dimensions.get('window').width * 0.95,
    alignItems: 'center',
  },
  indicator: {
    marginLeft: -20,
  },
});
