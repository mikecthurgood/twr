import styled from 'styled-components';

export const ShopDetailsContainer = styled.div`
  display: grid;
  width: fit-content;
  background: var(--twr-primary-white);
  grid-gap: 3px;
  justify-content: center;
  align-items: center;
  position: absolute;
  z-index: 10;
  top: -50px;
  left: 150px;
  width: 320px;
  box-shadow: 0 4px 8px 0 #00000038;
`;

export const ShopDetailsImageCarouselContainer = styled.div`
  position: relative;
  display: grid;
  .carousel-icons {
    display: none;
  }
`
export const ShopDetailsInnerContainer = styled.div`
  padding: 0 15px;
  display: grid;
  grid-template-rows: min-content min-content 1fr;
`

export const ShopDetailsTitle = styled.div`
  font-size: 20px;
  font-family: var(--twr-font-heading);
  text-transform: uppercase;
  padding: 20px 0;
`
export const ShopDetailsTeamDetails = styled.div`
  border-top: 3px solid var(--twr-primary-gray);
  padding: 20px 0;
  display: grid;
  grid-gap: 10px;
`
export const ShopDetailsStaffMemberTitle = styled.span`
  font-family: var(--twr-font-heading);
  text-transform: uppercase;
  font-size: 17px;
`

export const ShopDetailsStaffMemberBlurb = styled.span`
  font-family: var(--twr-font-family);
  font-size: 15px;
  /* margin-bottom: 10px; */
`

export const ShopDetailsOpeningHoursContainer = styled.div`
  border-top: 3px solid var(--twr-primary-gray);
  padding: 20px 0;
  display: grid;
  grid-row-gap: 10px;
`

export const ShopDetailsOpeningHoursTitle = styled.div`
  margin-bottom: 10px;
  font-size: 20px;
  font-family: var(--twr-font-heading);
  text-transform: uppercase;
`

export const ShopDetailsOpeningHoursRow = styled.div`
  display: grid;
  grid-template-columns: 0.4fr 1fr;
  grid-column-gap: 20px;
`

export const ShopDetailsOpeningHoursDay = styled.span`
  font-family: var(--twr-font-heading);
  text-transform: uppercase;
  font-size: 15px;
`

export const ShopDetailsOpeningHoursTimes = styled.span`
  font-family: var(--twr-font-heading);
  text-transform: uppercase;
  font-size: 15px;
`

