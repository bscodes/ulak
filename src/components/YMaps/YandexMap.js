import React from 'react';
import { YMaps, Map, Placemark  } from 'react-yandex-maps';

const YandexMap = () => {
  return(
    <YMaps query={{ lang: 'tr-TR' }}>
      <Map defaultState={{ center: [41.073491, 29.011802], zoom: 15 }} width="500">
        <Placemark
          geometry={[41.073491, 29.011802]}
        />
      </Map>
      
    </YMaps>
  )
}

export default YandexMap