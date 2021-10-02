import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import {LineChart} from 'react-native-chart-kit';
import colors from '../utils/colors';

export default function DashboardChart() {
  return (
    <View style={styles.dashboardChart}>
      <View style={styles.chart}>
        <Text style={styles.yAxis}>Number of Orders</Text>
        <View>
          <LineChart
            data={{
              labels: ['Aug 1', 'Aug 2', 'Aug 3', 'Aug 4', 'Aug 5', 'Aug 6'],
              datasets: [
                {
                  data: [0, 20, 40, 30, 40, 50],
                },
              ],
            }}
            width={Dimensions.get('window').width * 0.8} // from react-native
            height={220}
            yAxisInterval={10} // optional, defaults to 1
            chartConfig={{
              backgroundColor: '#000',
              backgroundGradientFrom: colors.mallBlue5,
              backgroundGradientTo: colors.mallBlue3,
              decimalPlaces: 2, // optional, defaults to 2dp
              color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              style: {
                borderRadius: 16,
                padding: 10,
              },
              propsForDots: {
                r: '6',
                strokeWidth: '2',
                stroke: '#ffa726',
              },
            }}
            // bezier
            style={styles.lineChartStyle}
          />
        </View>
      </View>
      <Text style={styles.xAxis}>Days</Text>
    </View>
  );
}

const styles = StyleSheet.create({
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