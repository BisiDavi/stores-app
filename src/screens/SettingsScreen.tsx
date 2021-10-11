import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
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
      <ListItem.Content>
        <ListItem.Title>
          {item.title}: {data[item.name]}{' '}
        </ListItem.Title>
        <ListItem>
          <Icon type="antdesign" name="edit" color={colors.mallBlue5} />
        </ListItem>
      </ListItem.Content>
    </ListItem>
  );
}

export default function SettingsScreen() {
  const {fetchStoreProfile} = useRequest();
  const {status, data} = useQuery('storeProfile', fetchStoreProfile);
  const [storeData, setStoreData] = useState({});

  useEffect(() => {
    if (status === 'success') {
      setStoreData({
        ...storeData,
        storeName: data.name,
        ownerName: data.contact.name,
        ownerEmail: data.contact.data,
        ownerPhone: data.contact.phone,
        storeEmail: data.email,
        slogan: data.slogan,
        storeType: data.storeType,
        address: data.address[0],
        settlementPlan: data.bank.settlementPlan,
      });
    }
  }, [data, storeData, status]);

  return (
    <View>
      {status === 'error' ? (
        <Text>error, unable to fetch store profile</Text>
      ) : status === 'loading' ? (
        <Text>Loading ...</Text>
      ) : (
        settings.map((item, index: number) => (
          <ListItemView item={item} data={storeData} key={index} />
        ))
      )}
    </View>
  );
}
