import styled from 'styled-components';

export const ShopHeroButtonContainer = styled.div`
  display: grid;
  grid-template-columns: min-content min-content;
  position: absolute;
  bottom: 0;
  right: 12.5%;


  .bookServiceButtonStyle {
    width: 197px;
    height: 53px;
    padding: 0;
  }
`

export const ShopIconContainer = styled.div`
  height: 53px;
  width: 56px;
  background-color: var(--twr-primary-black);
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ShopIcon = styled.div`
  background-image: url('/img/icons/shop-icon.png');
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  height: 31px;
  width: 25px;
`
export const ButtonText = styled.div`
  width: calc(100% - 20px);
  color: inherit;
  font-size: 19px;
  font-weight: 400;
  font-style: normal;
  letter-spacing: normal;
  line-height: 25px;
  text-align: left;
`