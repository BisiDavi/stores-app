import React, {useCallback} from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {FlatList} from 'react-native';
import NewOrdersList from '@/json/new-order.json';
import OrdersListItem from '@/components/OrdersListItem';

export default function NewOrdersTab({navigation}: any) {
  const keyExtractor = useCallback(item => item.id.toString(), []);

  return (
    <FlatList
      data={NewOrdersList}
      renderItem={({item}) => (
        <TouchableOpacity
          onPressIn={() => navigation.navigate('ViewOrderScreen', item)}
        >
          <OrdersListItem item={item} />
        </TouchableOpacity>
      )}
      initialNumToRender={5}
      keyExtractor={keyExtractor}
    />
  );
}
