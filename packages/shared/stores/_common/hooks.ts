import { useStore } from 'react-redux';
import { Reducer } from '@reduxjs/toolkit';

import { TwrStore } from './createStore';

/** DO NOT USE this hook inside a render function / function component!
 * https://github.com/facebook/react/issues/18178
 */
export const useInjectReducer = (key: string, asyncReducer: Reducer): void => {
  const store = useStore() as TwrStore;

  if (!store.injectReducer) {
    throw new Error(
      'This store cannot inject reducer! Are you sure you created an OCStore?',
    );
  }
  store.injectReducer(key, asyncReducer);
};
