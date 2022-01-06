import React from 'react';
import {
  useBikeShopSelector,
  selectBikeShopById,
} from '../../stores/bike-shops';
import { HeroBanner } from '../../hero-banners/shop-page';
import { ImageCarousel } from '../../ui';
import { ShopDetails } from '../../shop-details';
import {
  ShopImageCarouselContainer,
  ShopDetailsSection,
  ShopDesc,
  ShopDetailsMainDesc,
  ShopDetailsSecondaryDesc,
  MapAndHoursSection,
} from './style';
// import { cx } from '@linaria/core';
import { Map } from '../../map';
export interface ShopPageTemplateProps {
  shopId: string;
  mapsApiKey: string;
}

export const ShopPageTemplate = ({
  shopId,
  mapsApiKey,
}: ShopPageTemplateProps): JSX.Element => {
  const shopDetails = useBikeShopSelector(state =>
    selectBikeShopById(state, shopId),
  );

  const carouselImgUrls = [
    '/img/shop-carousel/chains.jpg',
    '/img/shop-carousel/lubes.jpg',
    '/img/shop-carousel/mechanic.jpg',
    '/img/shop-carousel/saddles.jpg',
    '/img/shop-carousel/stems.jpg',
  ];
  return (
    <>
      <HeroBanner
        height={405}
        imgUrl="/img/banners/singlespeed.png"
        shopName={shopDetails?.name || ''}
      />
      <ShopDetailsSection>
        <ShopDesc>
          <ShopDetailsMainDesc>
            The Fox Downhill/ Freeride gear is designed to dominate the world of
            gravity. With these purpose built kits, the Fox Demo s/s Jersey is
            bike specific designed, new from the dirt up. With these
          </ShopDetailsMainDesc>
          <ShopDetailsSecondaryDesc>
            The Fox Downhill/ Freeride gear is designed to dominate the world of
            gravity. With these purpose built kits, the Fox Demo s/s Jersey is
            bike specific designed, new from the dirt up. With these purpose
            built kits, the Fox Demo s/s Jersey is bike. The Fox Downhill/
            Freeride gear is designed to dominate the world of these purpose
            built kits, the Fox{' '}
          </ShopDetailsSecondaryDesc>
        </ShopDesc>
        <ShopImageCarouselContainer>
          <ImageCarousel imgUrls={carouselImgUrls} height={250} width={375} />
        </ShopImageCarouselContainer>
      </ShopDetailsSection>
      <MapAndHoursSection>
        <ShopDetails shopId={shopId} />
        <Map
          isMarkerShown
          googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${mapsApiKey}&libraries=geometry,drawing,places&`}
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `540px` }} />}
          mapElement={<div style={{ height: `100%` }} />}
          address={shopDetails?.address || ''}
          mapsApiKey={mapsApiKey}
          shopName={shopDetails?.name || ''}
        />
      </MapAndHoursSection>
    </>
  );
};
