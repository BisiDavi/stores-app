import React, {useContext, useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import Spinner from 'react-native-loading-spinner-overlay';
import AuthContext from '../context/AuthContext';
import {setClientToken} from '../network/axiosInstance';
import {RootState} from '../store/RootReducer';
import {
  getsignedUserEmail,
  hasTokenExpired,
  colors,
  screenNavigate,
} from '../utils/.';
import DrawerNavigation from './DrawerNavigation';
import PublicNavigation from './PublicNavigation';
import StoreDetailsNavigation from './StoreDetailsNavigation';
import {getStoreDetailsRequest} from '../network/getRequest';

export default function RootNavigator() {
  const {state} = useContext(AuthContext);
  const [storeProfile, setStoreProfile] = useState({
    isStoreRegistered: false,
    profile: null,
  });
  const {completed, formPage} = useSelector(
    (storeState: RootState) => storeState.setupStore,
  );
  const navigation = useNavigation();
  const isSignedIn = hasTokenExpired(state.userToken);

  useEffect(() => {
    getStoreDetailsRequest()
      .then(response => {
        console.log('response getStoreDetailsRequest', response.data);
        if (response.data.bank) {
          setStoreProfile({
            ...storeProfile,
            isStoreRegistered: true,
          });
        }
      })
      .catch(error => {
        if (error.response) {
          console.log('error response', error.response);
        } else if (error.request) {
          console.log('error request', error.request);
        }
      });
  }, [storeProfile]);

  useEffect(() => {
    if (state.userToken) {
      const userEmail = getsignedUserEmail(state.userToken);
      if (userEmail && !isSignedIn) {
        setClientToken(state.userToken);
        if (formPage !== 0) {
          screenNavigate(formPage, navigation);
        }
      }
    }
  }, [formPage, isSignedIn, navigation, state]);

  useEffect(() => {
    if (!isSignedIn) {
      setClientToken(state.userToken);
    }
  }, [isSignedIn, state.userToken]);

  return (
    <>
      <Spinner visible={state.isLoading} color={colors.cloudOrange5} />
      {!isSignedIn && !completed ? (
        <StoreDetailsNavigation />
      ) : (!isSignedIn && completed) || storeProfile.isStoreRegistered ? (
        <DrawerNavigation />
      ) : (
        <PublicNavigation />
      )}
    </>
  );
}
