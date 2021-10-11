import React, {useCallback} from 'react';
import {FlatList, TouchableOpacity, View, LogBox, Text} from 'react-native';
import {useSelector} from 'react-redux';
import {useQuery} from 'react-query';

import OrdersListItem from '@/components/Tabs/OrdersListItem';
import {RootState} from '@/store/RootReducer';
import {styles} from './CompletedOrdersTab.style';
import LoadingActivityIndicator from '@/components/Loader/LoadingActivityIndicator';
import {showToast} from '@/utils';
import useRequest from '@/hooks/useRequest';
import {formatOrders} from '@/utils/formatProduct';

export default function CompletedOrdersTab({navigation}: any) {
  const {fetchCompletedOrders, fetchAllProducts, fetchAllStoreExtras} =
    useRequest();

  const {data: completedOrders, status} = useQuery(
    'completedOrders',
    fetchCompletedOrders,
  );
  const {data: allProducts} = useQuery('allProducts', fetchAllProducts);
  const {data: allStoreExtras} = useQuery(
    'allStoreExtras',
    fetchAllStoreExtras,
  );

  LogBox.ignoreLogs(['Setting a timer']);

  const completedOrdersData =
    completedOrders &&
    formatOrders(allProducts, completedOrders, allStoreExtras);

  const keyExtractor = useCallback(item => item.id.toString(), []);
  const {storeProfile}: any = useSelector(
    (state: RootState) => state.storeProfile,
  );

  const {storeDetails}: any = useSelector(
    (state: RootState) => state.storeDetails,
  );

  const storesName = storeProfile ? storeProfile.name : storeDetails.name;

  return (
    <>
      {status === 'error' ? (
        showToast('Unable to fetch completed orders')
      ) : status === 'loading' ? (
        <LoadingActivityIndicator />
      ) : completedOrders.length > 0 ? (
        <FlatList
          data={completedOrdersData}
          renderItem={({item}: any) => (
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
