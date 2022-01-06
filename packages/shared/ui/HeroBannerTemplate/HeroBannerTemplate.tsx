import React from 'react';
import { HeroBannerContainer } from './style';

export const HeroBannerTemplate = ({
  height,
  imgUrl,
  children,
}: {
  height: number;
  imgUrl: string;
  children: React.ReactNode;
}): JSX.Element => {
  return (
    <HeroBannerContainer height={height} backgroundUrl={imgUrl}>
      {children}
    </HeroBannerContainer>
  );
};
