import React from 'react';
import { Button, ButtonColour, Arrow, HeroBannerTemplate } from '../../ui';
import {
  ButtonText,
  HeroButtons,
  HeroText,
  HeroTitle,
  HeroBannerWrapper,
} from './style';
import { HeroCtas } from './components/HeroCtas';

export const HeroBanner = ({
  height,
  imgUrl,
}: {
  height: number;
  imgUrl: string;
}): JSX.Element => {
  return (
    <HeroBannerWrapper>
      <HeroBannerTemplate height={height} imgUrl={imgUrl}>
        <HeroTitle>your local bike shop, online</HeroTitle>
        <HeroText>
          Sed ut velit in nulla placerat congue id in tellus. Etiam convallis
          dui vitae tincidunt vestibulum. Pellentesque tempor magna orci, quis
          convallis massa feugiat nec. Etiam et ultricies libero. Ut ornare
          vulputate ex eu consectetur. Sed eget vehicula mi, vel gravida sem.
          Sed nisl tellus, egestas id tempor at dapi.
        </HeroText>
        <HeroButtons>
          <Button className={'missionButtonStyle'}>
            <>
              <ButtonText>our mission</ButtonText>
              <Arrow right size={3} x={50} y={-1} borderWidth={2} />
            </>
          </Button>
          <Button
            className={'registerButtonStyle'}
            buttonColour={ButtonColour.CORAL}
          >
            <>
              <ButtonText>register</ButtonText>
              <Arrow
                right
                size={3}
                x={45}
                y={-1}
                colour="var(--twr-primary-white)"
                borderWidth={2}
              />
            </>
          </Button>
        </HeroButtons>
      </HeroBannerTemplate>
      <HeroCtas />
    </HeroBannerWrapper>
  );
};
