import {StyleSheet, Dimensions} from 'react-native';
import {colors} from '@/utils';

export const styles = StyleSheet.create({
  form: {
    marginTop: 10,
    padding: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonStyle: {
    width: Dimensions.get('window').width * 0.7,
    alignItems: 'center',
    backgroundColor: colors.mallBlue5,
    justifyContent: 'center',
  },
  buttonView: {
    alignItems: 'center',
    marginTop: 20,
    justifyContent: 'center',
    marginBottom: 40,
  },
  title: {
    fontSize: 20,
    textAlign: 'left',
    fontWeight: 'bold',
    justifyContent: 'flex-start',
    marginBottom: 0,
    marginTop: 0,
    width: '100%',
    alignItems: 'flex-start',
  },
});
