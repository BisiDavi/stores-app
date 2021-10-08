import React, {useCallback} from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useQuery} from 'react-query';
import {FlatList, View, Text} from 'react-native';
import {useSelector} from 'react-redux';

import {RootState} from '@/store/RootReducer';
import OrdersListItem from '@/components/Tabs/OrdersListItem';
import LoadingActivityIndicator from '@/components/Loader/LoadingActivityIndicator';
import {getPendingOrdersRequest} from '@/network/postRequest';
import {styles} from './NewOrdersTab.style';
import {showToast} from '@/utils';

export default function NewOrdersTab({navigation}: any) {
  const {storeProfile}: any = useSelector(
    (state: RootState) => state.storeProfile,
  );
  const {data: newOrders, status} = useQuery('newOrders', async () => {
    const {data} = await getPendingOrdersRequest({storeId: storeProfile.id});
    return data;
  });

  const {storeDetails}: any = useSelector(
    (state: RootState) => state.storeDetails,
  );

  const keyExtractor = useCallback(item => item.id.toString(), []);

  const storesName = storeProfile.name ? storeProfile.name : storeDetails.name;

  return (
    <>
      {status === 'error' ? (
        showToast('Unable to fetch new orders')
      ) : status === 'loading' ? (
        <LoadingActivityIndicator />
      ) : newOrders.data.llength > 0 ? (
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
            Hello {storesName}, you currently don't have any new orders
          </Text>
        </View>
      )}
    </>
  );
}
