import React, { useState, useEffect } from 'react';
import { withScriptjs, withGoogleMap, GoogleMap } from 'react-google-maps';
const {
  MarkerWithLabel,
} = require('react-google-maps/lib/components/addons/MarkerWithLabel');

export interface MapProps {
  address: string;
  isMarkerShown: boolean;
  mapsApiKey: string;
  shopName: string;
}
export const Map = withScriptjs(
  withGoogleMap(
    ({
      address,
      isMarkerShown,
      mapsApiKey,
      shopName,
    }: MapProps): JSX.Element => {
      const [geo, setGeo] = useState({
        lat: undefined,
        lng: undefined,
      });

      const shopAddress = encodeURI(
        address.replace(',', ' ').replace('&', '%26'),
      );

      useEffect(() => {
        const getGeo = async () => {
          const geoCachingUrl = `https://maps.googleapis.com/maps/api/geocode/json?key=${mapsApiKey}&address=${shopAddress}&mapTypeId=a5916cec0d782f49`;
          const response = await fetch(geoCachingUrl).then(res => res.json());
          if (response.results.length > 0)
            setGeo(response.results[0].geometry.location);
        };
        getGeo();
      }, [shopAddress]);
      //https://snazzymaps.com/ - for all different map styles
      return (
        <>
          {typeof geo.lat !== 'undefined' && (
            <>
              <GoogleMap
                defaultZoom={14}
                defaultCenter={geo}
                options={{
                  fullscreenControl: false,
                  mapTypeControl: false,
                  streetViewControl: false,
                  draggable: false,
                }}
              >
                {geo.lat && geo.lng && (
                  <MarkerWithLabel
                    position={{
                      lat: geo.lat,
                      lng: geo.lng,
                    }}
                    icon={{
                      url: '/img/icons/map-icon.png',
                      anchor: { x: 0, y: 0 },
                    }}
                    labelAnchor={{ x: -18, y: -19 }}
                    labelStyle={{
                      backgroundColor: 'var(--twr-primary-white)',
                      fontSize: '20px',
                      fontFamily: 'var(--twr-font-heading)',
                      padding: '5px',
                      border: '3px solid var(--twr-primary-black)',
                    }}
                  >
                    <div className="shop-marker-label">{shopName}</div>
                  </MarkerWithLabel>
                )}
              </GoogleMap>
            </>
          )}
        </>
      );
    },
  ),
);
