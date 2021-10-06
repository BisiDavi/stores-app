/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect} from 'react';
import {useSelector} from 'react-redux';
import {Button, Text} from 'react-native-elements';
import {SafeAreaView} from 'react-native-safe-area-context';
import {View, KeyboardAvoidingView, Platform, FlatList} from 'react-native';

import Map from '@/components/Map/Map';
import GoogleAutoCompleteInput from '@/components/Map/GoogleAutoCompleteInput';
import {RootState} from '@/store/RootReducer';
import useStoreSetupNavigation from '@/hooks/useStoreSetupNavigation';
import {styles} from '@/styles/StoreAddressScreen.style';

function MapView() {
  return (
    <View style={styles.mapView}>
      <Map />
    </View>
  );
}

function RenderGoogleInput(nextPage: () => void) {
  return (
    <View style={styles.renderGoogleInputView}>
      <Text style={styles.text}>Address of Store</Text>
      <GoogleAutoCompleteInput placeholder="Choose your location on the map" />
      <View style={styles.buttonView}>
        <Button
          onPress={nextPage}
          buttonStyle={styles.button}
          title="Confirm Address"
        />
      </View>
    </View>
  );
}

export default function StoreAddressScreen() {
  const {storeDetails} = useSelector((state: RootState) => state.storeDetails);
  const {latitude, longitude} = storeDetails;
  const {onBoardingNextScreen} = useStoreSetupNavigation();

  useEffect(() => {
    if (latitude !== null || longitude !== null) {
      onBoardingNextScreen(2, false);
    }
  }, []);

  function nextPage() {
    if (latitude || longitude) {
      onBoardingNextScreen(2, false);
    }
  }

  return (
    <SafeAreaView style={styles.safeView}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        enabled={true}
        style={styles.safeView}
      >
        <View style={styles.container}>
          <View style={styles.textView}>
            <Text style={styles.title}>Stores Address</Text>
          </View>
          <FlatList
            style={styles.safeView}
            data={null}
            removeClippedSubviews={false}
            keyboardShouldPersistTaps={'handled'}
            ListHeaderComponent={<MapView />}
            ListFooterComponent={RenderGoogleInput(nextPage)}
            renderItem={null}
            ListFooterComponentStyle={styles.footerComponentStyle}
          />
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
