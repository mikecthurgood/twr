import styled from 'styled-components';

export const SearchOuterContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: translateY(-3px);
`

export const SearchInnerContainer = styled.div`
  height: 35px;
  width: 261px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`

export const SearchInput = styled.input`
  height: 35px;
  width: 261px;
  font-family: var(--twr-font-family);
  padding: 0 10px;
  /* background-color: var(--twr-dark-gray); */
  background-color: #2e3033;
  color: var(--twr-primary-white);
  border: none;

  &:focus {
    outline: none;
  }
  ::placeholder {
    color: var(--twr-primary-white);
    opacity: 0.8;
  }
`

export const SearchButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 35px;
  width: 35px;
  position: absolute;
  right: 0;
  top: 0;
  cursor: pointer;
  background-color: var(--twr-button-gray);
  &:hover {
    filter: brightness(120%)
  }
`

export const SearchIcon = styled.div`
  background: url('/img/menu/search-white.svg');
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  height: 14px;
  width: 14px;
  cursor: pointer;
`

