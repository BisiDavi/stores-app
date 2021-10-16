import {StyleSheet, Dimensions} from 'react-native';
import colors from '@/utils/colors';

export const styles = StyleSheet.create({
  safeView: {
    flex: 1,
    height: '100%',
  },
  scrollView: {
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    flexDirection: 'column',
    backgroundColor: colors.neutralWhite,
    padding: 0,
  },
  text: {
    fontSize: 14,
    fontFamily: 'Roboto-Regular',
    marginLeft: 10,
  },
  mapView: {
    width: Dimensions.get('window').width,
    backgroundColor: colors.neutral3,
    flexDirection: 'column',
    height: Dimensions.get('window').height * 0.5,
    alignItems: 'center',
  },
  inputView: {
    padding: 20,
    paddingTop: 10,
    paddingBottom: 0,
    justifyContent: 'flex-start',
    flexDirection: 'column',
    width: Dimensions.get('window').width,
    backgroundColor: 'white',
  },
  button: {
    width: Dimensions.get('window').width * 0.6,
    backgroundColor: colors.mallBlue5,
  },
  buttonView: {
    display: 'flex',
    alignItems: 'center',
    height: Dimensions.get('window').height * 0.2,
    justifyContent: 'center',
    marginTop: 0,
  },
  title: {
    color: colors.cloudOrange5,
    fontFamily: 'Montserrat-Bold',
    fontSize: 18,
    lineHeight: 28,
    marginBottom: 10,
  },
  textView: {
    margin: 30,
    marginTop: 20,
    marginBottom: 0,
    backgroundColor: colors.neutralWhite,
    width: Dimensions.get('window').width,
  },
  footerComponentStyle: {
    padding: 20,
    justifyContent: 'flex-start',
  },
  renderGoogleInputView: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
});
