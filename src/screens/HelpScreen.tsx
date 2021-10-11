import React from 'react';
import {View, Text} from 'react-native';
import {ListItem} from 'react-native-elements';

const ourContact = [
  {medium: 'Whatsapp', content: '07023415678', icon: 'whatsapp'},
  {medium: 'Twitter', content: '@cloudmallAfrica', icon: 'twitter'},
  {medium: 'Web', content: 'https:www.cloudmall.africa', icon: 'web'},
];

export default function HelpScreen() {
  return (
    <View>
      <Text>Experiencing any issue? </Text>
      <Text>Reach us via: </Text>
      {ourContact.map((contact, index) => (
        <ListItem bottomDivider key={index}>
          <ListItem.Content>
            <ListItem.Title>{contact.icon}</ListItem.Title>
            <ListItem.Subtitle>
              {contact.medium}: {contact.content}
            </ListItem.Subtitle>
          </ListItem.Content>
        </ListItem>
      ))}
    </View>
  );
}
