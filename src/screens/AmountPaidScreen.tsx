import React, {useCallback} from 'react';
import {View, Text, FlatList} from 'react-native';
import {ListItem} from 'react-native-elements';
import {useQuery, useQueryClient} from 'react-query';

import useRequest from '@/hooks/useRequest';
//import amountPaidContent from '@/json/amount-paid.json';
import {styles} from '@/styles/AmountPaidScreen.style';

type ItemType = {
  item: amountPaidType;
};

type amountPaidType = {
  id: number;
  price: string;
  duration: string;
  method: string;
};

type storeAnalyticsType = {
  walletBalance: string | any;
};

export default function AmountPaidScreen() {
  const {fetchWithdrawals} = useRequest();
  const {status, data} = useQuery('storeWithdrawals', fetchWithdrawals);
  const queryClient = useQueryClient();
  const storeAnalytics: storeAnalyticsType | any =
    queryClient.getQueryData('storeAnalytics');

  console.log('data storeWithdrawals', data, 'storeAnalytics', storeAnalytics);

  const amountPaid = useCallback(function renderItem({item}: ItemType) {
    return (
      <ListItem key={item?.id} bottomDivider>
        <ListItem.Content>
          <View style={styles.amountPaid}>
            <View style={styles.column1}>
              <Text>{item?.price}</Text>
            </View>
            <View style={styles.column2}>
              <Text>{item?.method}</Text>
              <Text>{item?.duration}</Text>
            </View>
          </View>
        </ListItem.Content>
      </ListItem>
    );
  }, []);
  return (
    <View style={styles.container}>
      {status === 'error' ? (
        <Text>Error occured</Text>
      ) : status === 'loading' ? (
        <Text>Loading ...</Text>
      ) : data.transactions.length > 0 ? (
        <FlatList
          data={data.transactions}
          renderItem={amountPaid}
          initialNumToRender={7}
          keyExtractor={function (item) {
            return item.id.toString();
          }}
        />
      ) : (
        <Text style={styles.zeroBalance}>N0.00, amount paid</Text>
      )}
    </View>
  );
}
