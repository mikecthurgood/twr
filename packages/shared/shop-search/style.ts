import styled from 'styled-components';

export const ShopSearchContainer = styled.div`
  width: 100%;
  clear: both;
  background: var(--twr-primary-white);
  display: flex;
  justify-content: center;
  align-items: center;
  p {
    font-family: var(--twr-font-heading);
  }
  flex-direction: column;

  .shopSearchButton {
    height: 97%;
    width: 125px;
  }
`;

export const ShopSearchTitle = styled.h1`
  font-family: var(--twr-font-heading);
  font-size: 42px;
  text-transform: uppercase;
  margin: 60px 0;
`

export const ShopSearchInputContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr min-content 1fr min-content;
  height: 45px;
  width: 100%;
  max-width: 1000px;
  grid-gap: 20px;
`

export const ShopSearchInputItem = styled.div`
  width: 100%;
  position: relative;
`
export const ShopSearchDropDownList = styled.div`
  background: var(--twr-primary-white);
  display: grid;
  width: 100%;
  grid-gap: 5px;
  position: absolute;
  border: 1px solid var(--twr-primary-gray);
  border-top: none;
  padding: 10px;
  max-height: 350px;
  overflow-y: scroll;
`

export const ShopSearchDropDownListBikeShop = styled.span`
  font-family: var(--twr-font-heading);
  font-size: 15px;
  text-transform: uppercase;
  cursor: pointer;
  padding: 5px;
  
  &:hover {
    background-color: var(--twr-primary-gray);
  }
`
export const ShopSearchInput = styled.input`
  width: 100%;
  border: 3px solid var(--twr-primary-gray);
  font-family: var(--twr-font-family);
  padding: 10px;
  font-size: 15px;
  &:focus {
    outline: none;
    border: 3px solid var(--twr-primary-coral);
  }
`
export const ShopSearchText = styled.span`
  font-family: var(--twr-font-heading);
  text-transform: uppercase;
  font-size: 20px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ShopSearchButtonText = styled.div`
  height: 100%;
  width: 100%;
  font-size: 20px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-image: url('/img/menu/search-white.svg');
  background-size: 18px;
  background-position: 100% 45%;
  background-repeat: no-repeat;
`
