import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {View, Platform, KeyboardAvoidingView, ScrollView} from 'react-native';

import ProgressIndicator from '@/components/ProgressIndicator/ProgressIndicator';
import SettlementDetailsForm from '@/components/Forms/SettlementDetailsForm';
import {styles} from '@/styles/SettlementDetailsScreen.style';

export default function SettlementDetailsScreen() {
  return (
    <SafeAreaView style={styles.view}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        enabled={true}
        style={styles.view}
      >
        <ScrollView style={styles.view}>
          <View style={styles.container}>
            <View style={styles.indicator}>
              <ProgressIndicator
                title="Step 3: Settlement Details"
                selected={3}
              />
            </View>
            <SettlementDetailsForm />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
