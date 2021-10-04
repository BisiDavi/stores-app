import React from 'react';
import {View} from 'react-native';
import {Image} from 'react-native-elements';
import pizza from '@/assets/pizza.png';
import {styles} from '@/styles/ViewStoreScreen.style';

export default function ViewStoreScreen() {
  return (
    <View style={styles.container}>
      <Image style={styles.productImage} source={pizza} />
    </View>
  );
}
