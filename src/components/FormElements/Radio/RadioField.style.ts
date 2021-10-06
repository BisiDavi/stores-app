import {StyleSheet, Dimensions} from 'react-native';
import {colors} from '@/utils';

export const styles = StyleSheet.create({
  storeType: {
    alignItems: 'flex-start',
    display: 'flex',
    flexDirection: 'column',
    padding: 0,
    width: Dimensions.get('window').width * 0.85,
    marginBottom: 20,
  },
  typeView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: Dimensions.get('window').width * 0.85,
    marginBottom: 10,
  },
  radioField: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: colors.mallBlue5,
    borderWidth: 1,
    borderRadius: 5,
    width: 130,
    height: 50,
    justifyContent: 'space-around',
  },
  radioFields: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: 'auto',
    width: Dimensions.get('window').width * 0.85,
  },
  label: {
    fontWeight: '500',
  },
  storeTypeText: {
    fontSize: 16,
    fontWeight: '500',
  },
  iconImage: {
    height: 25,
    width: 10,
  },
  error: {
    color: 'red',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    fontSize: 13,
    textAlign: 'left',
  },
});
