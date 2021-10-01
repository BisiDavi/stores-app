/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from 'react';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import {StyleSheet, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import useCurrentLocation from '@/hooks/useCurrentLocation';
import getDeviceDimensions from '@/utils/getDeviceDimensions';
import LoadingActivityIndicator from './LoadingActivityIndicator';
import {GetUserCoordinateAction} from '@/store/actions/UserCoordinateAction';
import {RootState} from '@/store/RootReducer';

const {deviceHeight, deviceWidth} = getDeviceDimensions();

const Map = () => {
  const {location, getLocation}: any = useCurrentLocation();
  const {longitude, latitude} = useSelector(
    (state: RootState) => state.coordinates,
  );
  const dispatch = useDispatch();
  const [coordinate, setCoordinate] = useState<any>({
    latitude: latitude,
    longitude: longitude,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  useEffect(() => {
    getLocation();
    if (location) {
      dispatch(GetUserCoordinateAction(location?.coords));
      setCoordinate({
        ...coordinate,
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      });
    }
  }, []);

  return (
    <>
      {location !== 'Waiting..' || coordinate.latitude !== 0 ? (
        <MapView
          provider={PROVIDER_GOOGLE}
          style={styles.map}
          initialRegion={coordinate}
          showsUserLocation={true}
          onRegionChangeComplete={userCoordinate =>
            setCoordinate({...userCoordinate})
          }
        >
          <Marker
            draggable
            onDragEnd={e => {
              setCoordinate({
                ...coordinate,
                latitude: e.nativeEvent.coordinate,
              });
            }}
            coordinate={{
              latitude: coordinate.latitude,
              longitude: coordinate.longitude,
            }}
          />
        </MapView>
      ) : (
        <View style={styles.loadingView}>
          <LoadingActivityIndicator />
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  map: {
    width: deviceWidth,
    backgroundColor: '#C4C4C4',
    flex: 1,
    height: deviceHeight * 0.5,
  },
  loadingView: {
    height: deviceHeight * 0.6,
  },
});

export default Map;
