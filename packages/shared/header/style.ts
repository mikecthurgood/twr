import styled from 'styled-components';

export const HeaderContainer = styled.div`
  width: 100%;
  height: 100px;
  background: var(--twr-primary-black);
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  flex-direction: column;
  position: fixed;
  top: 0;
  z-index: 1000;
`;