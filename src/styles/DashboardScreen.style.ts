import {StyleSheet, Dimensions} from 'react-native';
import {colors} from '@/utils';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-end',
    backgroundColor: colors.neutralWhite,
    padding: 20,
    paddingTop: 0,
    position: 'relative',
  },
  view: {
    flex: 1,
  },
  selectField: {
    width: Dimensions.get('window').width * 0.4,
    marginTop: 0,
    marginBottom: 0,
    padding: 0,
  },
  row: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    flexDirection: 'row',
    margin: 0,
    width: Dimensions.get('window').width * 0.875,
  },
  dashboardCards: {
    display: 'flex',
    alignItems: 'flex-start',
  },
  categoryText: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 14,
    lineHeight: 16,
    marginBottom: 10,
  },
  chartTitle: {
    fontFamily: 'Roboto-Regular',
    fontSize: 12,
    lineHeight: 16,
    marginBottom: 10,
  },
  category: {
    margin: 0,
    marginBottom: 30,
    display: 'flex',
    alignItems: 'flex-start',
  },
});
