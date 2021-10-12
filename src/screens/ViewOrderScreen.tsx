import React, {useState, memo} from 'react';
import {useNavigation} from '@react-navigation/core';
import {View, Text, TextInput} from 'react-native';
import {Button, Image} from 'react-native-elements';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';

import displayAsset from '@/utils/displayAsset';
import {styles} from '@/styles/ViewOrderScreen.style';
import ConfirmOrderModal from '@/components/Modal/ConfirmOrderModal';
import SnackbarView from '@/components/Loader/SnackbarView';

function ViewOrderScreen({route}: any) {
  const [confirmOrderModal, setConfirmOrderModal] = useState(false);
  const [recommendReplacement, setRecommendReplacement] = useState(false);
  const [note, setNote] = useState('');
  const userOrders = route.params;
  const navigation: any = useNavigation();

  console.log('userOrders', userOrders);

  function toggleModal() {
    setConfirmOrderModal(!confirmOrderModal);
  }

  console.log('userOrders.product.extras', userOrders.product.extras);

  function recommendReplacementHandler() {
    setRecommendReplacement(true);
  }
  return (
    <ScrollView style={styles.view}>
      <ConfirmOrderModal visible={confirmOrderModal} closeModal={toggleModal} />
      <View style={styles.container}>
        <View style={styles.packView}>
          <Text>Number of Packs</Text>
          <Text>
            {userOrders.quantity}
            {Number(userOrders.quantity) === 1 ? ' Pack' : ' Packs'}
          </Text>
        </View>
        <View style={styles.orderGroup}>
          <TouchableOpacity
            onPress={() => navigation.navigate('ProductReplacementScreen')}
          >
            <View style={styles.orderView}>
              <Image
                style={styles.image}
                source={displayAsset(userOrders?.image)}
              />
              <View style={styles.foodDescription}>
                <Text>{userOrders.product.name}</Text>
                <Text>N{userOrders?.product.price}</Text>
              </View>
            </View>
          </TouchableOpacity>
          {/*{userOrders.product.extras.map((order: any, index: number) => (
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
          ))}*/}
          <View style={{...styles.orderView, ...styles.totalView}}>
            <Text style={styles.totalText}>Total Amount</Text>
            <Text style={styles.totalText}>N {userOrders.product.price}</Text>
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
              onPress={recommendReplacementHandler}
              titleStyle={styles.outlineTitle}
              title="Recommend Replacement"
            />
            <Button
              buttonStyle={styles.buttonStyle}
              onPress={toggleModal}
              title="Accept Order"
            />
          </View>
        </View>
        {recommendReplacement && (
          <SnackbarView text="This feature is coming in the next release" />
        )}
      </View>
    </ScrollView>
  );
}

export default memo(ViewOrderScreen);
