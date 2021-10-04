import React from 'react';
import {KeyboardAvoidingView, ScrollView, Platform, View} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {DrawerStackParamList} from '@/customTypes/.';
import AddExtraForm from '@/components/forms/AddExtraForm';
import {styles} from '@/styles/AddExtraScreen.style';

export type AddProductScreenNavigationProps = StackNavigationProp<
  DrawerStackParamList,
  'AddExtraScreen'
>;

type Props = {
  navigation: AddProductScreenNavigationProps;
};

export default function AddExtraScreen({navigation}: Props) {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      enabled={true}
      style={styles.view}
    >
      <ScrollView style={styles.view}>
        <View style={styles.container}>
          <AddExtraForm navigation={navigation} />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
