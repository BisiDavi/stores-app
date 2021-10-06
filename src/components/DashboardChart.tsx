import React from 'react';
import {View, Text, Dimensions} from 'react-native';
import {LineChart} from 'react-native-chart-kit';

import colors from '@/utils/colors';
import {styles} from './DashboardChart.style';

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
            width={Dimensions.get('window').width * 0.8}
            height={220}
            yAxisInterval={10}
            chartConfig={{
              backgroundColor: '#000',
              backgroundGradientFrom: colors.mallBlue5,
              backgroundGradientTo: colors.mallBlue3,
              decimalPlaces: 2,
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
            style={styles.lineChartStyle}
          />
        </View>
      </View>
      <Text style={styles.xAxis}>Days</Text>
    </View>
  );
}
