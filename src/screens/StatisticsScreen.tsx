import React, {useCallback} from 'react';
import {View, FlatList, Text} from 'react-native';
import {ListItem} from 'react-native-elements';
import {SafeAreaView} from 'react-native-safe-area-context';

import DashboardChart from '@/components/DashboardChart';
import ordersStatisticsJson from '@/json/statistics.json';
import {styles} from '@/styles/StatisticsScreen.style';

function StatisticsChart() {
  return (
    <View>
      <Text style={styles.chartTitle}>
        Performance: Number of orders vs days.
      </Text>
      <DashboardChart />
    </View>
  );
}

export default function StatisticsScreen() {
  const ordersStatistics = useCallback(function renderItem({item}) {
    return (
      <ListItem key={item.date} bottomDivider>
        <ListItem.Content>
          <View style={styles.content}>
            <Text>{item.date}</Text>
            <Text>{item.orders}</Text>
          </View>
        </ListItem.Content>
      </ListItem>
    );
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={ordersStatisticsJson}
        renderItem={ordersStatistics}
        initialNumToRender={7}
        ListHeaderComponent={StatisticsChart}
        scrollEnabled={true}
        keyExtractor={function (item) {
          return item.date;
        }}
      />
    </SafeAreaView>
  );
}
