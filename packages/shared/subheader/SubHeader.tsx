import React from 'react';
import { Menus } from './components/menus';
import { Search } from './components/search';
import { SubHeaderContainer, SubHeaderInerContainer } from './style';

export const SubHeader = (): JSX.Element => {
  return (
    <SubHeaderContainer>
      <SubHeaderInerContainer>
        <Menus />
        <Search />
      </SubHeaderInerContainer>
    </SubHeaderContainer>
  );
};
