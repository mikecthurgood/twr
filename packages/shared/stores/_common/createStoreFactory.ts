import { TwrStore } from './createStore';

export interface StoreFactoryConfig<C, S> {
  client(): C;
  server(): S;
}

export interface ServerStoreFactory<S> {
  (data: S): TwrStore;
}

// Returns the correct store factory depending on if it is
// called on the server or the client
export function createStoreFactory<S>(
  config: StoreFactoryConfig<TwrStore, ServerStoreFactory<S>>,
): TwrStore | ServerStoreFactory<S> {
  return typeof window === 'undefined' ? config.server() : config.client();
}
