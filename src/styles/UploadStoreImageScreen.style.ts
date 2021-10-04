import {StyleSheet, Dimensions} from 'react-native';
import colors from '@/utils/colors';

export const styles = StyleSheet.create({
  view: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    padding: 20,
  },
  nextButton: {
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: colors.mallBlue5,
    width: 270,
  },
  imageView: {
    height: Dimensions.get('window').height * 0.35,
    width: Dimensions.get('window').width * 0.75,
    margin: 20,
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    alignItems: 'center',
    borderColor: colors.mallBlue5,
    borderWidth: 1,
    borderRadius: 5,
  },
  skipButton: {
    borderColor: colors.mallBlue5,
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderRadius: 5,
    marginTop: 10,
    marginBottom: 10,
    width: 270,
  },
  skipText: {
    color: colors.mallBlue5,
  },
  image: {
    height: 250,
    width: 300,
    margin: 20,
  },
  uploadIcon: {
    height: 25,
    width: 25,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'left',
    marginTop: 0,
  },
  description: {
    fontSize: 14,
    textAlign: 'left',
    fontFamily: 'Roboto-Regular',
  },
  content: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 15,
    marginBottom: 10,
  },
  error: {
    color: colors.accentRed,
    fontSize: 12,
    marginBottom: 10,
  },
});
