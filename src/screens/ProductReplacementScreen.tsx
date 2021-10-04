import React, {useState, memo} from 'react';
import {View, Text} from 'react-native';
import {Button, Image} from 'react-native-elements';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import displayAsset from '@/utils/displayAsset';
import {styles} from '@/styles/ProductReplacementScreen.style';

interface OrdersViewProps {
  order: {
    name: string;
    amount: string;
  };
  userOrders: {
    image: string;
  };
}

function OrdersView({order, userOrders}: OrdersViewProps) {
  const [showReplacement, setReplacement] = useState(false);

  function onPressHandler() {
    return setReplacement(!showReplacement);
  }
  return (
    <TouchableOpacity onPress={onPressHandler}>
      <View style={styles.orderView}>
        <Image style={styles.image} source={displayAsset(userOrders.image)} />
        <View style={styles.foodDescription}>
          <Text>{order.name}</Text>
          <Text>N {order.amount}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

function ProductReplacementScreen({route}: any) {
  const userOrders = route.params;
  return (
    <ScrollView style={styles.view}>
      <View style={styles.container}>
        <View style={styles.packView}>
          <Text>Number of Packs</Text>
          <Text>2 Packs</Text>
        </View>
        <View style={styles.orderGroup}>
          {userOrders?.orders.map((order: any, index: number) => (
            <OrdersView order={order} userOrders={userOrders} key={index} />
          ))}
          <View style={{...styles.orderView, ...styles.totalView}}>
            <Text style={styles.totalText}>Total Amount</Text>
            <Text style={styles.totalText}>N1200</Text>
          </View>

          <View style={styles.buttonView}>
            <Button
              buttonStyle={styles.outlineButton}
              type="outline"
              titleStyle={styles.outlineTitle}
              title="Recommend Replacement"
            />
            <Button buttonStyle={styles.buttonStyle} title="Accept Order" />
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

export default memo(ProductReplacementScreen);
