import { Selector } from 'react-redux';

export type SelectorFactory<
  S,
  P extends Record<string, string | number | boolean>,
  R
> = (parameters: P) => Selector<S, R>;

const cache = new Map<string, Selector<any, any>>();

const cacheKeyCreator = (
  functionName: string,
  parameters: Record<string, string | number | boolean>,
) => {
  const stringifiedParameters = Object.keys(parameters)
    .map(key => `${key}_${parameters[key]}`)
    .join('_');

  return `${functionName}_${stringifiedParameters}`;
};

export const createCachedSelector = <
  S,
  P extends Record<string, string | number | boolean>,
  R
>(
  parameters: P,
  selectorFactory: SelectorFactory<S, P, R>,
): Selector<S, R> => {
  const key = cacheKeyCreator(selectorFactory.name, parameters);

  if (!cache.has(key)) {
    cache.set(key, selectorFactory(parameters));
  }
  return cache.get(key) as Selector<S, R>;
};
