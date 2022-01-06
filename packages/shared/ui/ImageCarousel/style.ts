import styled from 'styled-components';

const calculatePosition = (coord?: number | string) =>
  typeof coord !== 'undefined' ? `${coord}px` : '0px';

export const ImageCarouselWrapper = styled.div`
`
export const ImageCarouselContainer = styled.div<{
  x?: number;
  y?: number;
  height: number,
  width: number
}>`
  align-items: center;
  display: flex;
  height: ${({height}) => `${height}px`};
  width: ${({width}) => `${width}px`};
  justify-content: center;
  transform: translate3d(
    ${props => calculatePosition(props.x)},
    ${props => calculatePosition(props.y)},
    0
  );
  overflow: hidden;
  position: relative;
`

export const ImageCarouselInnerContainer = styled.div<{activeImage: number}>`
  white-space: nowrap;
  height: 100%;
  width: 100%;
  transform: ${({activeImage}) => `translateX(-${activeImage * 100}%)`};
  transition: transform 0.3s;
`

export const CarouselItem = styled.div<{imgUrl: string}>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  background-image: ${({imgUrl}) => `url(${imgUrl})`};
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  z-index: 2
`

export const CarouselTransparentArea = styled.div`
  width: 50%;
  height: 100%;
  position: absolute;
  z-index: 3
`
export const LeftTransparentArea = styled(CarouselTransparentArea)`
  left: 0;
`
export const RightTransparentArea = styled(CarouselTransparentArea)`
  right: 0;
`

export const CarouselIconContainer = styled.div<{numImages: number}>`
  display: grid;
  grid-template-columns: ${({numImages}) =>  `repeat(${numImages}, min-content)`};
  grid-gap: 12px;
  margin: 20px 0;
`

export const CarouselIcon = styled.span<{active: boolean}>`
  width: 8px;
  height: 8px;
  border-radius: 50px;
  background-color: ${({active}) => active ? 'var(--twr-primary-coral)' : 'var(--twr-primary-gray)'};
  cursor: pointer;
`