import React from 'react';
import {
  StyleSheet,
  View,
  Platform,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';
import ProgressIndicator from '@components/ProgressIndicator';
import StoreDetailsFormOne from '@components/forms/StoreDetailsFormOne';
import {SafeAreaView} from 'react-native-safe-area-context';

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

const styles = StyleSheet.create({
  view: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'column',
    margin: 15,
    alignItems: 'center',
  },
});
