import React, {useCallback} from 'react';
import {View, Text, FlatList} from 'react-native';
import {ListItem} from 'react-native-elements';
//import amountPaidContent from '@/json/amount-paid.json';
import {styles} from '@/styles/AmountPaidScreen.style';
import useRequest from '@/hooks/useRequest';
import {useQuery} from 'react-query';

type ItemType = {
  item: amountPaidType;
};

type amountPaidType = {
  id: number;
  price: string;
  duration: string;
  method: string;
};

export default function AmountPaidScreen() {
  const {fetchWithdrawals} = useRequest();
  const {status, data} = useQuery('storeWithdrawals', fetchWithdrawals);

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
        <Text>N0.0, amount paid</Text>
      )}
    </View>
  );
}
