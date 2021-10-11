import React from 'react';
import {View, Text} from 'react-native';
import {ListItem} from 'react-native-elements';
import {useQuery} from 'react-query';

import settings from '@/json/settings.json';
import useRequest from '@/hooks/useRequest';

interface ListItemViewProps {
  item: any;
}

function ListItemView({item}: ListItemViewProps) {
  return (
    <ListItem bottomDivider>
      <ListItem.Content>
        <ListItem.Title>{item.title}</ListItem.Title>
        <ListItem.Subtitle>{l.subtitle}</ListItem.Subtitle>
      </ListItem.Content>
    </ListItem>
  );
}

export default function SettingsScreen() {
  const {fetchStoreProfile} = useRequest();
  const {status, data} = useQuery('storeProfile', fetchStoreProfile);
  return (
    <View>
      {status === 'error' ? (
        <Text>error, unable to fetch store profile</Text>
      ) : status === 'loading' ? (
        <Text>Loading ...</Text>
      ) : (
        settings.map((item, index: number) => (
          <ListItemView item={item} data={data} key={index} />
        ))
      )}
    </View>
  );
}
