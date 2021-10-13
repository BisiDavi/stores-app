/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from 'react';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import {View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import useCurrentLocation from '@/hooks/useCurrentLocation';
import LoadingActivityIndicator from '../Loader/LoadingActivityIndicator';
import {GetUserCoordinateAction} from '@/store/actions/UserCoordinateAction';
import {RootState} from '@/store/RootReducer';
import {styles} from './Map.style';

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
      dispatch(GetUserCoordinateAction(coordinate));
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
          onRegionChangeComplete={userCoordinate => {
            console.log('userCoordinate', userCoordinate);
            setCoordinate({...userCoordinate});
          }}
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

export default Map;
