import React, {useCallback} from 'react';
import {View, Text, FlatList} from 'react-native';
import {useQueryClient, useQuery} from 'react-query';
import {ListItem} from 'react-native-elements';

import useRequest from '@/hooks/useRequest';
import availableBalanceContent from '@/json/available-balance.json';
import {styles} from '@/styles/AvailableBalanceScreen.style';

type ItemType = {
  item: AvailableBalanceType;
};

type AvailableBalanceType = {
  id: number;
  name: string;
  price: string;
  duration: string;
};

type storeAnalyticsType = {
  walletBalance: string | any;
};

export default function AvailableBalanceScreen() {
  const queryClient = useQueryClient();
  const {fetchWithdrawals} = useRequest();
  const storeAnalytics: storeAnalyticsType | any =
    queryClient.getQueryData('storeAnalytics');
  const {status, data} = useQuery('storeWithdrawals', fetchWithdrawals);

  console.log('AvailableBalanceScreen storeAnalytics', storeAnalytics);

  const availableBalance = useCallback(function renderItem({item}: ItemType) {
    return (
      <ListItem key={item?.id} bottomDivider>
        <ListItem.Content>
          <View style={styles.availableBalance}>
            <View style={styles.column1}>
              <Text>{item?.name}</Text>
            </View>
            <View style={styles.column2}>
              <Text style={styles.price}>{item?.price}</Text>
              <Text>{item?.duration}</Text>
            </View>
          </View>
        </ListItem.Content>
      </ListItem>
    );
  }, []);

  return (
    <View style={styles.container}>
      {!storeAnalytics ? (
        <Text>Loading ...</Text>
      ) : Number(storeAnalytics.walletBalance) === 0 ? (
        <Text style={styles.zeroBalance}>
          Your available balance is N {storeAnalytics.walletBalance}
        </Text>
      ) : (
        <FlatList
          data={availableBalanceContent}
          renderItem={availableBalance}
          initialNumToRender={7}
          keyExtractor={function (item) {
            return item.id.toString();
          }}
        />
      )}
    </View>
  );
}
