import React from 'react';
import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {SafeAreaView} from 'react-native-safe-area-context';

import ProgressIndicator from '@/components/ProgressIndicator';
import {View, StyleSheet, ScrollView, Dimensions} from 'react-native';
import AddProductOtherDetailsForm from '@/components/forms/AddProductOtherDetailsForm';
import {DrawerStackParamList} from '@/customTypes';

type AddProductOtherDetailsScreenNavigationProps = StackNavigationProp<
  DrawerStackParamList,
  'AddProductOtherDetailsScreen'
>;

type AddProductOtherDetailsScreenRouteProps = RouteProp<
  DrawerStackParamList,
  'AddProductOtherDetailsScreen'
>;

type Props = {
  route?: AddProductOtherDetailsScreenRouteProps;
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

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
  },
  container: {
    flex: 1,
    margin: 20,
    marginTop: 0,
    alignItems: 'flex-start',
    justifyContent: 'center',
    width: Dimensions.get('window').width * 0.9,
  },
  progressIndicator: {
    margin: 5,
    marginLeft: 0,
    marginBottom: 20,
    marginTop: 0,
  },
  title: {
    fontFamily: 'MontserratBold',
    fontSize: 16,
    marginTop: 0,
    margin: 10,
    marginLeft: 0,
    textAlign: 'center',
  },
});
