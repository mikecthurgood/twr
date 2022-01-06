import React from 'react';
import {
  ReviewStarsContainer,
  // ReviewStarsPercentage,
  ReviewStars,
} from './style';

export const RatingStars = (): JSX.Element => {
  return (
    <ReviewStarsContainer>
      <ReviewStars />
      {/* <ReviewStarsPercentage /> */}
    </ReviewStarsContainer>
  );
};
