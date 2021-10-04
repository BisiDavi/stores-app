/* eslint-disable react-hooks/exhaustive-deps */
import {StackNavigationProp} from '@react-navigation/stack';
import React, {useEffect} from 'react';
import {
  View,
  KeyboardAvoidingView,
  ScrollView,
  Text,
  TouchableOpacity,
  Platform,
} from 'react-native';
import {useSelector} from 'react-redux';

import DashboardCard from '@/components/DashboardCard';
import dashboardContent from '@/json/dashboard.json';
import {BottomTabParamList} from '@/customTypes';
import DashboardChart from '@/components/DashboardChart';
import SelectField from '@/components/SelectField';
import selectContent from '@/json/dasboard-select.json';
import {RootState} from '@/store/RootReducer';
import {styles} from '@/styles/DashboardScreen.style';

export type DashboardScreenNavProps = StackNavigationProp<
  BottomTabParamList,
  'Dashboard'
>;

type Props = {
  navigation: DashboardScreenNavProps;
};

type dashboardContentType = {
  category: string;
  content: {title: string; amount: string; link?: string | undefined}[];
};

export default function DashboardScreen({navigation}: Props) {
  const StatisticsScreenRoute: any = 'StatisticsScreen';

  const {storeProfile}: any = useSelector(
    (state: RootState) => state.storeProfile,
  );

  useEffect(() => {
    dashboardContent.card[0].content[0].amount = `${storeProfile.wallet} Naira`;
    dashboardContent.card[0].content[1].amount = `${storeProfile.wallet} Naira`;
  }, []);

  function navigateToStatisticsScreen() {
    return navigation.navigate(StatisticsScreenRoute);
  }
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      enabled={true}
      style={styles.view}
    >
      <ScrollView style={styles.view}>
        <View style={styles.container}>
          <SelectField style={styles.selectField} content={selectContent} />
          <View style={styles.dashboardCards}>
            {dashboardContent.card.map((item: dashboardContentType, index) => (
              <View style={styles.category} key={`${item.category}-${index}`}>
                <Text style={styles.categoryText}>{item.category}</Text>
                <View style={styles.row}>
                  {item.content.map((content, contentIndex) => (
                    <DashboardCard
                      key={contentIndex}
                      navigation={navigation}
                      content={content}
                    />
                  ))}
                </View>
              </View>
            ))}
          </View>
          <View>
            <Text style={styles.categoryText}>Statistics</Text>
            <Text style={styles.chartTitle}>
              Performance: Number of orders vs days.
            </Text>
            <TouchableOpacity onPress={navigateToStatisticsScreen}>
              <DashboardChart />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
