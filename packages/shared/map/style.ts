import styled from 'styled-components';

export const MapContainer = styled.div`
  width: 100%;
  height: 256px;
  clear: both;
  background: var(--twr-primary-white);
  margin-top: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 3px solid var(--twr-primary-gray);
  p {
    font-family: var(--twr-font-heading);
  }
  position: relative
`;

export const MapMarker = styled.div`
  height: 35px;
  width: 35px;
  background-color: var(--twr-primary-coral);
`

export const MapLabel = styled.div`
  font-family: var(--twr-font-heading);
  text-transform: uppercase;
  font-size: 20px;
  position: absolute;
  top: -255px;
  right: calc(51.5%);
  background-color: var(--twr-primary-white);
  border: 3px solid var(--twr-primary-black);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;

`
