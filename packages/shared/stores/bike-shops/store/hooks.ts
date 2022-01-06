import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import { BikeShopDispatch, BikeShopFeatureState } from './store';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const useBikeShopDispatch = () => useDispatch<BikeShopDispatch>();
export const useBikeShopSelector: TypedUseSelectorHook<BikeShopFeatureState> = useSelector;
