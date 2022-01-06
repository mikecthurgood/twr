import React, { useEffect, useState } from 'react';
import Link from 'next/link';

import {
  ShopSearchContainer,
  ShopSearchInput,
  ShopSearchInputContainer,
  ShopSearchText,
  ShopSearchTitle,
  ShopSearchButtonText,
  ShopSearchInputItem,
  ShopSearchDropDownList,
  ShopSearchDropDownListBikeShop,
} from './style';
import { Button, ButtonColour } from '../ui';
import {
  selectBikeShopNamesAndSlugs,
  useBikeShopSelector,
} from '../stores/bike-shops';

export const ShopSearch = (): JSX.Element => {
  const bikeShops = useBikeShopSelector(selectBikeShopNamesAndSlugs);
  const [shopNameFocus, setShopNameFocus] = useState(false);
  const [shopNameSearchInput, setShopNameSearchInput] = useState('');
  const [showShopNameSearchResults, setShowShopNameSearchResults] =
    useState(false);

  useEffect(() => {
    if (shopNameFocus) setShowShopNameSearchResults(true);
    else if (!shopNameFocus)
      setTimeout(() => setShowShopNameSearchResults(false), 500);
  }, [shopNameFocus, shopNameSearchInput]);

  return (
    <ShopSearchContainer>
      <ShopSearchTitle>search the best independents</ShopSearchTitle>
      <ShopSearchInputContainer>
        <ShopSearchInputItem>
          <ShopSearchInput placeholder="Search by location or postcode" />
        </ShopSearchInputItem>
        <ShopSearchText>or</ShopSearchText>
        <ShopSearchInputItem>
          <ShopSearchInput
            placeholder="Enter shop name"
            onFocus={() => setShopNameFocus(true)}
            onBlur={() => setShopNameFocus(false)}
            value={shopNameSearchInput}
            onChange={e => setShopNameSearchInput(e.target.value)}
          />
          {showShopNameSearchResults && (
            <ShopSearchDropDownList>
              {bikeShops
                .filter(bikeShop =>
                  bikeShop.name
                    .toLowerCase()
                    .includes(shopNameSearchInput.toLowerCase()),
                )
                .map(bikeShop => {
                  return (
                    <Link key={bikeShop.slug} href={`/shops/${bikeShop.slug}`}>
                      <ShopSearchDropDownListBikeShop>
                        {bikeShop.name}
                      </ShopSearchDropDownListBikeShop>
                    </Link>
                  );
                })}
            </ShopSearchDropDownList>
          )}
        </ShopSearchInputItem>
        <Button
          className={'shopSearchButton'}
          buttonColour={ButtonColour.CORAL}
        >
          <ShopSearchButtonText className={'twr-image__menu__search-white'}>
            search
          </ShopSearchButtonText>
        </Button>
      </ShopSearchInputContainer>
    </ShopSearchContainer>
  );
};
