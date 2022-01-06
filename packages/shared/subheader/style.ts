import styled from 'styled-components';

export const SubHeaderContainer = styled.div`
  height: 60px;
  width: 100%;
  display: flex;
  background: var(--twr-primary-black);
  position: fixed;
  top: 100px;
  z-index: 1000;
  justify-content: center;
`

export const SubHeaderInerContainer = styled.div`
  height: 60px;
  width: 75%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  margin: 0 12.5%;
`
