import {useState} from 'react';
import {Alert, PermissionsAndroid, Platform, ToastAndroid} from 'react-native';
import Geolocation from 'react-native-geolocation-service';

import {GetUserCoordinateAction} from '@/store/actions/UserCoordinateAction';
import {useDispatch} from 'react-redux';

export default function useCurrentLocation() {
  const [location, setLocation] = useState(null);
  const dispatch = useDispatch();

  const hasLocationPermission = async () => {
    if (Platform.OS === 'android' && Platform.Version < 23) {
      return true;
    }

    const hasPermission = await PermissionsAndroid.check(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
    );

    if (hasPermission) {
      return true;
    }

    const status = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
    );

    if (status === PermissionsAndroid.RESULTS.GRANTED) {
      return true;
    }

    if (status === PermissionsAndroid.RESULTS.DENIED) {
      ToastAndroid.show(
        'Location permission denied by user.',
        ToastAndroid.LONG,
      );
    } else if (status === PermissionsAndroid.RESULTS.NEVER_ASK_AGAIN) {
      ToastAndroid.show(
        'Location permission revoked by user.',
        ToastAndroid.LONG,
      );
    }

    return false;
  };
  async function getLocation() {
    const hasPermission = await hasLocationPermission();

    if (!hasPermission) {
      return;
    }

    Geolocation.getCurrentPosition(
      (position: any) => {
        setLocation(position);
        console.log('position', position);
        dispatch(GetUserCoordinateAction(position.coords));
      },
      error => {
        Alert.alert(`Code ${error.code}`, error.message);
        setLocation(null);
        console.log(error);
      },
      {
        accuracy: {
          android: 'high',
          ios: 'best',
        },
        enableHighAccuracy: true,
        timeout: 15000,
        maximumAge: 10000,
        distanceFilter: 0,
        forceRequestLocation: true,
      },
    );
  }
  return {location, getLocation};
}
