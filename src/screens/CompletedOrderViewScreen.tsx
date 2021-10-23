import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {TouchableOpacity} from 'react-native';

import {styles} from '@/styles/OrdersScreen.style';
import OrdersListItemView from '@/components/Tabs/OrdersListView';

type Props = {
  navigation: any;
  route: any;
};

export default function CompletedOrderViewScreen({navigation, route}: Props) {
  const content = route.params;
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        {content.map((item: any, index: number) => {
          const completedView = {
            item,
            completed: true,
          };
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('ViewOrderScreen', completedView)
              }
              key={index}
            >
              <OrdersListItemView item={item} />
            </TouchableOpacity>
          );
        })}
      </View>
    </SafeAreaView>
  );
}
