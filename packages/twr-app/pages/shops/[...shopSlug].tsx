import type { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { ShopPageTemplate } from '@twr/shared/templates/shop-page';
import {
  useBikeShopSelector,
  selectShopNameByShopId,
} from '@twr/shared/stores/bike-shops';

const Home: NextPage = () => {
  const router = useRouter();
  const slug = router.query.shopSlug;
  const bikeShopSlug = typeof slug === 'undefined' ? ['none'] : slug;
  const shopName = useBikeShopSelector(selectShopNameByShopId(bikeShopSlug[0]));

  const carouselImgUrls = [
    '/img/shop-carousel/chains.jpg',
    '/img/shop-carousel/lubes.jpg',
    '/img/shop-carousel/mechanic.jpg',
    '/img/shop-carousel/saddles.jpg',
    '/img/shop-carousel/stems.jpg',
  ];

  const mapsApiKey = process.env.NEXT_PUBLIC_MAPSAPIKEY;

  if (!shopName) return <></>;
  return (
    <div>
      <Head>
        <title>
          {shopName} Details | Book A Service | Rate and Review | Together We
          Ride
        </title>
        <meta name="description" content={`${shopName} shop details`} />
        <link rel="icon" href="/favicon.ico" />
        {carouselImgUrls.map(url => {
          <link rel="preload" href={url} as="image" />;
        })}
      </Head>
      <ShopPageTemplate
        shopId={bikeShopSlug[0]}
        mapsApiKey={mapsApiKey || ''}
      />
    </div>
  );
};

export default Home;
