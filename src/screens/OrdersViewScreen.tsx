import React from 'react';
import {StackNavigationProp} from '@react-navigation/stack';
import {SafeAreaView, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

import OrdersListItemView from '@/components/Tabs/OrdersListView';
import {DrawerStackParamList} from '@/customTypes/.';
import {styles} from '@/styles/OrdersScreen.style';

type OrdersViewNavigationProps = StackNavigationProp<
  DrawerStackParamList,
  'OrdersViewScreen'
>;

type Props = {
  navigation: OrdersViewNavigationProps;
  route: any;
};

export default function OrdersViewScreen({navigation, route}: Props) {
  console.log('route', route);
  const content = route.params;
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        {content.map((item: any) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('ViewOrderScreen')}
            key={item}
          >
            <OrdersListItemView item={item} />
          </TouchableOpacity>
        ))}
      </View>
    </SafeAreaView>
  );
}
