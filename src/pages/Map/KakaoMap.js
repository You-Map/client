import { useEffect, useRef } from 'react';
import styled from 'styled-components';

const { kakao } = window;

const KakaoMap = () => {
  const $mapContainer = useRef(null);

  useEffect(() => {
    const options = {
      center: new kakao.maps.LatLng(37.551455, 126.941335), //지도의 중심좌표.
      level: 3, //지도의 레벨(확대, 축소 정도)
    };
    const map = new kakao.maps.Map($mapContainer.current, options);
  }, []);

  return <MapContainer ref={$mapContainer}></MapContainer>;
};

const MapContainer = styled.div`
  width: 1512px;
  height: 982px;
`;

export default KakaoMap;
