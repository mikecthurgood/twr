import React from 'react';

import { Down, Left, Right, Up, UpOrDown } from './arrow-types';
import { ArrowWrapper, StyledArrow } from './style';

type ArrowProps = {
  borderWidth?: number;
  // using Americanised "color" means the attribute isn't removed
  // from the DOM element, so use proper English here
  colour?: string;
  size?: number;
  x?: number;
  y?: number;
} & (UpOrDown | Up | Down | Right | Left);

export const Arrow = (props: ArrowProps): JSX.Element => {
  const { borderWidth, colour, size, x, y, ...direction } = props;

  return (
    <ArrowWrapper x={x} y={y}>
      <StyledArrow
        direction={direction}
        arrowColor={colour}
        size={size}
        borderWidth={borderWidth}
      />
    </ArrowWrapper>
  );
};
