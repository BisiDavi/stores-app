import React from 'react';
import {View, Platform, KeyboardAvoidingView, ScrollView} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import ProgressIndicator from '@/components/ProgressIndicator';
import StoreDetailsFormOne from '@/components/forms/StoreDetailsFormOne';
import {styles} from '@/styles/StoreDetailsScreenOne.style';

export default function StoreDetailsScreenOne() {
  return (
    <SafeAreaView style={styles.view}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        enabled={true}
        style={styles.view}
      >
        <ScrollView style={styles.view}>
          <View style={styles.container}>
            <ProgressIndicator title="Step 1: Stores Details" selected={1} />
            <StoreDetailsFormOne />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
