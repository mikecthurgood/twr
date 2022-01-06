import { TwrStore } from './createStore';
import { ServerStoreFactory } from './createStoreFactory';

export type StoreFactory = () => TwrStore | ServerStoreFactory<any>;
export type StoreState<S extends string, V> = { [K in S]: V };
