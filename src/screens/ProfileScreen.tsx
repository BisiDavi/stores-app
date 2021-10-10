import React from 'react';
import {View, Text} from 'react-native';
import {ListItem, Image} from 'react-native-elements';
import {ScrollView} from 'react-native-gesture-handler';
import {Button} from 'react-native-elements';
import {useQueryClient} from 'react-query';

import profileJson from '@/json/profile.json';
import JollofRice from '@/assets/jollofRice.png';

import {styles} from '@/styles/ProfileScreen.style';

export default function ProfileScreen() {
  const queryClient = useQueryClient();

  const storeProfile = queryClient.fetchQuery('storeProducts');

  console.log('storeProfileData', storeProfile);

  return (
    <>
      <ScrollView style={styles.view}>
        <View style={styles.container}>
          <View style={styles.profileDetails}>
            <Image style={styles.profileImage} source={JollofRice} />
            <View>
              {/*<Text>{storeProfile?.name}</Text>*/}
              <Text>Store ID: 11</Text>
            </View>
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
