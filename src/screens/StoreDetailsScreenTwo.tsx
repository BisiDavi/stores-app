import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {View, Platform, KeyboardAvoidingView, ScrollView} from 'react-native';

import ProgressIndicator from '@/components/ProgressIndicator/ProgressIndicator';
import StoreDetailsFormTwo from '@/components/Forms/StoreDetailsFormTwo';
import {styles} from '@/styles/StoreDetailsScreenTwo.style';

export default function StoreDetailsScreenTwo() {
  return (
    <SafeAreaView style={styles.view}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        enabled={true}
        style={styles.view}
      >
        <ScrollView style={styles.view}>
          <View style={styles.container}>
            <ProgressIndicator title="Step 2: Owner Details" selected={2} />
            <StoreDetailsFormTwo />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
