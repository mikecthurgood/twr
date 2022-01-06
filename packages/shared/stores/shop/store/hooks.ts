import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import { ShopDispatch, ShopState } from './store';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const useShopDispatch = () => useDispatch<ShopDispatch>();
export const useShopSelector: TypedUseSelectorHook<ShopState> = useSelector;
