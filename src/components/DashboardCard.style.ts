import {Dimensions, StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  dashboardCard: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    margin: 0,
    justifyContent: 'flex-start',
    padding: 0,
  },
  card: {
    height: 80,
    width: Dimensions.get('window').width * 0.38,
    display: 'flex',
    margin: 0,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 0,
  },
  cardText: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 14,
    lineHeight: 16,
  },
  title: {
    fontWeight: '500',
    fontFamily: 'Roboto-Regular',
    fontSize: 14,
    lineHeight: 20,
    marginBottom: 10,
  },
});
