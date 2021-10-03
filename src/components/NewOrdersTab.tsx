import React, {useCallback, useEffect, useState} from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {FlatList, View, Text, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';

import {RootState} from '@/store/RootReducer';
//import NewOrdersList from '@/json/new-order.json';
import OrdersListItem from '@/components/OrdersListItem';
import {getPendingOrdersRequest} from '@/network/postRequest';

export default function NewOrdersTab({navigation}: any) {
  const [newOrders, setNewOrders] = useState([]);
  const keyExtractor = useCallback(item => item.id.toString(), []);
  const {storeProfile}: any = useSelector(
    (state: RootState) => state.storeProfile,
  );
  useEffect(() => {
    let once = true;
    getPendingOrdersRequest({storeId: storeProfile._id}).then(response => {
      if (once) {
        setNewOrders(response.data.data);
      }
    });
    return () => {
      once = false;
    };
  }, [storeProfile]);

  return (
    <>
      {newOrders.length > 0 ? (
        <FlatList
          data={newOrders}
          renderItem={({item}) => {
            console.log('FlatList item', item);
            return (
              <TouchableOpacity
                onPressIn={() => navigation.navigate('ViewOrderScreen', item)}
              >
                <OrdersListItem item={item} />
              </TouchableOpacity>
            );
          }}
          initialNumToRender={5}
          keyExtractor={keyExtractor}
        />
      ) : (
        <View style={styles.container}>
          <Text style={styles.text}>
            Hello {storeProfile.name}, you currently don't have any new orders
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
