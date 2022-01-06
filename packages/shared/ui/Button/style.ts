import styled from 'styled-components';
import { ButtonColour } from './Button';

const calculateButtonColour = (colorProp?: ButtonColour) => {
  if (colorProp === ButtonColour.GRAY) return 'var(--twr-button-gray)';
  if (colorProp === ButtonColour.CORAL) return 'var(--twr-primary-coral)';
  else return 'var(--twr-primary-white)'
}

const calculateTextColour = (colorProp?: ButtonColour) => {
  if (colorProp === ButtonColour.GRAY) return 'var(--twr-primary-white)';
  if (colorProp === ButtonColour.CORAL) return 'var(--twr-primary-white)';
  else return 'var(--twr-primary-black)'
}

const calculatePosition = (coord?: number | string) =>
  typeof coord !== 'undefined' ? `${coord}px` : '0px';

export const ButtonContainer = styled.div<{
  buttonColour?: ButtonColour;
  x?: number;
  y?: number;
}>`
  align-items: center;
  background-color: ${({buttonColour}) => calculateButtonColour(buttonColour)};
  color: ${({buttonColour}) => calculateTextColour(buttonColour)};
  cursor: pointer;
  display: flex;
  font-family: var(--twr-font-heading);
  height: 30px;
  justify-content: center;
  padding: 4px 15px 0;
  text-transform: uppercase;
  transform: translate3d(
    ${props => calculatePosition(props.x)},
    ${props => calculatePosition(props.y)},
    0
  );
  white-space: nowrap;

  &:hover {
    filter: brightness(120%);
  }
`
