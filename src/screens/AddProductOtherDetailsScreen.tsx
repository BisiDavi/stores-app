import React from 'react';
import {StackNavigationProp} from '@react-navigation/stack';
import {SafeAreaView} from 'react-native-safe-area-context';

import ProgressIndicator from '@/components/ProgressIndicator';
import {View, ScrollView} from 'react-native';
import AddProductOtherDetailsForm from '@/components/forms/AddProductOtherDetailsForm';
import {DrawerStackParamList} from '@/customTypes';
import {styles} from '@/styles/AddProductOtherDetailsScreen.style';

type AddProductOtherDetailsScreenNavigationProps = StackNavigationProp<
  DrawerStackParamList,
  'AddProductOtherDetailsScreen'
>;

type Props = {
  navigation: AddProductOtherDetailsScreenNavigationProps;
};

export default function AddProductOtherDetailsScreen({navigation}: Props) {
  return (
    <SafeAreaView style={styles.scrollView}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.container}>
          <ProgressIndicator
            style={styles.progressIndicator}
            selected={2}
            title="Step 2: Other Details"
            total={2}
          />
          <AddProductOtherDetailsForm navigation={navigation} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
