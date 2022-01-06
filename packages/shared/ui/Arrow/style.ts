import styled from 'styled-components';

import { Down, Left, Right, Up, UpOrDown } from './arrow-types';

const defaultSize = 2;
const defaultBorderWidth = 1;

const calculateSize = (size?: number): string =>
  typeof size !== 'undefined' ? `${size}px` : `${defaultSize}px`;

const calculateBorderWidth = (borderWidth?: number): string =>
  typeof borderWidth !== 'undefined'
    ? `0 ${borderWidth}px ${borderWidth}px 0`
    : `0 ${defaultBorderWidth}px ${defaultBorderWidth}px 0`;

const calculateColor = (arrowColor?: string) =>
  typeof arrowColor !== 'undefined' ? arrowColor : 'var(--twr-text-body)';

const calculatePosition = (coord?: number | string) =>
  typeof coord !== 'undefined' ? `${coord}px` : '0px';

const calcAngle = (direction: UpOrDown | Up | Down | Right | Left) => {
  switch (true) {
    case direction.up === true: {
      return -135;
    }
    case direction.down === true: {
      return 45;
    }
    case direction.left === true: {
      return 135;
    }
    case direction.right === true: {
      return -45;
    }
    case direction.isOpen === true: {
      return -135;
    }
    default: {
      return 45;
    }
  }
};

export const ArrowWrapper = styled.span<{ x?: number; y?: number }>`
  position: absolute;
  transform: translate3d(
    ${props => calculatePosition(props.x)},
    ${props => calculatePosition(props.y)},
    0
  );
`;

export const StyledArrow = styled.span<{
  arrowColor?: string;
  borderWidth?: number;
  direction: UpOrDown | Up | Down | Right | Left;
  size?: number;
}>`
  border: solid ${props => calculateColor(props.arrowColor)};
  border-width: ${props => calculateBorderWidth(props.borderWidth)};
  display: inline-block;
  padding: ${props => calculateSize(props.size)};
  transform: rotate(${props => calcAngle(props.direction)}deg);
  transition: transform 0.2s ease-in-out;
`;
