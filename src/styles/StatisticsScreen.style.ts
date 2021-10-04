import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  performanceText: {
    marginLeft: 20,
  },
  row: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
  },
  content: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  chartTitle: {
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    lineHeight: 16,
    marginBottom: 10,
    marginTop: 10,
    marginLeft: 25,
  },
  category: {
    fontWeight: 'bold',
  },
});
