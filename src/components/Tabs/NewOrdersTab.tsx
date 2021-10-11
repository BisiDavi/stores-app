import React, {useCallback} from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {FlatList, View, Text} from 'react-native';
import {useQuery} from 'react-query';
import {useSelector} from 'react-redux';

import {RootState} from '@/store/RootReducer';
import OrdersListItem from '@/components/Tabs/OrdersListItem';
import LoadingActivityIndicator from '@/components/Loader/LoadingActivityIndicator';
import {styles} from './NewOrdersTab.style';
import {showToast} from '@/utils';
import useRequest from '@/hooks/useRequest';
import {formatOrders} from '@/utils/formatProduct';

export default function NewOrdersTab({navigation}: any) {
  const {storeProfile}: any = useSelector(
    (state: RootState) => state.storeProfile,
  );
  const {fetchPendingOrders, fetchAllProducts, fetchAllStoreExtras} =
    useRequest();

  const {data: newOrders, status} = useQuery('newOrders', fetchPendingOrders);

  const {data: allProducts} = useQuery('allProducts', fetchAllProducts);
  const {data: allStoreExtras} = useQuery(
    'allStoreExtras',
    fetchAllStoreExtras,
  );
  const newOrdersData =
    newOrders && formatOrders(allProducts, newOrders, allStoreExtras);
  const {storeDetails}: any = useSelector(
    (state: RootState) => state.storeDetails,
  );

  const keyExtractor = useCallback(item => item.id.toString(), []);

  const storesName = storeProfile ? storeProfile?.name : storeDetails.name;

  return (
    <>
      {status === 'error' ? (
        showToast('Unable to fetch new orders')
      ) : status === 'loading' ? (
        <LoadingActivityIndicator />
      ) : newOrders.length > 0 ? (
        <FlatList
          data={newOrdersData}
          renderItem={({item}: any) => {
            return (
              <TouchableOpacity
                onPressIn={() =>
                  navigation.navigate('ViewOrderScreen', item.extras)
                }
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
            Hello {storesName}, you currently don't have any new orders
          </Text>
        </View>
      )}
    </>
  );
}
