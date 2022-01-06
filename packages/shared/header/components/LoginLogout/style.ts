import styled from 'styled-components';

export const ButtonContainer = styled.div`
  display: grid;
  grid-template-columns: min-content min-content;
  grid-gap: 10px;
  height: 100%;
  align-items: center;
  justify-content: center;

  .loginLogoutButton {
    height: 35px;
    width: fit-content;
    white-space: nowrap;
    &:hover {
      /* background-color: var(--twr-light-gray); */
      /* color: var(--twr-primary-coral); */
      filter: brightness(120%)
    }
  }
`