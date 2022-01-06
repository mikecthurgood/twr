import styled from 'styled-components';

export const HeroCtaContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 100%;
  border-bottom: 3px solid var(--twr-primary-gray);
  background-color: var(--twr-primary-gray);
  grid-gap: 3px;
  height: 40px;
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

  &:first-of-type {
    justify-content: flex-end;
  }

  &:last-of-type {
    justify-content: flex-start;
  }

  &:hover {
    background-color: var(--twr-primary-gray);
  }
`

export const CtaText = styled.div`
  font-family: var(--twr-font-heading);
  text-transform: uppercase;
  font-size: 20px;
  color: #2e3033;
  transform: translateY(2px);
`

export const HighlightedCta = styled.span`
  color: var(--twr-primary-coral);
  font-size: inherit;
`