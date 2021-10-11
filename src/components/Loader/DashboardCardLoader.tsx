import React from 'react';
import ContentLoader, {Rect} from 'react-content-loader/native';

export default function DashboardCardLoader(
  props: JSX.IntrinsicAttributes,
): JSX.Element {
  return (
    <ContentLoader
      speed={2}
      width={476}
      height={74}
      viewBox="0 0 476 124"
      backgroundColor="#bcb3b3"
      foregroundColor="#decece"
      {...props}
    >
      <Rect x="10" y="3" rx="3" ry="3" width="116" height="74" />
      <Rect x="177" y="3" rx="3" ry="3" width="116" height="74" />
    </ContentLoader>
  );
}
