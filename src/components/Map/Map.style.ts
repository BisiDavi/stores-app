import {Dimensions, StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
    width: Dimensions.get('window').width,
    backgroundColor: '#C4C4C4',
    flex: 1,
    position: 'absolute',
    top: 0,
    left: 0,
    height: Dimensions.get('window').height * 0.5,
  },
  loadingView: {
    height: Dimensions.get('window').height * 0.6,
  },
});
