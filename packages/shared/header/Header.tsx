import React from 'react';
import { LoginLogout } from './components/LoginLogout';
import { TwrLogo } from './components/TwrLogo';
import { HeaderContainer } from './style';

export const Header = (): JSX.Element => {
  return (
    <HeaderContainer>
      <div />
      <TwrLogo />
      <LoginLogout />
    </HeaderContainer>
  );
};
