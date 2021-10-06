import React from 'react';
import ContentLoader, {Rect} from 'react-content-loader/native';
import {StyleSheet, View} from 'react-native';
import {ListItem} from 'react-native-elements';

function Loader(props: JSX.IntrinsicAttributes) {
  return (
    <ContentLoader
      speed={2}
      width="500px"
      height="50px"
      viewBox="0 0 500 40"
      backgroundColor="#443c3c"
      foregroundColor="#decece"
      {...props}
    >
      <Rect x="40%" y="10" rx="3" ry="3" width="20%" height="20%" />
      <Rect x="5%" y="10" rx="3" ry="3" width="30%" height="20%" />
      <Rect x="25%" y="10" rx="3" ry="3" width="30%" height="20%" />
    </ContentLoader>
  );
}

export default function ProductLoader() {
  const productArray = new Array(6).fill(1);
  return (
    <View style={styles.view}>
      {productArray.map((_, index) => (
        <ListItem key={index}>
          <ListItem.Content>
            <Loader />
          </ListItem.Content>
        </ListItem>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    backgroundColor: 'red',
    height: 400,
  },
});
