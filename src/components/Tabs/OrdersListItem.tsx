import React, {memo} from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import {ListItem, Image} from 'react-native-elements';
import colors from '@/utils/colors';
import displayAsset from '@/utils/displayAsset';

interface OrdersViewProps {
  item: {
    id: number;
    name: string;
    code?: string;
    time: string;
    status: string;
    image: string;
  };
}

function OrdersListItem({item}: OrdersViewProps) {
  const statusStyle =
    item.status === 'NEW'
      ? styles.new
      : item.status === 'PENDING'
      ? styles.pending
      : styles.completed;

  return (
    <ListItem style={styles.listItem} bottomDivider>
      <Image source={displayAsset(item?.image)} style={styles.avatar} />
      <ListItem.Content style={styles.listItemContent}>
        <View style={styles.row}>
          <Text>{item?.name}</Text>
          <Text>{item?.code}</Text>
        </View>
        <View style={styles.row}>
          <Text>{item?.time}</Text>
          <Text style={{...styles.status, ...statusStyle}}>{item?.status}</Text>
        </View>
      </ListItem.Content>
    </ListItem>
  );
}

export default memo(OrdersListItem);

const styles = StyleSheet.create({
  completed: {
    backgroundColor: colors.mallBlue5,
  },
  pending: {
    backgroundColor: colors.cloudOrange5,
  },
  new: {
    backgroundColor: colors.accentRed,
  },
  touchableOpacity: {
    width: Dimensions.get('window').width,
    height: 120,
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: Dimensions.get('window').width,
    height: 120,
  },
  listItemContent: {
    width: Dimensions.get('window').width,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: Dimensions.get('window').width * 0.7,
    marginTop: 10,
    marginBottom: 10,
  },
  clipboard: {
    height: 20,
    width: 20,
  },
  avatar: {
    height: 50,
    width: 50,
    borderRadius: 100,
    margin: 5,
  },
  status: {
    padding: 5,
    paddingLeft: 8,
    paddingRight: 8,
    borderRadius: 4,
    fontSize: 12,
    color: colors.neutralWhite,
  },
  appModal: {
    flex: 1,
  },
});
