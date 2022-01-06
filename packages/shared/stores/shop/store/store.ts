import {
  AnyAction,
  combineReducers,
  Selector,
  ThunkDispatch,
} from '@reduxjs/toolkit';

import { TwrReducerKeys } from '../../_common/constants';

import { productsSlice } from './products.slice';
import { ShopReducerKeys } from './config';

export const shopReducer = combineReducers({
  [ShopReducerKeys.Products]: productsSlice.reducer,
});

// Infer the `ShopState` type from the reducer itself
export type ShopState = ReturnType<typeof shopReducer>;
export type ShopDispatch = ThunkDispatch<ShopState, null, AnyAction>;
export type ShopSelector<K extends ShopReducerKeys, S, R> = Selector<
  {
    [T in K]: S;
  },
  R
>;

export const shopFeatureReducerMap = {
  [TwrReducerKeys.Shop]: shopReducer,
};

export const shopFeatureReducer = combineReducers(
  shopFeatureReducerMap,
);

export type ShopFeatureState = ReturnType<typeof shopFeatureReducer>;
export type ShopFeatureDispatch = ThunkDispatch<
  ShopFeatureState,
  null,
  AnyAction
>;

export type shopFeatureSelector<
  K1 extends TwrReducerKeys,
  K2 extends ShopReducerKeys,
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

export interface ShopStoreState {
  [TwrReducerKeys.Shop]: Partial<ShopState>;
}
