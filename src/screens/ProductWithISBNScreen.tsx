import React from 'react';
import {View, Text} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {ScrollView} from 'react-native-gesture-handler';

import AddNewProductForm from '@/components/Forms/AddNewProductForm';
import {DrawerStackParamList} from '@/customTypes/.';
import Fab from '@/components/Fab';
import {styles} from '@/styles/ProductWithISBNScreen.style';

type ProductWithISBNNavigationProps = StackNavigationProp<
  DrawerStackParamList,
  'ProductWithISBN'
>;

type Props = {
  navigation: ProductWithISBNNavigationProps;
};

export default function ProductWithISBNScreen({navigation}: Props) {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.uploadProductImage}>
          <View style={styles.FabView}>
            <View style={styles.fabContainer}>
              <Fab onPress={() => {}} />
            </View>
            <Text>Upload Product Picture</Text>
          </View>
        </View>
        <AddNewProductForm navigation={navigation} />
      </View>
    </ScrollView>
  );
}
