import React from 'react';
import {
  CtaText,
  HeroCtaContainer,
  HeroCtaItem,
  HighlightedCta,
} from './style';

export const HeroCtas = (): JSX.Element => {
  return (
    <HeroCtaContainer>
      <HeroCtaItem>
        <CtaText>
          Rate and<HighlightedCta> review </HighlightedCta>bike shops
        </CtaText>
      </HeroCtaItem>
      <HeroCtaItem>
        <CtaText>
          <HighlightedCta>book </HighlightedCta>your next service
        </CtaText>
      </HeroCtaItem>
      <HeroCtaItem>
        <CtaText>
          find the<HighlightedCta> best </HighlightedCta>uk independents
        </CtaText>
      </HeroCtaItem>
    </HeroCtaContainer>
  );
};
