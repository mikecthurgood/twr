import styled from 'styled-components';

export const MapContainer = styled.div`
  width: 100%;
  height: 256px;
  clear: both;
  background: var(--twr-primary-white);
  margin-top: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 3px solid var(--twr-primary-gray);
  p {
    font-family: var(--twr-font-heading);
  }
  position: relative
`;

export const MapMarker = styled.div`
  height: 35px;
  width: 35px;
  background-color: var(--twr-primary-coral);
`

export const MapLabel = styled.div`
  font-family: var(--twr-font-heading);
  text-transform: uppercase;
  font-size: 20px;
  position: absolute;
  top: -255px;
  right: calc(51.5%);
  background-color: var(--twr-primary-white);
  border: 3px solid var(--twr-primary-black);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;

`
export const mapStyles = [
  {
    featureType: 'water',
    elementType: 'geometry.fill',
    stylers: [
      {
        color: '#d3d3d3',
      },
    ],
  },
  {
    featureType: 'transit',
    stylers: [
      {
        color: '#808080',
      },
      {
        visibility: 'off',
      },
    ],
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry.stroke',
    stylers: [
      {
        visibility: 'on',
      },
      {
        color: '#b3b3b3',
      },
    ],
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry.fill',
    stylers: [
      {
        color: '#ffffff',
      },
    ],
  },
  {
    featureType: 'road.local',
    elementType: 'geometry.fill',
    stylers: [
      {
        visibility: 'on',
      },
      {
        color: '#ffffff',
      },
      {
        weight: 1.8,
      },
    ],
  },
  {
    featureType: 'road.local',
    elementType: 'geometry.stroke',
    stylers: [
      {
        color: '#d7d7d7',
      },
    ],
  },
  {
    featureType: 'poi',
    elementType: 'geometry.fill',
    stylers: [
      {
        visibility: 'on',
      },
      {
        color: '#ebebeb',
      },
    ],
  },
  {
    featureType: 'administrative',
    elementType: 'geometry',
    stylers: [
      {
        color: '#a7a7a7',
      },
    ],
  },
  {
    featureType: 'road.arterial',
    elementType: 'geometry.fill',
    stylers: [
      {
        color: '#ffffff',
      },
    ],
  },
  {
    featureType: 'road.arterial',
    elementType: 'geometry.fill',
    stylers: [
      {
        color: '#ffffff',
      },
    ],
  },
  {
    featureType: 'landscape',
    elementType: 'geometry.fill',
    stylers: [
      {
        visibility: 'on',
      },
      {
        color: '#efefef',
      },
    ],
  },
  {
    featureType: 'road',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#696969',
      },
    ],
  },
  {
    featureType: 'administrative',
    elementType: 'labels.text.fill',
    stylers: [
      {
        visibility: 'on',
      },
      {
        color: '#737373',
      },
    ],
  },
  {
    featureType: 'poi',
    elementType: 'labels.icon',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
  {
    featureType: 'poi',
    elementType: 'labels',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
  {
    featureType: 'road.arterial',
    elementType: 'geometry.stroke',
    stylers: [
      {
        color: '#d6d6d6',
      },
    ],
  },
  {
    featureType: 'road',
    elementType: 'labels.icon',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
  {},
  {
    featureType: 'poi',
    elementType: 'geometry.fill',
    stylers: [
      {
        color: '#dadada',
      },
    ],
  },
];
