import React from 'react';
import {Image} from 'react-native-elements';
import {useDispatch, useSelector} from 'react-redux';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {View, Text} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer';
import {useNavigation} from '@react-navigation/core';

import JollofRice from '@/assets/jollofRice.png';
import colors from '@/utils/colors';
import {RootState} from '@/store/RootReducer';
import {styles} from '@/styles/ProfileIcon.style';
import {ToggleWithdrawalModalAction} from '@/store/actions/SetupStoreAction';
import {removeToken} from '@/network/axiosInstance';

export default function ProfileIcon(props: any) {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const {storeDetails} = useSelector((state: RootState) => state.storeDetails);
  const {storeProfile}: any = useSelector(
    (state: RootState) => state.storeProfile,
  );
  const {name}: any | string = storeDetails;
  const storeName = name.length === 0 ? storeProfile?.name : name;
  function toggleModal() {
    dispatch(ToggleWithdrawalModalAction());
  }

  function logout() {
    removeToken();
    const loginRoute: any = 'LoginScreen';
    navigation.navigate(loginRoute);
  }

  return (
    <DrawerContentScrollView style={styles.drawerScrollView} {...props}>
      <View style={styles.profileIconView}>
        <TouchableOpacity style={styles.profileIcon} onPress={toggleModal}>
          <Image source={JollofRice} style={styles.avatar} />
          <Text style={styles.userName}>{storeName}</Text>
          <Text style={styles.balanceText}>N 0.00</Text>
        </TouchableOpacity>
      </View>

      <DrawerItemList {...props} />
      <DrawerItem
        labelStyle={styles.drawerItem}
        activeTintColor={colors.neutralWhite}
        onPress={logout}
        label="Logout"
      />
    </DrawerContentScrollView>
  );
}
