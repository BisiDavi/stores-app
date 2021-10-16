import React, {useCallback} from 'react';
import {FlatList, TouchableOpacity, View, LogBox, Text} from 'react-native';
import {useSelector} from 'react-redux';
import {useQuery} from 'react-query';

import OrdersListItem from '@/components/Tabs/OrdersListItem';
import {RootState} from '@/store/RootReducer';
import {styles} from './CompletedOrdersTab.style';
import LoadingActivityIndicator from '@/components/Loader/LoadingActivityIndicator';
//import {showToast} from '@/utils';
import useRequest from '@/hooks/useRequest';
import SnackbarView from '../Loader/SnackbarView';
import {batchOrderToCustomer} from '@/utils/processOrders';

export default function CompletedOrdersTab({navigation}: any) {
  const {fetchCompletedOrders} = useRequest();

  const {data: completedOrders, status} = useQuery(
    'completedOrders',
    fetchCompletedOrders,
    {
      refetchInterval: 5000,
      refetchIntervalInBackground: true,
    },
  );

  const keyExtractor = useCallback(item => item[0]._id.toString(), []);
  const {storeProfile}: any = useSelector(
    (state: RootState) => state.storeProfile,
  );

  const {storeDetails}: any = useSelector(
    (state: RootState) => state.storeDetails,
  );

  let processedCompletedOrder;
  if (status === 'success') {
    processedCompletedOrder = batchOrderToCustomer(completedOrders);
    return processedCompletedOrder;
  }

  console.log('completedOrders', JSON.stringify(completedOrders));

  console.log(
    'processedCompletedOrder completedOrder',
    processedCompletedOrder,
  );

  LogBox.ignoreLogs(['Setting a timer']);

  const storesName = storeProfile ? storeProfile.name : storeDetails.name;

  return (
    <>
      {status === 'error' ? (
        //showToast('Unable to fetch completed orders')
        <Text>''</Text>
      ) : status === 'loading' ? (
        <LoadingActivityIndicator />
      ) : completedOrders.length > 0 ? (
        <FlatList
          data={processedCompletedOrder}
          renderItem={({items}: any) =>
            items.map((item: any[]) => (
              <TouchableOpacity
                onPressIn={() =>
                  navigation.navigate('CompletedOrderViewScreen', items)
                }
              >
                <OrdersListItem orderLength={items.length} item={item[0]} />
              </TouchableOpacity>
            ))
          }
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
      {status === 'loading' && (
        <SnackbarView text="Fetching completed orders..." />
      )}
    </>
  );
}
