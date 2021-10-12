import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {ListItem, Icon} from 'react-native-elements';

const ourContact = [
  {medium: 'Whatsapp', content: '07023415678', icon: 'whatsapp'},
  {medium: 'Twitter', content: '@cloudmallAfrica', icon: 'twitter'},
  {medium: 'Web', content: 'https:www.cloudmall.africa', icon: 'web'},
];

export default function HelpScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.textView}>
        <Text style={styles.text}>Experiencing any issue, Reach us via </Text>
      </View>
      <View style={styles.contactView}>
        {ourContact.map((contact, index) => (
          <ListItem bottomDivider key={index}>
            <ListItem.Content style={styles.content}>
              <ListItem.Title style={styles.icon}>
                <Icon type="material-community" name={contact.icon} />
              </ListItem.Title>
              <ListItem.Title style={styles.title}>
                {contact.medium}: {contact.content}
              </ListItem.Title>
            </ListItem.Content>
          </ListItem>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textView: {
    display: 'flex',
  },
  text: {
    fontFamily: 'Roboto-Medium',
    fontSize: 14,
    margin: 20,
  },
  contactView: {
    alignItems: 'flex-start',
  },
  content: {
    alignItems: 'flex-start',
  },
  icon: {
    marginLeft: 10,
    marginRight: 20,
  },
  title: {
    display: 'flex',
    alignItems: 'flex-start',
    fontFamily: 'Roboto-Medium',
    fontSize: 14,
  },
});
