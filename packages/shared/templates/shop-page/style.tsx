import styled from 'styled-components';

export const ShopDetailsSection = styled.section`
  width: 75%;
  margin: 66px 12.5%;
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 20px;
`;

export const ShopDesc = styled.div`
  width: 100%;
  display: grid;
  grid-template-rows: min-content min-content;
  grid-gap: 20px;
`;

export const ShopDetailsMainDesc = styled.div`
  font-family: var(--twr-font-heading);
  color: var(--twr-primary-black);
  font-size: 20px;
  font-style: normal;
  letter-spacing: normal;
  line-height: 28px;
  text-transform: uppercase;
  text-align: justify;
  width: 564px;
`;

export const ShopDetailsSecondaryDesc = styled.div`
  width: 564px;
  color: var(--twr-primary-black);
  font-family: var(--twr-font-family);
  font-size: 14px;
  font-weight: 400;
  font-style: normal;
  letter-spacing: normal;
  line-height: normal;
  text-align: justifyLeft;
  font-style: normal;
  letter-spacing: normal;
  line-height: 24px;
`;

export const ShopImageCarouselContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

export const MapAndHoursSection = styled.section`
  position: relative;
`;
