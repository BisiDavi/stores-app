import React, {useCallback} from 'react';
import {FlatList, TouchableOpacity, View, LogBox, Text} from 'react-native';
import {useSelector} from 'react-redux';
import {useQuery} from 'react-query';

import OrdersListItem from '@/components/Tabs/OrdersListItem';
import {getCompletedOrdersRequest} from '@/network/postRequest';
import {RootState} from '@/store/RootReducer';
import {styles} from './CompletedOrdersTab.style';
import LoadingActivityIndicator from '@/components/Loader/LoadingActivityIndicator';
import {showToast} from '@/utils';

export default function CompletedOrdersTab({navigation}: any) {
  const {data: completedOrders, status} = useQuery(
    'completedOrders',
    async () => {
      const {data} = await getCompletedOrdersRequest({
        storeId: storeProfile.id,
      });
      return data;
    },
  );

  LogBox.ignoreLogs(['Setting a timer']);

  //useEffect(() => {
  //  if (status === 'success' && showOnce) {
  //  }
  //}, [status]);

  const keyExtractor = useCallback(item => item.id.toString(), []);
  const {storeProfile}: any = useSelector(
    (state: RootState) => state.storeProfile,
  );
  console.log('storeProfile', storeProfile);
  const {storeDetails}: any = useSelector(
    (state: RootState) => state.storeDetails,
  );

  const storesName = storeProfile.name ? storeProfile.name : storeDetails.name;

  return (
    <>
      {status === 'error' ? (
        showToast('Unable to fetch completed orders')
      ) : status === 'loading' ? (
        <LoadingActivityIndicator />
      ) : completedOrders.data.length > 0 ? (
        <FlatList
          data={completedOrders.data}
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
