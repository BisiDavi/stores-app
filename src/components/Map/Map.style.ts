import {Dimensions, StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  map: {
    width: Dimensions.get('window').width,
    backgroundColor: '#C4C4C4',
    flex: 1,
    height: Dimensions.get('window').height * 0.5,
  },
  loadingView: {
    height: Dimensions.get('window').height * 0.6,
  },
});
