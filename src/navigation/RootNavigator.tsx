import React, {useContext, useEffect} from 'react';
import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import Spinner from 'react-native-loading-spinner-overlay';

import AuthContext from '@/context/AuthContext';
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
  const {state} = useContext(AuthContext);

  const {completed, formPage} = useSelector(
    (storeState: RootState) => storeState.setupStore,
  );

  //const {storeDetails} = useSelector(
  //  (storeState: RootState) => storeState.storeDetails,
  //);

  const navigation = useNavigation();
  const tokenExpiry = hasTokenExpired(state.userToken);

  useEffect(() => {
    if (state.userToken && !completed) {
      const userEmail = getsignedUserEmail(state.userToken);
      if (userEmail && !tokenExpiry) {
        setClientToken(state.userToken);
        if (formPage !== 0) {
          screenNavigate(formPage, navigation);
        }
      }
    }
  }, [completed, formPage, navigation, state.userToken, tokenExpiry]);

  useEffect(() => {
    if (!tokenExpiry) {
      setClientToken(state.userToken);
    }
  }, [tokenExpiry, state.userToken]);

  return (
    <>
      <Spinner visible={state.isLoading} color={colors.cloudOrange5} />
      {!tokenExpiry && !completed ? (
        <StoreDetailsNavigation />
      ) : !tokenExpiry && completed ? (
        <DrawerNavigation />
      ) : tokenExpiry && !completed ? (
        <PublicNavigation />
      ) : (
        <Spinner color={colors.cloudOrange5} />
      )}
    </>
  );
}
