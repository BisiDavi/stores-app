import React from 'react';
import {View, Text} from 'react-native';
import {ListItem, Image} from 'react-native-elements';
import {ScrollView} from 'react-native';
import {Button} from 'react-native-elements';

import JollofRice from '@/assets/jollofRice.png';
import {styles} from '@/styles/ProfileScreen.style';
import useStoreData from '@/hooks/useStoreData';

export default function ProfileScreen() {
  const {storeName} = useStoreData();

  const pageInformation = [
    {title: `About ${storeName}`, name: 'about'},
    {title: "Owner's Information", name: 'ownerInformation'},
    {title: 'Settlement', name: 'settlement'},
  ];

  return (
    <>
      <ScrollView style={styles.view}>
        <View style={styles.container}>
          <View style={styles.profileDetails}>
            <Image style={styles.profileImage} source={JollofRice} />
            <Button
              buttonStyle={styles.reviewBtn}
              titleStyle={styles.btnTitle}
              title="In review"
            />
          </View>
          <View>
            {pageInformation.map((profile, index) => (
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
