import styled from 'styled-components';

export const HeroBannerWrapper = styled.div`
  width: 100%;
  margin-top: 150px;
  * {
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
`
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
`;

export const HeroTitle = styled.div`
  max-width: 663px;
  color: #ffffff;
  font-family: var(--twr-font-heading);
  font-size: 85px;
  font-weight: 400;
  font-style: normal;
  letter-spacing: normal;
  line-height: 80px;
  text-align: center;
  text-transform: uppercase;
  font-style: normal;
  letter-spacing: normal;
  line-height: normal;
  text-align: center;
  margin-top: 80px;
`

export const HeroText = styled.div`
  width: 707px;
  height: 102px;
  color: #ffffff;
  font-family: var(--twr-font-family);
  font-size: 19px;
  font-weight: 400;
  font-style: normal;
  letter-spacing: normal;
  line-height: 28px;
  text-align: justifyCenter;
  font-style: normal;
  letter-spacing: normal;
  line-height: normal;
`

export const HeroButtons = styled.div`
  display: grid;
  grid-template-columns: min-content min-content;
  grid-gap: 20px;

  .registerButtonStyle {
    width: 127px;
    height: 42px;
    padding: 0;
  }

  .missionButtonStyle {
    width: 137px;
    height: 42px;
    padding: 0;
  }
`


export const ButtonText = styled.div`
  width: calc(100% - 20px);
  color: inherit;
  font-size: 17px;
  font-weight: 400;
  font-style: normal;
  letter-spacing: normal;
  line-height: 20px;
  text-align: left;
`