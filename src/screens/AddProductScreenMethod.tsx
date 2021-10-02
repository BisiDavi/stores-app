import React from 'react';
import {StackNavigationProp} from '@react-navigation/stack';
import {View, Text, StyleSheet, ScrollView, Dimensions} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

import {DrawerStackParamList} from '@/customTypes/.';
import addProductMethod from '@/json/add-product-method.json';
import colors from '@/utils/colors';

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

const AddProductScreenMethod = ({navigation}: Props) => {
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
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    padding: 10,
    width: Dimensions.get('window').width,
  },
  content: {
    alignItems: 'flex-start',
  },
  methods: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: Dimensions.get('window').width * 0.95,
  },
  method: {
    height: 120,
    width: 120,
    display: 'flex',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: colors.mallBlue2,
    borderRadius: 20,
    margin: 15,
  },
  text: {
    color: colors.mallBlue5,
    fontFamily: 'Montserrat-Bold',
    fontSize: 18,
    lineHeight: 24,
    textAlign: 'center',
  },
});

export default AddProductScreenMethod;
