import { EntityState } from '@reduxjs/toolkit';
import { ShopReducerKeys } from '.';
import {
  Accessories,
  Bikes,
  Brands,
  Categories,
  Clothing,
  Miscellaneous,
  Parts,
  Product,
  ShopData,
} from '../interfaces';


import { ShopState } from './store';

function normalizeProducts(products: Product[]) {
  if (typeof products === 'undefined') {
    return { entities: {}, ids: [] };
  }

  const productsToNormalize = products
    .filter(m => Boolean(m.product_name))

  const brands = [...new Set(productsToNormalize.map(product => product.brand_name))]
  const entities = brands.reduce((o, brand) => ({...o, [brand]: productsToNormalize.filter(product => product.brand_name === brand) }), {})
  return { entities, ids: brands }
}

export function normalizeShopData(
  shopData: ShopData,
): {
  [ShopReducerKeys.Products]: EntityState<Product>;
} {
  return {
    [ShopReducerKeys.Products]: normalizeProducts(
       shopData.products.length > 0
        ? shopData.products
        : [],
    ),
  };
}

export interface ShopStructure {
  products: Product[],
  brands: Brands,
  categories: Categories,
  bikes: Bikes,
  clothing: Clothing,
  accessories: Accessories,
  miscellaneous: Miscellaneous,
  parts: Parts,
}

export const normalize = (shopData: ShopStructure): Partial<ShopState> => {
  return {
    ...normalizeShopData(shopData)
  };
};
