import React from 'react';
import {StackNavigationProp} from '@react-navigation/stack';
import {SafeAreaView, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

import {DrawerStackParamList} from '@/customTypes/.';
import {styles} from '@/styles/OrdersScreen.style';
import OrdersListItemView from '@/components/Tabs/OrdersListView';

type CompletedOrderViewScreenNavigationProps = StackNavigationProp<
  DrawerStackParamList,
  'CompletedOrderViewScreen'
>;

type Props = {
  navigation: CompletedOrderViewScreenNavigationProps;
  route: any;
};

export default function CompletedOrderViewScreen({navigation, route}: Props) {
  console.log('route', route);
  const content = route.params;
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        {content.map((item: any) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('ViewOrderScreen', item)}
            key={item}
          >
            <OrdersListItemView item={item} />
          </TouchableOpacity>
        ))}
      </View>
    </SafeAreaView>
  );
}
