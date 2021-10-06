import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import LoadingActivityIndicator from '../components/Loader/LoadingActivityIndicator';
import RootNavigator from './RootNavigator';

export default function Navigation() {
  return (
    <NavigationContainer fallback={<LoadingActivityIndicator />}>
      <RootNavigator />
    </NavigationContainer>
  );
}
