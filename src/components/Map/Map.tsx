import React, {useState} from 'react';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import {useSelector} from 'react-redux';

//import {GetUserCoordinateAction} from '@/store/actions/UserCoordinateAction';
import {RootState} from '@/store/RootReducer';
import {styles} from './Map.style';

const Map = () => {
  const {longitude, latitude} = useSelector(
    (state: RootState) => state.coordinates,
  );

  console.log('longitude', longitude, 'latitude', latitude);

  const [coordinate, setCoordinate] = useState<any>({
    latitude: latitude,
    longitude: longitude,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });
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
