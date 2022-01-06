import styled from 'styled-components';

export const HeroBannerContainer = styled.div<{ height: number, backgroundUrl: string}>`
  width: 100%;
  height: ${({height}) => `${height}px`};
  background-image: ${({backgroundUrl}) => `url(${backgroundUrl})`};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(3, min-content);
  grid-gap: 30px;
  justify-items: center;
  align-items: center;
  position: relative;
`;
