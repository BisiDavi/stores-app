import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import {TouchableOpacity} from 'react-native';
import {Input} from 'react-native-elements';
import {StackScreenProps} from '@react-navigation/stack';

import RequestRiderForm from '@/components/Forms/RequestRiderForm';
import {DrawerStackParamList} from '@/customTypes/.';
import {styles} from '@/styles/RequestARiderScreen.style';

export default function RequestARiderScreen({
  navigation,
}: StackScreenProps<DrawerStackParamList, 'RequestARiderScreen'>) {
  function navigateToDeliveryAddress() {
    return navigation.navigate('DeliveryAddressScreen');
  }
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.spaceUp}>
          <Text style={styles.link}>Order Details</Text>
        </View>
        <Text style={styles.text}>Order Category</Text>
        <View style={styles.unitView}>
          <Text style={styles.text}>Number of Units</Text>
          <Input containerStyle={styles.inputStyle} />
        </View>
        <TouchableOpacity onPress={navigateToDeliveryAddress}>
          <Text style={styles.link}>Delivery Details</Text>
        </TouchableOpacity>
        <RequestRiderForm />
      </View>
    </ScrollView>
  );
}
