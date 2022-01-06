import React from 'react';
import { useBikeShopSelector, selectBikeShopById } from '../stores/bike-shops';
import { ImageCarousel } from '../ui';
import {
  ShopDetailsContainer,
  ShopDetailsImageCarouselContainer,
  ShopDetailsTeamDetails,
  ShopDetailsOpeningHoursContainer,
  ShopDetailsOpeningHoursTitle,
  ShopDetailsOpeningHoursRow,
  ShopDetailsOpeningHoursDay,
  ShopDetailsOpeningHoursTimes,
  ShopDetailsTitle,
  ShopDetailsInnerContainer,
  ShopDetailsStaffMemberTitle,
  ShopDetailsStaffMemberBlurb,
} from './style';

export const ShopDetails = ({ shopId }: { shopId: string }): JSX.Element => {
  const carouselUrls = ['/img/placeholders/shopOwner.png'];
  const shopDetails = useBikeShopSelector(state =>
    selectBikeShopById(state, shopId),
  );
  return (
    <ShopDetailsContainer>
      <ShopDetailsImageCarouselContainer>
        <ImageCarousel imgUrls={carouselUrls} height={180} width={320} />
      </ShopDetailsImageCarouselContainer>
      <ShopDetailsInnerContainer>
        <ShopDetailsTitle>Meet The team</ShopDetailsTitle>
        <ShopDetailsTeamDetails>
          <ShopDetailsStaffMemberTitle>
            {`${shopDetails?.owner}, ` || ''}Owner
          </ShopDetailsStaffMemberTitle>
          <ShopDetailsStaffMemberBlurb>
            {shopDetails?.owner_blurb}
          </ShopDetailsStaffMemberBlurb>
        </ShopDetailsTeamDetails>
        <ShopDetailsOpeningHoursContainer>
          <ShopDetailsOpeningHoursTitle>
            Opening hours
          </ShopDetailsOpeningHoursTitle>
          <ShopDetailsOpeningHoursRow>
            <ShopDetailsOpeningHoursDay>mon</ShopDetailsOpeningHoursDay>
            <ShopDetailsOpeningHoursTimes>
              {`${shopDetails?.monday_opening} - ${shopDetails?.monday_closing}`}{' '}
            </ShopDetailsOpeningHoursTimes>
          </ShopDetailsOpeningHoursRow>
          <ShopDetailsOpeningHoursRow>
            <ShopDetailsOpeningHoursDay>tues</ShopDetailsOpeningHoursDay>
            <ShopDetailsOpeningHoursTimes>
              {`${shopDetails?.tuesday_opening} - ${shopDetails?.tuesday_closing}`}{' '}
            </ShopDetailsOpeningHoursTimes>
          </ShopDetailsOpeningHoursRow>
          <ShopDetailsOpeningHoursRow>
            <ShopDetailsOpeningHoursDay>wed</ShopDetailsOpeningHoursDay>
            <ShopDetailsOpeningHoursTimes>
              {`${shopDetails?.wednesday_opening} - ${shopDetails?.wednesday_closing}`}{' '}
            </ShopDetailsOpeningHoursTimes>
          </ShopDetailsOpeningHoursRow>
          <ShopDetailsOpeningHoursRow>
            <ShopDetailsOpeningHoursDay>thurs</ShopDetailsOpeningHoursDay>
            <ShopDetailsOpeningHoursTimes>
              {`${shopDetails?.thursday_opening} - ${shopDetails?.thursday_closing}`}{' '}
            </ShopDetailsOpeningHoursTimes>
          </ShopDetailsOpeningHoursRow>
          <ShopDetailsOpeningHoursRow>
            <ShopDetailsOpeningHoursDay>fri</ShopDetailsOpeningHoursDay>
            <ShopDetailsOpeningHoursTimes>
              {`${shopDetails?.friday_opening} - ${shopDetails?.friday_closing}`}{' '}
            </ShopDetailsOpeningHoursTimes>
          </ShopDetailsOpeningHoursRow>
          <ShopDetailsOpeningHoursRow>
            <ShopDetailsOpeningHoursDay>sat</ShopDetailsOpeningHoursDay>
            <ShopDetailsOpeningHoursTimes>
              {`${shopDetails?.saturday_opening} - ${shopDetails?.saturday_closing}`}{' '}
            </ShopDetailsOpeningHoursTimes>
          </ShopDetailsOpeningHoursRow>
          <ShopDetailsOpeningHoursRow>
            <ShopDetailsOpeningHoursDay>sun</ShopDetailsOpeningHoursDay>
            <ShopDetailsOpeningHoursTimes>
              {`${shopDetails?.sunday_opening} - ${shopDetails?.sunday_closing}`}{' '}
            </ShopDetailsOpeningHoursTimes>
          </ShopDetailsOpeningHoursRow>
        </ShopDetailsOpeningHoursContainer>
      </ShopDetailsInnerContainer>
    </ShopDetailsContainer>
  );
};
