import React, {useCallback} from 'react';
import {View, Text, FlatList} from 'react-native';
import {ListItem} from 'react-native-elements';
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

export default function AvailableBalanceScreen() {
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
      <FlatList
        data={availableBalanceContent}
        renderItem={availableBalance}
        initialNumToRender={7}
        keyExtractor={function (item) {
          return item.id.toString();
        }}
      />
    </View>
  );
}
