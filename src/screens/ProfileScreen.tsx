import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import {ListItem, Image} from 'react-native-elements';
import {ScrollView} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Button} from 'react-native-elements';

import profileJson from '@/json/profile.json';
import JollofRice from '@/assets/jollofRice.png';
import {getStoreDetailsRequest} from '@/network/getRequest';
import {showToast} from '@/utils';
import {styles} from '@/styles/ProfileScreen.style';

export default function ProfileScreen() {
  const [storeProfile, setStorProfile] = useState<any>({});

  useEffect(() => {
    let once = true;
    getStoreDetailsRequest()
      .then(response => {
        if (once) {
          setStorProfile(response.data.data);
        }
      })
      .catch(error => {
        if (error.request) {
          showToast('poor network, unable to fetch your profile');
        } else if (error.response) {
          showToast(error.response.data.message);
        }
      });
    return () => {
      once = false;
    };
  }, []);

  return (
    <ScrollView>
      <SafeAreaView style={styles.container}>
        <View style={styles.profileDetails}>
          <Image style={styles.profileImage} source={JollofRice} />
          <View>
            <Text>{storeProfile?.name}</Text>
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
      </SafeAreaView>
    </ScrollView>
  );
}
