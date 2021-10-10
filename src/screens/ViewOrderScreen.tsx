import React, {useState, memo} from 'react';
import {useNavigation} from '@react-navigation/core';
import {View, Text, TextInput} from 'react-native';
import {Button, Image} from 'react-native-elements';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';

import displayAsset from '@/utils/displayAsset';
import {styles} from '@/styles/ViewOrderScreen.style';

function ViewOrderScreen({route}: any) {
  const [note, setNote] = useState('');
  const userOrders = route.params;
  const navigation: any = useNavigation();
  return (
    <ScrollView style={styles.view}>
      <View style={styles.container}>
        <View style={styles.packView}>
          <Text>Number of Packs</Text>
          <Text>2 Packs</Text>
        </View>
        <View style={styles.orderGroup}>
          {userOrders.map((order: any, index: number) => (
            <TouchableOpacity
              key={index}
              onPress={() => navigation.navigate('ProductReplacementScreen')}
            >
              <View style={styles.orderView}>
                <Image
                  style={styles.image}
                  source={displayAsset(userOrders?.image)}
                />
                <View style={styles.foodDescription}>
                  <Text>{order?.name}</Text>
                  <Text>N{order?.amount}</Text>
                </View>
              </View>
            </TouchableOpacity>
          ))}
          <View style={{...styles.orderView, ...styles.totalView}}>
            <Text style={styles.totalText}>Total Amount</Text>
            <Text style={styles.totalText}>N1200</Text>
          </View>
          <View style={styles.note}>
            <TextInput
              multiline={true}
              numberOfLines={3}
              onChangeText={text => setNote(text)}
              value={note}
              placeholder="Dont put plenty oil in the beans"
            />
          </View>
          <View style={styles.note}>
            <Text>
              Accept the order if all the products are available. Recommend
              Replacement for unavailable products
            </Text>
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

export default memo(ViewOrderScreen);
