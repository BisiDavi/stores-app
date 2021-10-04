import React, {useCallback} from 'react';
import {View, Text, FlatList} from 'react-native';
import {ListItem} from 'react-native-elements';
import amountPaidContent from '@/json/amount-paid.json';
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

export default function AmountPaidScreen() {
  const amountPaid = useCallback(function renderItem({item}: ItemType) {
    return (
      <ListItem key={item?.id} bottomDivider>
        <ListItem.Content>
          <View style={styles.amountPaid}>
            <View style={styles.column1}>
              <Text>{item.price}</Text>
            </View>
            <View style={styles.column2}>
              <Text>{item.method}</Text>
              <Text>{item.duration}</Text>
            </View>
          </View>
        </ListItem.Content>
      </ListItem>
    );
  }, []);
  return (
    <View style={styles.container}>
      <FlatList
        data={amountPaidContent}
        renderItem={amountPaid}
        initialNumToRender={7}
        keyExtractor={function (item) {
          return item.id.toString();
        }}
      />
    </View>
  );
}
