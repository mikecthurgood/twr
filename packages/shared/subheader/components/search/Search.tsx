import React from 'react';
import {
  SearchOuterContainer,
  SearchInnerContainer,
  SearchButton,
  SearchInput,
  SearchIcon,
} from './style';

export const Search = (): JSX.Element => {
  return (
    <SearchOuterContainer>
      <SearchInnerContainer>
        <SearchInput placeholder="Search Keywords"></SearchInput>
        <SearchButton>
          <SearchIcon />
        </SearchButton>
      </SearchInnerContainer>
    </SearchOuterContainer>
  );
};
