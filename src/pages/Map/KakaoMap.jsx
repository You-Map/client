import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { getMapInfo, getMouseInfo, getMarkers } from './getMapInfo';
import axios from 'axios';
import { BASE_URL } from '../../App';

import Sidebar from './Sidebar';

const { kakao } = window;

const KakaoMap = () => {
  const $mapContainer = useRef(null);
  const $getInfoButton = useRef(null);

  const [placeId, setPlaceId] = useState(null);
  const [data, setData] = useState(null);
  console.log(data);
  const [loading, setLoading] = useState(true);

  const getData = async () => {
    const url = BASE_URL + '/buildings';

    try {
      const res = await axios.get(url);
      setData(res.data);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    if (data === null) return;

    const options = {
      center: new kakao.maps.LatLng(37.550931345337034, 126.94105438629265),
      level: 2,
    };
    const map = new kakao.maps.Map($mapContainer.current, options);

    data.map((it, idx) => {
      let marker = new kakao.maps.Marker({
        position: new kakao.maps.LatLng(it['longitude'], it['latitude']),
      });
      marker.setMap(map);
      marker.setTitle(it.id);
      kakao.maps.event.addListener(marker, 'click', function (event) {
        setPlaceId(marker.getTitle());
      });
    });
  }, [data]);

  if (loading) return '로딩중..';
  else
    return (
      <MapWrapper>
        {/* <button ref={$getInfoButton}>지도 정보 갖고오기</button> */}
        <MapContainer ref={$mapContainer} />
        <Sidebar id={placeId} data={data} />
      </MapWrapper>
    );
};

const MapWrapper = styled.div`
  display: flex;
`;

const MapContainer = styled.div`
  width: 1512px;
  height: 982px;
`;

export default KakaoMap;
