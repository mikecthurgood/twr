import React from 'react';
import {
  CtaText,
  ShopHeroCtaContainer,
  HeroCtaItem,
  HighlightedCta,
  ReviewCtaContainer,
  ReviewStarsWrapper,
} from './style';

import { RatingStars } from '../../../../review-stars';

export const ShopHeroCtas = (): JSX.Element => {
  return (
    <ShopHeroCtaContainer>
      <HeroCtaItem />
      <HeroCtaItem>
        <ReviewCtaContainer>
          <CtaText>Reviews</CtaText>
          <ReviewStarsWrapper>
            <RatingStars />
          </ReviewStarsWrapper>
        </ReviewCtaContainer>
      </HeroCtaItem>
      <HeroCtaItem>
        <CtaText>View on map</CtaText>
      </HeroCtaItem>
      <HeroCtaItem>
        <CtaText>location & details</CtaText>
      </HeroCtaItem>
      <HeroCtaItem>
        <CtaText>
          service prices from <HighlightedCta>£25</HighlightedCta>
        </CtaText>
      </HeroCtaItem>
    </ShopHeroCtaContainer>
  );
};
