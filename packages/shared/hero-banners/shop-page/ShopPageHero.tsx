import React from 'react';

import { HeroBannerTemplate } from '../../ui';
import { ShopHeroTitle, ShopHeroBannerWrapper } from './style';
import { ShopHeroCtas } from './components/ShopHeroCtas';
import { ShopHeroButton } from './components/ShopHeroButton';

export const HeroBanner = ({
  height,
  imgUrl,
  shopName,
}: {
  height: number;
  imgUrl: string;
  shopName: string;
}): JSX.Element => {
  return (
    <ShopHeroBannerWrapper>
      <HeroBannerTemplate height={height} imgUrl={imgUrl}>
        <ShopHeroTitle>{shopName}</ShopHeroTitle>
        <ShopHeroButton />
      </HeroBannerTemplate>
      <ShopHeroCtas />
    </ShopHeroBannerWrapper>
  );
};
