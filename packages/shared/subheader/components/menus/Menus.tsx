import React from 'react';
import {
  HamburgerButton,
  MenuButtonContainer,
  MenuItem,
  MenuText,
} from './style';

export const Menus = (): JSX.Element => {
  return (
    <MenuButtonContainer>
      <MenuItem>
        <HamburgerButton />
        <MenuText>shop finder</MenuText>
      </MenuItem>
      <MenuItem>
        <HamburgerButton />
        <MenuText>community</MenuText>
      </MenuItem>
    </MenuButtonContainer>
  );
};
