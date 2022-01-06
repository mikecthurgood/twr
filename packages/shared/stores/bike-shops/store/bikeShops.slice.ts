import {
  createEntityAdapter,
  createSlice,
  EntityState,
  createSelector,
  Selector,
} from '@reduxjs/toolkit';

import { TwrReducerKeys } from '../../_common/constants';
import { BikeShop } from '../interfaces';

import { BikeShopReducerKeys } from './config';
import { BikeShopFeatureSelector } from './store';

export type BikeShopsState = EntityState<BikeShop>;

export const selectBikeShopIdFn = (bikeShop: BikeShop): string => bikeShop.slug;

const bikeShopsAdapter = createEntityAdapter<BikeShop>({
  selectId: selectBikeShopIdFn,
});

export const bikeShopsSlice = createSlice({
  name: BikeShopReducerKeys.ShopDetails,
  initialState: bikeShopsAdapter.getInitialState() as BikeShopsState,
  reducers: {
    BikeShopsAdded: bikeShopsAdapter.addMany,
  },
  extraReducers: {},
});

export const getBikeShopsState = (state: {
  [TwrReducerKeys.BikeShops]: {
    [BikeShopReducerKeys.ShopDetails]: BikeShopsState;
  };
}): BikeShopsState => {
  return state[TwrReducerKeys.BikeShops][BikeShopReducerKeys.ShopDetails];
};

export type BikeShopsSelector<R> = BikeShopFeatureSelector<
TwrReducerKeys.BikeShops,
  BikeShopReducerKeys.ShopDetails,
  BikeShopsState,
  R
>;

export const {
  selectAll: selectAllBikeShops,
  selectById: selectBikeShopById,
  selectEntities: selectBikeShopEntities,
  selectIds: selectBikeShopIds,
} = bikeShopsAdapter.getSelectors(getBikeShopsState);

export const selectShopNameByShopId = (
  bikeShopId: string,
): BikeShopsSelector<string> =>
  createSelector(selectBikeShopEntities, entities => {
    const bikeShop = entities[bikeShopId];
    return typeof bikeShop !== 'undefined' ? bikeShop.name : '';
  });

export const selectBikeShopNamesAndSlugs = createSelector(
  selectAllBikeShops,
  (bikeShops) => {
    return bikeShops.map(bikeShop => ({name: bikeShop.name, slug: bikeShop.slug})).sort((a, b) => a.name.localeCompare(b.name))
  },
);
