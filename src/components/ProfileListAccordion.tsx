import React, {useState} from 'react';
import {ListItem} from 'react-native-elements';

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
