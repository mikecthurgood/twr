import React from 'react';
import { Button, ButtonColour, Arrow } from '../../../../ui';
import {
  ShopHeroButtonContainer,
  ButtonText,
  ShopIconContainer,
  ShopIcon,
} from './style';

export const ShopHeroButton = (): JSX.Element => {
  return (
    <ShopHeroButtonContainer>
      <ShopIconContainer>
        <ShopIcon />
      </ShopIconContainer>
      <Button
        className="bookServiceButtonStyle"
        buttonColour={ButtonColour.CORAL}
      >
        <>
          <ButtonText>Book a service</ButtonText>
          <Arrow
            right
            size={3}
            x={70}
            y={-1}
            borderWidth={2}
            colour="var(--twr-primary-white)"
          />
        </>
      </Button>
    </ShopHeroButtonContainer>
  );
};
