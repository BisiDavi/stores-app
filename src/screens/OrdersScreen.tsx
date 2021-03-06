import React, {useEffect, useState} from 'react';
import {StackNavigationProp} from '@react-navigation/stack';
import {SafeAreaView, View} from 'react-native';
import {Tab, TabView} from 'react-native-elements';
import {useDispatch, useSelector} from 'react-redux';

import NewOrdersTab from '@/components/Tabs/NewOrdersTab';
import CompletedOrdersTab from '@/components/Tabs/CompletedOrdersTab';
import {RootState} from '@/store/RootReducer';
import WelcomeModal from '@/components/Modal/WelcomeModal';
import {CloseWelcomeModalAction} from '@/store/actions/SetupStoreAction';
import {colors} from '@/utils/.';
import {DrawerStackParamList} from '@/customTypes/.';
import {styles} from '@/styles/OrdersScreen.style';

type OrdersScreenNavigationProps = StackNavigationProp<
  DrawerStackParamList,
  'OrdersScreen'
>;

type Props = {
  navigation: OrdersScreenNavigationProps;
};

export default function OrdersScreen({navigation}: Props) {
  const [index, setIndex] = useState(0);
  const [welcomeModal, setWelcomeModal] = useState(false);
  const dispatch = useDispatch();

  const {completed, isWelcomeModalShown, authMethod} = useSelector(
    (state: RootState) => state.setupStore,
  );

  function closeModal() {
    return setWelcomeModal(false);
  }

  useEffect(() => {
    let renderOnce = true;
    completed &&
      !isWelcomeModalShown &&
      authMethod === 'SIGNIN' &&
      renderOnce &&
      setWelcomeModal(true);
    dispatch(CloseWelcomeModalAction());
    return () => {
      renderOnce = false;
    };
  }, [authMethod, completed, dispatch, isWelcomeModalShown]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        {welcomeModal && (
          <WelcomeModal visible={welcomeModal} closeModal={closeModal} />
        )}
        <>
          <Tab
            indicatorStyle={{
              backgroundColor: colors.mallBlue5,
            }}
            value={index}
            onChange={setIndex}
          >
            <Tab.Item
              titleStyle={styles.tabItem}
              style={styles.tab}
              title="New Orders"
            />
            <Tab.Item titleStyle={styles.tabItem} title="Completed Orders" />
          </Tab>
          <TabView value={index} onChange={setIndex}>
            <TabView.Item style={styles.TabOneView}>
              <NewOrdersTab navigation={navigation} />
            </TabView.Item>
            <TabView.Item style={styles.TabTwoView}>
              <CompletedOrdersTab navigation={navigation} />
            </TabView.Item>
          </TabView>
        </>
      </View>
    </SafeAreaView>
  );
}
