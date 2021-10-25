import React, {useEffect} from 'react';
import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import Spinner from 'react-native-loading-spinner-overlay';
import {StyleSheet, View} from 'react-native';

import {setClientToken} from '@/network/axiosInstance';
import {RootState} from '@/store/RootReducer';
import {
  getsignedUserEmail,
  hasTokenExpired,
  colors,
  screenNavigate,
} from '@/utils/.';
import DrawerNavigation from './DrawerNavigation';
import PublicNavigation from './PublicNavigation';
import StoreDetailsNavigation from './StoreDetailsNavigation';

export default function RootNavigator() {
  const {token, signOut, isAuthorized, loading} = useSelector(
    (state: RootState) => state.auth,
  );

  console.log('token', token);
  const {completed, formPage} = useSelector(
    (storeState: RootState) => storeState.setupStore,
  );
  const {storeDetails} = useSelector(
    (storeState: RootState) => storeState.storeDetails,
  );
  const {storeProfile} = useSelector(
    (storeState: RootState) => storeState.storeProfile,
  );
  const navigation = useNavigation();

  console.log('storeDetails', storeDetails);

  const loginRoute: any = 'LoginScreen';

  console.log('storeProfile', storeProfile);

  useEffect(() => {
    if (signOut && !isAuthorized) {
      navigation.navigate(loginRoute);
    }
  }, [isAuthorized, navigation, signOut]);

  //"valid token" is false, "expired token" is true
  const tokenHasExpired = hasTokenExpired(token);

  console.log('completed', completed, 'tokenHasExpired', tokenHasExpired);

  useEffect(() => {
    if (token && !completed) {
      const userEmail = getsignedUserEmail(token);
      if (userEmail && !tokenHasExpired) {
        setClientToken(token);
        if (formPage !== 0) {
          screenNavigate(formPage, navigation);
        }
      }
    }
  }, [completed, formPage, navigation, token, tokenHasExpired]);

  useEffect(() => {
    if (!tokenHasExpired) {
      setClientToken(token);
    }
  }, [tokenHasExpired, token]);

  return (
    <>
      <Spinner visible={loading} color={colors.cloudOrange5} />
      {!tokenHasExpired && !completed && completed !== null ? (
        <StoreDetailsNavigation />
      ) : !tokenHasExpired && completed ? (
        <DrawerNavigation />
      ) : tokenHasExpired && !completed ? (
        <PublicNavigation />
      ) : (
        <View style={styles.spinnerView}>
          <Spinner visible={true} color={colors.cloudOrange5} />
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  spinnerView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
