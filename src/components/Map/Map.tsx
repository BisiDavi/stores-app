/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import {useSelector} from 'react-redux';

//import {GetUserCoordinateAction} from '@/store/actions/UserCoordinateAction';
import {RootState} from '@/store/RootReducer';
import {styles} from './Map.style';
import useCurrentLocation from '@/hooks/useCurrentLocation';

const Map = () => {
  const {location, getLocation}: any = useCurrentLocation();
  const {longitude, latitude} = useSelector(
    (state: RootState) => state.coordinates,
  );

  const [coordinate, setCoordinate] = useState<any>({
    latitude: latitude,
    longitude: longitude,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  useEffect(() => {
    getLocation();
  }, []);

  useEffect(() => {
    if (location !== null) {
      setCoordinate({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      });
    }
  }, [location]);

  console.log(
    'longitude',
    longitude,
    'latitude',
    latitude,
    'location',
    location?.coords,
  );

  console.log('coordinate', coordinate);

  function onRegionChange(region: any) {
    console.log('region', region);
    setCoordinate(region);
  }

  return (
    <>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        initialRegion={coordinate}
        showsUserLocation={true}
        onRegionChange={onRegionChange}
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
    </>
  );
};

export default Map;
