import React from 'react';
import {Image} from 'react-native-elements';
import {StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {createDrawerNavigator} from '@react-navigation/drawer';

import {DrawerStackParamList} from '@/customTypes/.';
import drawerJson from '@/json/drawer.json';
import {displayAsset, colors} from '@/utils';
import displayNavigators from '@/utils/displayNavigators';
import ProfileIcon from '@/components/ProfileIcon';
import WithdrawalModal from '@/components/Modal/WithdrawalModal';
import {RootState} from '@/store/RootReducer';
import {ToggleWithdrawalModalAction} from '@/store/actions/SetupStoreAction';

export default function DrawerNavigation() {
  const Drawer = createDrawerNavigator<DrawerStackParamList>();
  const {withdrawalModal}: any = useSelector(
    (state: RootState) => state.setupStore,
  );
  const dispatch = useDispatch();

  function toggleModal() {
    dispatch(ToggleWithdrawalModalAction());
  }
  return (
    <>
      <WithdrawalModal visible={withdrawalModal} closeModal={toggleModal} />
      <Drawer.Navigator
        drawerContent={props => <ProfileIcon {...props} />}
        screenOptions={{
          headerShown: false,
          drawerActiveTintColor: colors.mallBlue5,
          drawerInactiveTintColor: 'black',
          drawerLabelStyle: {
            fontFamily: 'Roboto-Bold',
            fontSize: 16,
          },
          headerRight: () => (
            <Image
              style={styles.notificationIcon}
              source={displayAsset('notificationIcon')}
            />
          ),
        }}
      >
        {drawerJson.map((drawer: drawer, item) => {
          const displayDrawer: any = displayNavigators(drawer.stack);
          return (
            <Drawer.Screen
              key={item}
              name={drawer.name}
              component={displayDrawer}
            />
          );
        })}
      </Drawer.Navigator>
    </>
  );
}

type drawer = {
  name: any;
  stack: keyof DrawerStackParamList | string;
};

const styles = StyleSheet.create({
  menu: {
    height: 20,
    width: 20,
    marginLeft: 20,
  },
  notificationIcon: {
    marginRight: 20,
    height: 20,
    width: 20,
  },
});
