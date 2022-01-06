import styled from 'styled-components';

export const ReviewStarsContainer = styled.div`
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  background: linear-gradient(90deg, var(--twr-primary-black) 80%, var(--twr-text-subtext) 20%);
  position: relative;
`;

// export const ReviewStarsPercentage = styled.div`
//   position: absolute;
//   left: 0;
//   top: 0;
//   width: 50%;
//   height: 100%;
//   background-color: var(--twr-primary-black);
//   z-index: 4;
// `

export const ReviewStars = styled.div`
  background-image: url('/img/icons/rating-stars.png');
  background-size: 100% 100%;
  background-position: center;
  background-repeat: no-repeat;
  height: 14px;
  z-index: 5;
  box-sizing: border-box;
`
