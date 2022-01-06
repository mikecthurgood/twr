import { BikeShopData } from '..';
import { TwrReducerKeys } from '../../_common/constants';
import { createFeatureStore, TwrStore } from '../../_common/createStore';
import {
  createStoreFactory,
  ServerStoreFactory,
} from '../../_common/createStoreFactory';
import { loadState } from '../../_common/loadState';

import { normalizeBikeShops } from './normalizer';
import { bikeShopFeatureReducerMap, BikeShopStoreState } from './store';

const storeFactoryCreator = ():
  | TwrStore
  | ServerStoreFactory<BikeShopStoreState> =>
  createStoreFactory<BikeShopStoreState>({
    client() {
      const shopData = loadState<Partial<BikeShopStoreState>>(
        'twr-shop',
      );

      return createFeatureStore<BikeShopStoreState>(
        bikeShopFeatureReducerMap,
        shopData,
        {},
      );
    },
    server() {
      return (preloadedState: BikeShopStoreState | undefined): TwrStore => {
        return createFeatureStore<BikeShopStoreState>(
          bikeShopFeatureReducerMap,
          preloadedState,
        );
      };
    },
  });

function formatStoreData(bikeShopData: BikeShopData): BikeShopStoreState {
  const normalisedData =
    typeof bikeShopData !== 'undefined' ? normalizeBikeShops(bikeShopData) : {};

  const preloadedState = {
    [TwrReducerKeys.BikeShops]: {
      ...normalisedData,
    },
  };

  return preloadedState;
}

export const storeFactory = {
  storeFactoryCreator,
  formatStoreData,
};
