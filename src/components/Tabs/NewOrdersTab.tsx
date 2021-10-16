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

export default function NewOrdersTab({navigation}: any) {
  const {storeProfile}: any = useSelector(
    (state: RootState) => state.storeProfile,
  );
  const {fetchPendingOrders} = useRequest();

  const {data: newOrders, status} = useQuery('newOrders', fetchPendingOrders, {
    refetchInterval: 1000,
    refetchIntervalInBackground: true,
  });

  const {storeDetails}: any = useSelector(
    (state: RootState) => state.storeDetails,
  );

  const keyExtractor = useCallback(item => item._id.toString(), []);

  const storesName = storeProfile ? storeProfile?.name : storeDetails.name;

  return (
    <>
      {status === 'error' ? (
        <Text>''</Text>
      ) : status === 'loading' ? (
        <LoadingActivityIndicator />
      ) : newOrders.length > 0 ? (
        <FlatList
          data={newOrders}
          renderItem={({item}: any) => {
            return (
              <TouchableOpacity
                onPressIn={() => navigation.navigate('OrdersViewScreen', item)}
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
      {status === 'loading' && <SnackbarView text="Fetching new orders..." />}
    </>
  );
}
