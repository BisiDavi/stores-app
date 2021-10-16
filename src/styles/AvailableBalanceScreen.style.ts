import {StyleSheet, Dimensions} from 'react-native';
import {colors} from '@/utils';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  availableBalance: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    width: Dimensions.get('window').width * 0.9,
  },
  column1: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
  },
  column2: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    flexDirection: 'column',
  },
  category: {
    fontWeight: 'bold',
  },
  price: {
    fontWeight: 'bold',
    marginBottom: 10,
  },
  zeroBalance: {
    color: colors.accentRed,
    textAlign: 'center',
    fontFamily: 'Montserrat-Bold',
    fontSize: 16,
  },
});
