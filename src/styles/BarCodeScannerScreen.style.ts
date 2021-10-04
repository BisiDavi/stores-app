import {StyleSheet, Dimensions} from 'react-native';
import {colors} from '@/utils';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 100,
    padding: 15,
    alignSelf: 'center',
    margin: 10,
  },
  snapView: {
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    position: 'absolute',
    left: 0,
    zIndex: 200,
    width: Dimensions.get('window').width,
  },
  flashLightMode: {
    backgroundColor: colors.mallBlue5,
  },
  flashLighIconOn: {
    color: colors.neutralWhite,
  },
  flashLighIconOff: {
    color: colors.black,
  },
});
