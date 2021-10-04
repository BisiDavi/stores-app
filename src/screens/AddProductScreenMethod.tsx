import React from 'react';
import {StackNavigationProp} from '@react-navigation/stack';
import {View, Text, ScrollView} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

import {DrawerStackParamList} from '@/customTypes/.';
import addProductMethod from '@/json/add-product-method.json';
import {styles} from '@/styles/AddProductScreenMethod.style';

type item = {
  name: string;
  link: any;
};

export type addProductScreenMethodNavProps = StackNavigationProp<
  DrawerStackParamList,
  'AddProductScreenMethod'
>;

type Props = {
  navigation: addProductScreenMethodNavProps;
};

export default function AddProductScreenMethod({navigation}: Props) {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.content}>
          {addProductMethod.map((method, index) => (
            <View key={index} style={styles.methods}>
              {method.content.map((item: item, contentIndex: number) => (
                <TouchableOpacity
                  onPress={() => navigation.navigate(item.link)}
                  key={contentIndex}
                >
                  <View style={styles.method}>
                    <Text style={styles.text}>{item.name}</Text>
                  </View>
                </TouchableOpacity>
              ))}
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
}
