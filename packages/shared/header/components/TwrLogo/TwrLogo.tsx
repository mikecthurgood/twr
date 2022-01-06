import React from 'react';
import { Logo, LogoContainer } from './style';

export const TwrLogo = (): JSX.Element => {
  return (
    <LogoContainer>
      <a href="/">
        <Logo className="twr-image__logos__twr-logo-white" />
      </a>
    </LogoContainer>
  );
};
