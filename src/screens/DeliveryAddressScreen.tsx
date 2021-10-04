import React, {useEffect} from 'react';
import {useSelector} from 'react-redux';
import {View, KeyboardAvoidingView, Platform, FlatList} from 'react-native';
import {Button, Text} from 'react-native-elements';

import GoogleAutoCompleteInput from '@/components/GoogleAutoCompleteInput';
import Map from '@/components/Map';
import {RootState} from '@/store/RootReducer';
import {styles} from '@/styles/DeliveryAddressScreen.style';

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

export default function DeliveryAddressScreen() {
  const {storeDetails} = useSelector((state: RootState) => state.storeDetails);
  const {latitude, longitude} = storeDetails;
  useEffect(() => {
    console.log('latitude', latitude);
    if (latitude !== null || longitude !== null) {
    }
  }, [latitude, longitude]);

  function nextPage() {
    if (latitude || longitude) {
    }
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      enabled={true}
      style={styles.safeView}
    >
      <View style={styles.container}>
        <View style={styles.textView}>
          <Text style={styles.title}>Person Address</Text>
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
  );
}
