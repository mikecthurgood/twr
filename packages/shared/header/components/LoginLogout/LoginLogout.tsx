import React from 'react';
import { Button, ButtonColour } from '../../../ui';
import { ButtonContainer } from './style';

export const LoginLogout = (): JSX.Element => {
  return (
    <ButtonContainer>
      <Button className={'loginLogoutButton'} buttonColour={ButtonColour.GRAY}>
        join
      </Button>
      <Button className={'loginLogoutButton'} buttonColour={ButtonColour.GRAY}>
        sign in
      </Button>
    </ButtonContainer>
  );
};
