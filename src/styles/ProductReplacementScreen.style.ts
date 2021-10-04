import {StyleSheet, Dimensions} from 'react-native';
import colors from '@/utils/colors';

export const styles = StyleSheet.create({
  view: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'column',
    margin: 20,
    width: Dimensions.get('window').width * 0.9,
  },
  packView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: Dimensions.get('window').width * 0.9,
  },
  orderGroup: {
    marginTop: 20,
  },
  orderView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 3,
    marginBottom: 3,
    alignItems: 'center',
    height: 50,
    padding: 10,
    borderWidth: 1,
    borderColor: colors.black,
  },
  buttonView: {
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  buttonStyle: {
    alignItems: 'center',
    backgroundColor: colors.mallBlue5,
    justifyContent: 'center',
    marginTop: 20,
    width: Dimensions.get('window').width * 0.8,
    height: 50,
  },
  image: {
    height: 35,
    width: 35,
  },
  foodDescription: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: Dimensions.get('window').width * 0.7,
  },
  outlineButton: {
    marginTop: 20,
    width: Dimensions.get('window').width * 0.8,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: colors.mallBlue5,
    shadowColor: 'rgba(184, 110, 0, 0.25)',
    shadowOpacity: 0.2,
    height: 50,
    borderRadius: 5,
  },
  outlineTitle: {
    color: colors.mallBlue5,
  },
  totalView: {
    marginTop: -2,
  },
  totalText: {
    color: colors.mallBlue5,
    fontFamily: 'Roboto-Bold',
  },
});
