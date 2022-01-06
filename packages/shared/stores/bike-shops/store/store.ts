import {
  AnyAction,
  combineReducers,
  Selector,
  ThunkDispatch,
} from '@reduxjs/toolkit';

import { TwrReducerKeys } from '../../_common/constants';
import { bikeShopsSlice } from './bikeShops.slice';
import { BikeShopReducerKeys } from './config';


export const bikeShopReducer = combineReducers({
  [BikeShopReducerKeys.ShopDetails]: bikeShopsSlice.reducer,
  [BikeShopReducerKeys.Questions]: bikeShopsSlice.reducer,
  [BikeShopReducerKeys.Reviews]: bikeShopsSlice.reducer,
});

// Infer the `BikeShopState` type from the reducer itself
export type BikeShopState = ReturnType<typeof bikeShopReducer>;
export type BikeShopDispatch = ThunkDispatch<BikeShopState, null, AnyAction>;
export type BikeShopSelector<K extends BikeShopReducerKeys, S, R> = Selector<
  {
    [T in K]: S;
  },
  R
>;

export const bikeShopFeatureReducerMap = {
  [TwrReducerKeys.BikeShops]: bikeShopReducer,
};

export const bikeShopFeatureReducer = combineReducers(
  bikeShopFeatureReducerMap,
);

export type BikeShopFeatureState = ReturnType<typeof bikeShopFeatureReducer>;
export type BikeShopFeatureDispatch = ThunkDispatch<
  BikeShopFeatureState,
  null,
  AnyAction
>;

export type BikeShopFeatureSelector<
  K1 extends TwrReducerKeys,
  K2 extends BikeShopReducerKeys,
  S,
  R
> = Selector<
  {
    [T in K1]: {
      [T2 in K2]: S;
    };
  },
  R
>;

export interface BikeShopStoreState {
  [TwrReducerKeys.BikeShops]: Partial<BikeShopState>;
}
