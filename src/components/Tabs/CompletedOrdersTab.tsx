import React, {useCallback, useEffect, useState} from 'react';
import {FlatList, TouchableOpacity, View, Text} from 'react-native';
import {useSelector} from 'react-redux';

import OrdersListItem from '@/components/Tabs/OrdersListItem';
import {getCompletedOrdersRequest} from '@/network/postRequest';
import {RootState} from '@/store/RootReducer';
import {styles} from './CompletedOrdersTab.style';

export default function CompletedOrdersTab({navigation}: any) {
  const [completedOrder, setCompletedOrder] = useState([]);
  const keyExtractor = useCallback(item => item.id.toString(), []);
  const {storeProfile}: any = useSelector(
    (state: RootState) => state.storeProfile,
  );
  console.log('storeProfile', storeProfile);
  const {storeDetails}: any = useSelector(
    (state: RootState) => state.storeDetails,
  );
  const storesName = storeDetails.name;
  useEffect(() => {
    let once = true;
    getCompletedOrdersRequest({storeId: storeProfile?._id}).then(response => {
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
            Hello {storesName}, you currently don't have any completed orders
          </Text>
        </View>
      )}
    </>
  );
}
