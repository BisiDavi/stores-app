import {StyleSheet} from 'react-native';
import {colors} from '@/utils';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    padding: 15,
    paddingTop: 0,
  },
  progressIndicatorView: {
    marginLeft: 15,
  },
  productImage: {
    height: 150,
    width: 200,
    marginBottom: 20,
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
  uploadProductImage: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
  },
  fabContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    width: 70,
    marginTop: 30,
  },
  FabView: {
    height: 160,
    width: 160,
    backgroundColor: colors.neutral3,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
  },
  inputLabel: {
    padding: 0,
    marginTop: -5,
  },
  inputContainer: {
    padding: 0,
    height: 35,
    marginBottom: 0,
  },
  input: {
    padding: 0,
  },
});
