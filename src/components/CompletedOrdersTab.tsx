import React, {useCallback} from 'react';
import {FlatList, TouchableOpacity} from 'react-native';
import CompletedOrdersList from '@/json/completed-order.json';
import OrdersListItem from '@/components/OrdersListItem';

export default function CompletedOrdersTab({navigation}: any) {
  const keyExtractor = useCallback(item => item.id.toString(), []);

  return (
    <FlatList
      data={CompletedOrdersList}
      renderItem={({item}) => (
        <TouchableOpacity
          onPressIn={() => navigation.navigate('ViewOrderScreen', item)}
        >
          <OrdersListItem item={item} />
        </TouchableOpacity>
      )}
      initialNumToRender={5}
      maxToRenderPerBatch={5}
      keyExtractor={keyExtractor}
    />
  );
}
