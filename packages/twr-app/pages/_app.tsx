import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';

import { Header } from '@twr/shared/header';
import { SubHeader } from '@twr/shared/subheader';
import { Footer } from '@twr/shared/footer';
import { TwrReducerKeys, createFeatureStore } from '@twr/shared/stores';
import {
  normalizeBikeShops,
  BikeShopFeatureState,
  bikeShopReducer,
  BikeShopState,
} from '@twr/shared/stores/bike-shops';
import bikeShopData from '@twr/shared/templates/shop-page/_tests/data/shopData.json';

function MyApp({ Component, pageProps }: AppProps) {
  const store = createFeatureStore<BikeShopFeatureState>(
    {
      [TwrReducerKeys.BikeShops]: bikeShopReducer,
    },
    {
      [TwrReducerKeys.BikeShops]: {
        ...normalizeBikeShops(bikeShopData as unknown as any),
      } as BikeShopState,
    },
    {
      devTools: true,
    },
  );

  return (
    <Provider store={store}>
      <Header />
      <SubHeader />
      <Component {...pageProps} />
      <Footer />
    </Provider>
  );
}

export default MyApp;
