import {StyleSheet, Dimensions} from 'react-native';
import {colors} from '@/utils';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  renderItem: {
    flex: 1,
    justifyContent: 'flex-start',
    marginBottom: 100,
    margin: Dimensions.get('window').height * 0.05,
  },
  title: {
    fontSize: 18,
    marginTop: 10,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    fontFamily: 'Roboto-Bold',
    marginBottom: 0,
    textAlign: 'left',
    color: colors.mallBlue5,
  },
  image: {
    width: Dimensions.get('window').width * 0.8,
    height: Dimensions.get('window').height * 0.45,
    marginTop: Dimensions.get('window').height * 0.05,
    marginBottom: Dimensions.get('window').height * 0.05,
  },
  text: {
    color: colors.neutralWhite,
    fontFamily: 'Roboto-Bold',
    fontSize: 16,
  },
  button: {
    margin: 20,
    marginTop: 5,
    marginBottom: 5,
    justifyContent: 'center',
    backgroundColor: colors.mallBlue5,
    padding: 20,
    height: 45,
    alignItems: 'center',
  },
  nextButton: {
    borderRadius: 5,
    backgroundColor: colors.mallBlue5,
    margin: 20,
    alignItems: 'center',
    justifyContent: 'center',
    height: 45,
  },
  doneButton: {
    marginTop: 50,
    borderRadius: 5,
    backgroundColor: colors.mallBlue5,
    margin: 20,
    alignItems: 'center',
    justifyContent: 'center',
    height: 45,
  },
  renderSkipButton: {
    margin: 20,
    marginTop: 10,
  },
});
