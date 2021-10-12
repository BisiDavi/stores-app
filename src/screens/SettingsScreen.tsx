import React from 'react';
import {Text, View, ScrollView, StyleSheet} from 'react-native';
import {Icon} from 'react-native-elements';
import {ListItem} from 'react-native-elements';
import {useQuery} from 'react-query';

import settings from '@/json/settings.json';
import useRequest from '@/hooks/useRequest';
import {colors} from '@/utils';

interface ListItemViewProps {
  item: any;
  data: any;
}

function ListItemView({item, data}: ListItemViewProps) {
  return (
    <ListItem bottomDivider>
      <ListItem.Content style={styles.listContent}>
        <View style={styles.contentView}>
          <Text style={styles.title}>{item.title}</Text>
          <View style={styles.settings}>
            <Text>{data[item.name]}</Text>
            <Icon type="antdesign" name="edit" color={colors.mallBlue5} />
          </View>
        </View>
      </ListItem.Content>
    </ListItem>
  );
}

export default function SettingsScreen() {
  const {fetchStoreProfile} = useRequest();
  const {status, data} = useQuery('storeProfile', fetchStoreProfile);

  return (
    <ScrollView>
      {status === 'error' ? (
        <Text>error, unable to fetch store profile</Text>
      ) : status === 'loading' ? (
        <Text>Loading ...</Text>
      ) : (
        settings.map((item, index: number) => (
          <ListItemView
            item={item}
            data={{
              storeName: data.name,
              ownerName: data.contact.name,
              ownerEmail: data.contact.data,
              ownerPhone: data.contact.phone,
              storeEmail: data.email,
              slogan: data.slogan,
              storeType: data.storeType,
              address: data.address[0],
              settlementPlan: data.bank.settlementPlan,
            }}
            key={index}
          />
        ))
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  listContent: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  contentView: {
    display: 'flex',
    flexDirection: 'column',
  },
  title: {
    fontFamily: 'Roboto-Medium',
    fontSize: 16,
  },
  settings: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
