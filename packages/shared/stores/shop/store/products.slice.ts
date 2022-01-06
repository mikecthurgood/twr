import {
  createEntityAdapter,
  createSlice,
  EntityState,
} from '@reduxjs/toolkit';

import { TwrReducerKeys } from '../../_common/constants';
import { Product } from '../interfaces';

import { ShopReducerKeys } from './config';

export type ProductState = EntityState<Product>;

export const selectProductsIdFn = (product: Product): string => `${product.brand_name} ${product.product_name}`;

const productsAdapter = createEntityAdapter<Product>({
  selectId: selectProductsIdFn,
});

export const productsSlice = createSlice({
  name: ShopReducerKeys.Products,
  initialState: productsAdapter.getInitialState() as ProductState,
  reducers: {
    productsAdded: productsAdapter.addMany,
  },
  extraReducers: {},
});

export const getProductState = (state: {
  [TwrReducerKeys.Shop]: {
    [ShopReducerKeys.Products]: ProductState;
  };
}): ProductState => {
  return state[TwrReducerKeys.Shop][ShopReducerKeys.Products];
};

export const {
  selectAll: selectAllProducts,
  selectById: selectProductById,
  selectEntities: selectProductEntities,
  selectIds: selectProductIds,
} = productsAdapter.getSelectors(getProductState);
