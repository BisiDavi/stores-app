import React, {useCallback, useEffect, useState} from 'react';
import {FlatList, TouchableOpacity, View, Text, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';

import CompletedOrdersList from '@/json/completed-order.json';
import OrdersListItem from '@/components/OrdersListItem';
import {getCompletedOrdersRequest} from '@/network/postRequest';
import {RootState} from '@/store/RootReducer';

export default function CompletedOrdersTab({navigation}: any) {
  const [completedOrder, setCompletedOrder] = useState([]);
  const keyExtractor = useCallback(item => item.id.toString(), []);
  const {storeProfile}: any = useSelector(
    (state: RootState) => state.storeProfile,
  );
  useEffect(() => {
    let once = true;
    getCompletedOrdersRequest({storeId: storeProfile._id}).then(response => {
      if (once) {
        setCompletedOrder(response.data.data);
      }
    });
    return () => {
      once = false;
    };
  }, [storeProfile]);

  return (
    <>
      {completedOrder.length > 0 ? (
        <FlatList
          data={completedOrder}
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
      ) : (
        <View style={styles.container}>
          <Text style={styles.text}>
            Hello {storeProfile.name}, you currently don't have any completed
            orders
          </Text>
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    textAlign: 'center',
    fontFamily: 'Roboto-Bold',
    fontSize: 16,
  },
});
