import React, {useState} from 'react';
import {StackNavigationProp} from '@react-navigation/stack';
import {View, Text, ScrollView} from 'react-native';
import {Snackbar} from 'react-native-paper';
import {TouchableOpacity} from 'react-native';

import {DrawerStackParamList} from '@/customTypes/.';
import addProductMethod from '@/json/add-product-method.json';
import {styles} from '@/styles/AddProductScreenMethod.style';

type item = {
  name: string;
  link?: any;
  method?: string;
};

export type addProductScreenMethodNavProps = StackNavigationProp<
  DrawerStackParamList,
  'AddProductScreenMethod'
>;

type Props = {
  navigation: addProductScreenMethodNavProps;
};

export default function AddProductScreenMethod({navigation}: Props) {
  const [snackVisibility, setSnackVisibility] = useState(false);

  function toggleSnackbar() {
    setSnackVisibility(!snackVisibility);
  }

  function onDimissSnackbar() {
    setSnackVisibility(false);
  }

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.content}>
          {addProductMethod.map((method, index) => (
            <View key={index} style={styles.methods}>
              {method.content.map((item: item, contentIndex: number) => {
                return item.link ? (
                  <TouchableOpacity
                    onPress={() => navigation.navigate(item.link)}
                    key={contentIndex}
                  >
                    <View style={styles.method}>
                      <Text style={styles.text}>{item.name}</Text>
                    </View>
                  </TouchableOpacity>
                ) : (
                  item.method && (
                    <TouchableOpacity
                      onPress={toggleSnackbar}
                      key={contentIndex}
                    >
                      <View style={styles.method}>
                        <Text style={styles.text}>{item.name}</Text>
                      </View>
                    </TouchableOpacity>
                  )
                );
              })}
            </View>
          ))}
        </View>
        <View style={styles.snackView}>
          <Snackbar
            style={styles.snackbar}
            visible={snackVisibility}
            onDismiss={onDimissSnackbar}
          >
            Feature coming soon
          </Snackbar>
        </View>
      </View>
    </ScrollView>
  );
}
