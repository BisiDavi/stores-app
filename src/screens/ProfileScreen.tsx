import React from 'react';
import {View, Text} from 'react-native';
import {ListItem, Image} from 'react-native-elements';
import {ScrollView} from 'react-native';
import {Button} from 'react-native-elements';
import {useQuery} from 'react-query';

import profileJson from '@/json/profile.json';
import JollofRice from '@/assets/jollofRice.png';
import {styles} from '@/styles/ProfileScreen.style';
import useRequest from '@/hooks/useRequest';

export default function ProfileScreen() {
  const {fetchStoreProfile} = useRequest();
  const {data, status} = useQuery('storeProfile', fetchStoreProfile);

  console.log('storeProfileData', data);

  return (
    <>
      <ScrollView style={styles.view}>
        <View style={styles.container}>
          <View style={styles.profileDetails}>
            <Image style={styles.profileImage} source={JollofRice} />
            <View>{/*<Text>{storeProfile?.name}</Text>*/}</View>
            <Button
              buttonStyle={styles.reviewBtn}
              titleStyle={styles.btnTitle}
              title="In review"
            />
          </View>
          <View>
            {profileJson.map((profile, index) => (
              <ListItem key={index} bottomDivider>
                <ListItem.Content>
                  <Text style={styles.profileText}>{profile.title}</Text>
                </ListItem.Content>
              </ListItem>
            ))}
          </View>
        </View>
      </ScrollView>
    </>
  );
}
