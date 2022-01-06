import styled from 'styled-components';

export const MenuButtonContainer = styled.div`
  /* margin-left: 80px; */
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  height: fit-content;
  padding: 20px 0;
  transform: translateY(-3px);
`

export const MenuItem = styled.div`
  display: grid;
  grid-template-columns: min-content 1fr;
  width: 100%;
  justify-content: flex-start;
  grid-gap: 10px;
  align-items: center;
`

export const MenuText = styled.span`
  color: var(--twr-primary-white);
  font-family: var(--twr-font-heading);
  text-transform: uppercase;
  font-size: 22px;
  white-space: nowrap;
  cursor: pointer;
  &:hover {
    color: var(--twr-primary-coral);
  }
`

export const HamburgerButton = styled.div`
  background: url('/img/menu/hamburger-menu.svg');
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  height: 15px;
  width: 22.5px;
  transform: translateY(-1px)
`

