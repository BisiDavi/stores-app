import {StyleSheet, Dimensions} from 'react-native';

export const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
  },
  container: {
    flex: 1,
    margin: 20,
    marginTop: 0,
    alignItems: 'flex-start',
    justifyContent: 'center',
    width: Dimensions.get('window').width * 0.9,
  },
  progressIndicator: {
    margin: 5,
    marginLeft: 0,
    marginBottom: 20,
    marginTop: 0,
  },
  title: {
    fontFamily: 'MontserratBold',
    fontSize: 16,
    marginTop: 0,
    margin: 10,
    marginLeft: 0,
    textAlign: 'center',
  },
});
