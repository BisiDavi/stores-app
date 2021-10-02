import React from 'react';
import ContentLoader, {Rect} from 'react-content-loader/native';
import {ListItem} from 'react-native-elements';

function Loader(props: JSX.IntrinsicAttributes) {
  return (
    <ContentLoader
      speed={2}
      width={476}
      height={124}
      viewBox="0 0 476 124"
      backgroundColor="#dccbcb"
      foregroundColor="#decece"
      {...props}
    >
      <Rect x="200" y="10" rx="3" ry="3" width="15" height="5" />
      <Rect x="10" y="10" rx="3" ry="3" width="75" height="5" />
      <Rect x="120" y="10" rx="3" ry="3" width="40" height="5" />
    </ContentLoader>
  );
}

export default function ProductLoader() {
  const productArray = new Array(6).fill(1);
  return (
    <>
      {productArray.map(product => (
        <ListItem key={product}>
          <ListItem.Content>
            <Loader />
          </ListItem.Content>
        </ListItem>
      ))}
    </>
  );
}
