import React, {useCallback} from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
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
  const {storeProfile}: any = useSelector(
    (state: RootState) => state.storeProfile,
  );
  const {fetchPendingOrders} = useRequest();

  const {storeDetails}: any = useSelector(
    (state: RootState) => state.storeDetails,
  );

  const keyExtractor = useCallback(item => item[0]._id.toString(), []);

  const {data: newOrders, status} = useQuery('newOrders', fetchPendingOrders, {
    refetchInterval: 1000,
    refetchIntervalInBackground: true,
  });

  let processedNewOrder;
  if (status === 'success') {
    processedNewOrder = batchOrderToCustomer(newOrders);
    return processedNewOrder;
  }

  console.log('processedNewOrder NewOrder', processedNewOrder);

  const storesName = storeProfile ? storeProfile?.name : storeDetails.name;

  return (
    <>
      {status === 'error' ? (
        <Text>''</Text>
      ) : status === 'loading' ? (
        <LoadingActivityIndicator />
      ) : newOrders.length > 0 ? (
        <FlatList
          data={processedNewOrder}
          renderItem={({items}: any) =>
            items.map((item: any[]) => (
              <TouchableOpacity
                onPressIn={() => navigation.navigate('OrdersViewScreen', items)}
              >
                <OrdersListItem orderLength={items.length} item={item[0]} />
              </TouchableOpacity>
            ))
          }
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
