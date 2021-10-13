import React from 'react';
import {View, Text} from 'react-native';
import {ListItem, Image} from 'react-native-elements';
import {Icon} from 'react-native-elements';
import {useSelector} from 'react-redux';

import displayAsset from '@/utils/displayAsset';
import {styles} from './OrdersListItem.style';
import {RootState} from '@/store/RootReducer';

interface OrdersListItemViewProps {
  item: any;
}

export default function OrdersListItemView({item}: OrdersListItemViewProps) {
  const {order}: any = useSelector((state: RootState) => state.order);

  console.log('order', order);

  const acceptedOrder = order.includes(item.id);

  return (
    <View>
      <ListItem style={styles.listItem} bottomDivider>
        <Image
          source={displayAsset(item?.product.image)}
          style={styles.avatar}
        />
        <ListItem.Content style={styles.listItemContent}>
          <View style={styles.row}>
            <Text>{item?.product.name}</Text>
          </View>
          <View style={styles.row}>
            <Text>{item?.delivery_time}</Text>
            {acceptedOrder && <Icon name="checkcircleo" type="antdesign" />}
          </View>
        </ListItem.Content>
      </ListItem>
    </View>
  );
}
