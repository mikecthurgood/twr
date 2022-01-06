import {
  combineReducers,
  configureStore as configureReduxStore,
  ConfigureStoreOptions,
  EnhancedStore,
  Reducer,
  ReducersMapObject,
} from '@reduxjs/toolkit';

export interface TwrStore extends EnhancedStore {
  asyncReducers: Record<string, Reducer>;
  injectReducer?(key: string, asyncReducer: Reducer): void;
}

export const INIT_STORE = '@@INIT_STORE';

// TODO: ATTENTION: This fn only replaces reducers
// use createFeatureStore for a store able to dynamically inject reducers
export function createStore<S>(
  reducer: Reducer,
  preloadedState: S,
  storeOptions: Omit<ConfigureStoreOptions, 'reducer'> = {},
): TwrStore {
  const store: TwrStore = {
    // Add a dictionary to keep track of the registered async reducers
    asyncReducers: {},

    // Create an inject reducer function
    // This function adds the async reducer, and creates a new combined reducer
    injectReducer(key, asyncReducer) {
      store.asyncReducers[key] = asyncReducer;
      store.replaceReducer(combineReducers(store.asyncReducers));
    },

    ...configureReduxStore({
      reducer,
      preloadedState,
      ...storeOptions,
    }),
  };

  // https://github.com/reactjs/redux/issues/1240#issuecomment-268061029
  store.dispatch({ type: INIT_STORE });

  return store;
}

export function createFeatureStore<S>(
  reducer: ReducersMapObject,
  preloadedState: Partial<S> | undefined,
  storeOptions: Omit<ConfigureStoreOptions, 'reducer'> = {},
): TwrStore {
  const store: TwrStore = {
    // Add a dictionary to keep track of the registered async reducers
    // Add a dictionary to keep track of the registered async reducers
    asyncReducers: {},

    // Create an inject reducer function
    // This function adds the async reducer, and creates a new combined reducer
    injectReducer(key, asyncReducer) {
      store.asyncReducers[key] = asyncReducer;
      store.replaceReducer(
        combineReducers({ ...reducer, ...store.asyncReducers }),
      );
    },

    ...configureReduxStore({
      reducer: combineReducers(reducer),
      preloadedState,
      ...storeOptions,
    }),
  };

  // https://github.com/reactjs/redux/issues/1240#issuecomment-268061029
  store.dispatch({ type: INIT_STORE });

  return store;
}
