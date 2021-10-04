import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {StackNavigationProp} from '@react-navigation/stack';
import {View, ScrollView} from 'react-native';

import ProgressIndicator from '@/components/ProgressIndicator';
import AddProductOtherDetailsForm from '@/components/forms/AddProductOtherDetailsForm';
import {DrawerStackParamList} from '@/customTypes';
import {styles} from '@/styles/AddFreshFoodOtherDetailsScreen.style';

export type AddFreshFoodOtherDetailsScreenNavigationProps = StackNavigationProp<
  DrawerStackParamList,
  'AddFreshFoodOtherDetailsScreen'
>;

type Props = {
  navigation: AddFreshFoodOtherDetailsScreenNavigationProps;
};

export default function AddFreshFoodOtherDetailsScreen({navigation}: Props) {
  return (
    <SafeAreaView style={styles.scrollView}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.container}>
          <ProgressIndicator
            style={styles.progressIndicator}
            selected={2}
            title="Step 2: Other Details (fresh food)"
            total={2}
          />
          <AddProductOtherDetailsForm navigation={navigation} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
