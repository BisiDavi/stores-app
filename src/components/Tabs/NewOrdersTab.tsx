/* eslint-disable react-hooks/exhaustive-deps */
import React, {useCallback, useState, useEffect} from 'react';
import {TouchableOpacity} from 'react-native';
import {FlatList, View, Text} from 'react-native';
import {useQuery} from 'react-query';
import {useSelector} from 'react-redux';

import {RootState} from '@/store/RootReducer';
import OrdersListItem from '@/components/Tabs/OrdersListItem';
import LoadingActivityIndicator from '@/components/Loader/LoadingActivityIndicator';
import {styles} from './NewOrdersTab.style';
import useRequest from '@/hooks/useRequest';
import SnackbarView from '../Loader/SnackbarView';
import {batchOrderToCustomer} from '@/utils/processOrders';

export default function NewOrdersTab({navigation}: any) {
  const [processedNewOrders, setProcessedNewOrders] = useState(null);
  const {storeProfile}: any = useSelector(
    (state: RootState) => state.storeProfile,
  );
  const {fetchPendingOrders} = useRequest();

  const {storeDetails}: any = useSelector(
    (state: RootState) => state.storeDetails,
  );

  const keyExtractor = useCallback(items => items[0]._id.toString(), []);

  const {
    data: newOrders,
    error,
    status,
  } = useQuery('newOrders', fetchPendingOrders, {
    refetchInterval: 5000,
    refetchIntervalInBackground: true,
    refetchOnMount: true,
  });

  useEffect(() => {
    if (status === 'success' && !processedNewOrders) {
      const batchedOrders = batchOrderToCustomer(newOrders);
      setProcessedNewOrders(batchedOrders);
    }
  }, [status]);

  //console.log('processedNewOrder NewOrder', processedNewOrders);

  const storesName = storeProfile ? storeProfile?.name : storeDetails.name;
  let itemGroup: any = [];
  return (
    <>
      {status === 'error' ? (
        <Text>{error?.message}</Text>
      ) : status === 'loading' ? (
        <LoadingActivityIndicator />
      ) : newOrders.length > 0 && processedNewOrders ? (
        <FlatList
          data={processedNewOrders}
          renderItem={({items}: any) => {
            itemGroup = [...itemGroup, items];
            return itemGroup.map((item: any) => (
              <TouchableOpacity
                onPressIn={() =>
                  navigation.navigate('OrdersViewScreen', item.item)
                }
              >
                <OrdersListItem
                  orderLength={item.item.length}
                  item={item.item[0]}
                />
              </TouchableOpacity>
            ));
          }}
          initialNumToRender={5}
          keyExtractor={keyExtractor}
        />
      ) : (
        <View style={styles.container}>
          <Text style={styles.text}>
            Hello {storesName}, you currently don't have any new orders
          </Text>
        </View>
      )}
      {status === 'loading' && <SnackbarView text="Fetching new orders..." />}
    </>
  );
}
