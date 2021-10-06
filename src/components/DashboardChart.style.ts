import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  dashboardChart: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: 15,
  },
  lineChartStyle: {
    marginVertical: 8,
    borderRadius: 16,
    marginLeft: 20,
  },
  chart: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    position: 'relative',
  },
  yAxis: {
    display: 'flex',
    flexDirection: 'column',
    transform: [{rotate: '270deg'}],
    margin: 0,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 0,
    height: 200,
    top: 20,
    position: 'absolute',
    left: 35,
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    lineHeight: 16,
  },
  xAxis: {
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    lineHeight: 16,
  },
});
