import {Dimensions, StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
    width: Dimensions.get('window').width,
    flex: 1,
    position: 'absolute',
    top: 0,
    alignItems: 'center',
    justifyContent: 'center',
    left: 0,
    height: Dimensions.get('window').height * 0.5,
  },
  loadingView: {
    height: Dimensions.get('window').height * 0.6,
  },
});
