// import { EntityState } from '@reduxjs/toolkit';
// import { normalize as normalizr, schema } from 'normalizr';

import { EntityState } from '@reduxjs/toolkit';
import { BikeShopReducerKeys } from '.';
import { normalizeSimpleEntity } from '../../_common/store.normalizer';
import {
  BikeShop, BikeShopData
} from '../interfaces';

import { BikeShopState } from './store';

function normalizeBikeShop(shops: BikeShop[]) {
    return normalizeSimpleEntity('shops', shops, {
      idAttribute: (shop: BikeShop) => shop.slug
    });
}

export function normalizeBikeShopData(
  bikeShopData: BikeShopData,
): {
  [BikeShopReducerKeys.ShopDetails]: EntityState<BikeShop>;
} {
  return {
    [BikeShopReducerKeys.ShopDetails]: normalizeBikeShop(
       bikeShopData.shops.length > 0
        ? bikeShopData.shops
        : [],
    ),
  };
}

export interface BikeShops {
  bikeShops: BikeShop,
  reviews: any,
  questions: any,
}

export const normalizeBikeShops = (bikeShopData: BikeShopData): Partial<BikeShopState> => {
  return {
    ...normalizeBikeShopData(bikeShopData)
  };
};
