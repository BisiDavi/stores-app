import React, {memo} from 'react';
import {View, Text} from 'react-native';
import {ListItem, Image} from 'react-native-elements';
import {useSelector} from 'react-redux';

import displayAsset from '@/utils/displayAsset';
import {RootState} from '@/store/RootReducer';
import {styles} from './OrdersListItem.style';

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

  console.log('order', order);

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
