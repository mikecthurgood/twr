import styled from 'styled-components';

export const ShopHeroCtaContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 0.25fr) 1fr;
  width: 100%;
  border-bottom: 3px solid var(--twr-primary-gray);
  background-color: var(--twr-primary-gray);
  grid-gap: 3px;
  height: 55px;
  position: relative;
`

export const HeroCtaItem = styled.div`
  width: 100%;
  height: 100%;
  background-color: var(--twr-primary-white);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 20px;
  cursor: pointer;
  position: relative;
  &:hover {
    background-color: var(--twr-primary-white);
    cursor: default;
  }
  &:last-of-type {
    justify-content: center;
    div {
      position: absolute;
      right: 27%;
    }
  }
`
export const ReviewCtaContainer = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: min-content 1fr;
  grid-gap: 10px;
  align-items: center;
  justify-content: center;
`
export const ReviewStarsWrapper = styled.div`
  height: 14px;
  width: 80px;
`

export const CtaText = styled.div`
  font-family: var(--twr-font-heading);
  text-transform: uppercase;
  font-size: 18px;
  color: #2e3033;
  transform: translateY(2px);
  
`

export const HighlightedCta = styled.span`
  color: var(--twr-primary-coral);
  font-size: inherit;
`