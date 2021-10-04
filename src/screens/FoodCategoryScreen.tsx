import React from 'react';
import {StackNavigationProp} from '@react-navigation/stack';
import {View, Text, TouchableOpacity} from 'react-native';
import foodCategoryContent from '@/json/food-category.json';
import {DrawerStackParamList} from '@/customTypes/.';
import {styles} from '@/styles/FoodCategoryScreen.style';

type FoodCategoryScreenNavigationProps = StackNavigationProp<
  DrawerStackParamList,
  'FoodCategoryScreen'
>;

type Props = {
  navigation: FoodCategoryScreenNavigationProps;
};

type item = {
  name: string;
  link: any;
};

export default function FoodCategoryScreen({navigation}: Props) {
  return (
    <View style={styles.container}>
      {foodCategoryContent.map((item: item, index) => (
        <TouchableOpacity
          onPress={() => navigation.navigate(item.link)}
          key={index}
        >
          <View style={styles.category}>
            <Text style={styles.categoryText}>{item.name}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
}
