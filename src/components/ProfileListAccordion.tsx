import React, {useState} from 'react';
import {ListItem} from 'react-native-elements';

const plans = {
  Settlement: [
    {key: 'weekly', label: 'Settlement Plan'},
    {key: 'bankName', label: 'Bank Name'},
    {key: 'accountName', label: 'Account Name'},
    {key: 'accountNumber', label: 'Account Number'},
  ],
  ownerInformation: [
    {key: 'name', label: 'Name: '},
    {key: 'email', label: 'Email: '},
    {key: 'phone', label: 'Phone: '},
  ],
  contactUs: [
    {key: 'facebook', label: 'Facebook: '},
    {key: 'twitter', label: 'Twitter: '},
    {key: 'whatsapp', label: 'Whatsapp: '},
  ],
  about: [
    {key: 'listedProduct', label: 'Number of Listed Product '},
    {key: 'storeType', label: 'Store Type'},
    {key: 'openDays', label: 'Opening Days'},
    {key: 'weekdays', label: 'Week Days'},
    {key: 'saturday', label: 'Saturday'},
    {key: 'sunday', label: 'Sunday'},
  ],
};

const ProfileListAccordion = ({lists}: any) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <ListItem.Accordion
      content={
        <>
          <ListItem.Content>
            <ListItem.Title>List Accordion</ListItem.Title>
          </ListItem.Content>
        </>
      }
      isExpanded={expanded}
      onPress={() => {
        setExpanded(!expanded);
      }}
    >
      {lists.map((list: any, index: number) => (
        <ListItem key={index} bottomDivider>
          <ListItem.Content>
            <ListItem.Title>{list.name}</ListItem.Title>
            <ListItem.Subtitle>{list.subtitle}</ListItem.Subtitle>
          </ListItem.Content>
          <ListItem.Chevron />
        </ListItem>
      ))}
    </ListItem.Accordion>
  );
};

export default ProfileListAccordion;
