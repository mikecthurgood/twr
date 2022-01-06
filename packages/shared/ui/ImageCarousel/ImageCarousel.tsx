import React, { useCallback, useState } from 'react';

import {
  ImageCarouselWrapper,
  ImageCarouselContainer,
  ImageCarouselInnerContainer,
  CarouselItem,
  LeftTransparentArea,
  RightTransparentArea,
  CarouselIconContainer,
  CarouselIcon,
} from './style';

type ImageCarouselProps = {
  x?: number;
  y?: number;
  imgUrls: string[];
  className?: string;
  height: number;
  width: number;
};

export const ImageCarousel = ({
  imgUrls,
  className,
  x,
  y,
  height,
  width,
}: ImageCarouselProps): JSX.Element => {
  const [activeImage, setActiveImage] = useState(0);
  const changeCarouselImage = useCallback(
    (direction: -1 | 1) => {
      if (direction === -1) {
        if (activeImage === 0) return;
        else return setActiveImage(prev => prev - 1);
      } else {
        if (activeImage === imgUrls.length - 1) return;
        else return setActiveImage(prev => prev + 1);
      }
    },
    [activeImage, imgUrls.length],
  );
  return (
    <ImageCarouselWrapper>
      <ImageCarouselContainer
        className={className ? className : ''}
        x={x}
        y={y}
        height={height}
        width={width}
      >
        <LeftTransparentArea onClick={() => changeCarouselImage(-1)} />
        <RightTransparentArea onClick={() => changeCarouselImage(1)} />
        <ImageCarouselInnerContainer activeImage={activeImage}>
          {imgUrls.map((imgUrl, index) => (
            <CarouselItem key={'shop-carousel-icon-' + index} imgUrl={imgUrl} />
          ))}
        </ImageCarouselInnerContainer>
      </ImageCarouselContainer>
      <CarouselIconContainer
        className="carousel-icons"
        numImages={imgUrls.length}
      >
        {imgUrls.map((_, index) => (
          <CarouselIcon
            key={'shop-carousel-icon-' + index}
            active={index === activeImage}
            onClick={() => setActiveImage(index)}
          />
        ))}
      </CarouselIconContainer>
    </ImageCarouselWrapper>
  );
};
