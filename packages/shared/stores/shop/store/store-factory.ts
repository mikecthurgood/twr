import { TwrReducerKeys } from '../../_common/constants';
import { createFeatureStore, TwrStore } from '../../_common/createStore';
import {
  createStoreFactory,
  ServerStoreFactory,
} from '../../_common/createStoreFactory';
import { loadState } from '../../_common/loadState';

import { normalize, ShopStructure } from './normalizer';
import { shopFeatureReducerMap, ShopStoreState } from './store';

const storeFactoryCreator = ():
  | TwrStore
  | ServerStoreFactory<ShopStoreState> =>
  createStoreFactory<ShopStoreState>({
    client() {
      const shopData = loadState<Partial<ShopStoreState>>(
        'twr-shop',
      );

      return createFeatureStore<ShopStoreState>(
        shopFeatureReducerMap,
        shopData,
        {},
      );
    },
    server() {
      return (preloadedState: ShopStoreState | undefined): TwrStore => {
        return createFeatureStore<ShopStoreState>(
          shopFeatureReducerMap,
          preloadedState,
        );
      };
    },
  });

function formatStoreData(shopData: ShopStructure): ShopStoreState {
  const normalisedData =
    typeof shopData !== 'undefined' ? normalize(shopData) : {};

  const preloadedState = {
    [TwrReducerKeys.Shop]: {
      ...normalisedData,
    },
  };

  return preloadedState;
}

export const storeFactory = {
  storeFactoryCreator,
  formatStoreData,
};
