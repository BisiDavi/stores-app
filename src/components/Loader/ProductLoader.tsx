import React from 'react';
import ContentLoader, {Rect} from 'react-content-loader/native';

function Loader(props: JSX.IntrinsicAttributes) {
  return (
    <ContentLoader
      speed={2}
      width="500px"
      height="50px"
      viewBox="0 0 500 50"
      backgroundColor="#443c3c"
      foregroundColor="#decece"
      {...props}
    >
      <Rect x="10px" y="10" rx="3" ry="3" width="150px" height="20px" />
      <Rect x="180px" y="10" rx="3" ry="3" width="30px" height="20px" />
      <Rect x="250px" y="10" rx="3" ry="3" width="50px" height="20px" />
    </ContentLoader>
  );
}

export default function ProductLoader() {
  const productArray = new Array(6).fill(1);
  return (
    <>
      {productArray.map((_, index) => (
        <Loader key={index} />
      ))}
    </>
  );
}
