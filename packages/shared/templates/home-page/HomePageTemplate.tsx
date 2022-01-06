import React, { ReactNode } from 'react';
import { HeroBanner } from '../../hero-banners/home-page';
import { ShopSearch } from '../../shop-search';

export const HomePageTemplate = (): JSX.Element => {
  return (
    <>
      <HeroBanner height={600} imgUrl="/img/banners/redbull-rampage.png" />
      <ShopSearch />
    </>
  );
};
