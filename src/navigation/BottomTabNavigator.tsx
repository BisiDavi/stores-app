import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {
  TabOneNavigator,
  TabTwoNavigator,
  TabThreeNavigator,
} from './TabNavigator';
import colors from '@/utils/colors';
import {BottomTabParamList} from '@/customTypes';
import DashboardSvg from '@/assets/DashboardSvg';
import OrderSvg from '@/assets/OrderSvg';
import ProfileSvg from '@/assets/ProfileSvg';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  return (
    <BottomTab.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Orders"
    >
      <BottomTab.Screen
        name="Dashboard"
        options={{
          tabBarActiveTintColor: colors.mallBlue5,
          tabBarInactiveTintColor: colors.neutral5,
          tabBarIcon: ({color}: any) => <DashboardSvg color={color} />,
        }}
        component={TabTwoNavigator}
      />

      <BottomTab.Screen
        name="Orders"
        options={{
          tabBarActiveTintColor: colors.mallBlue5,
          tabBarInactiveTintColor: colors.neutral5,
          tabBarIcon: ({color}: any) => <OrderSvg color={color} />,
        }}
        component={TabOneNavigator}
      />

      <BottomTab.Screen
        name="Payment"
        options={{
          tabBarActiveTintColor: colors.mallBlue5,
          tabBarInactiveTintColor: colors.neutral5,
          tabBarIcon: ({color}: any) => <ProfileSvg color={color} />,
        }}
        component={TabThreeNavigator}
      />
    </BottomTab.Navigator>
  );
}
