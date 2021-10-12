import React, {memo} from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import {ListItem, Image} from 'react-native-elements';
import {useSelector} from 'react-redux';

import colors from '@/utils/colors';
import displayAsset from '@/utils/displayAsset';
import {RootState} from '@/store/RootReducer';

interface OrdersViewProps {
  item: {
    product: {
      image: string;
      name: string;
      price: number;
    };
    id: number;
    name: string;
    code?: string;
    time: string;
    delivery_time: string;
    order_status: string;
    image: string;
  };
}

function OrdersListItem({item}: OrdersViewProps) {
  const {order} = useSelector((state: RootState) => state.order);

  const orderStatus =
    item.order_status === 'RECEIVED'
      ? 'NEW'
      : item.order_status === 'PROCESSING'
      ? 'PENDING'
      : item.order_status === 'ENROUTE'
      ? 'COMPLETED'
      : '';

  const statusStyle =
    orderStatus === 'NEW'
      ? styles.new
      : orderStatus === 'PENDING'
      ? styles.pending
      : styles.completed;

  return (
    <ListItem style={styles.listItem} bottomDivider>
      <Image source={displayAsset(item?.product.image)} style={styles.avatar} />
      <ListItem.Content style={styles.listItemContent}>
        <View style={styles.row}>
          <Text>{item?.product.name}</Text>
          {/*<Text>{itemorder}</Text>*/}
        </View>
        <View style={styles.row}>
          <Text>{item?.delivery_time}</Text>
          <Text style={{...styles.status, ...statusStyle}}>{orderStatus}</Text>
        </View>
      </ListItem.Content>
    </ListItem>
  );
}

export default memo(OrdersListItem);

const styles = StyleSheet.create({
  completed: {
    backgroundColor: 'green',
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
