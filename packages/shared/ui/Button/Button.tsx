import React from 'react';

import { ButtonContainer } from './style';

export enum ButtonColour {
  GRAY = 'gray',
  CORAL = 'coral',
}

type ButtonProps = {
  buttonColour?: ButtonColour;
  x?: number;
  y?: number;
  children: string | JSX.Element;
  className?: string;
};

export const Button = ({
  children,
  className,
  buttonColour,
  x,
  y,
}: ButtonProps): JSX.Element => {
  // console.log({ buttonColour });
  return (
    <ButtonContainer
      className={className ? className : ''}
      buttonColour={buttonColour}
      x={x}
      y={y}
    >
      {children}
    </ButtonContainer>
  );
};
