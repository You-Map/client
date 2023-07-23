import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { getMapInfo, getMouseInfo, getMarkers } from './getMapInfo';

const { kakao } = window;

const KakaoMap = () => {
  const $mapContainer = useRef(null);
  const $getInfoButton = useRef(null);

  useEffect(() => {
    const options = {
      center: new kakao.maps.LatLng(37.550931345337034, 126.94105438629265), //지도의 중심좌표.
      level: 2, //지도의 레벨(확대, 축소 정도)
    };
    const map = new kakao.maps.Map($mapContainer.current, options); // map을 state로 하자.

    // 이렇게 하는게 맞겠지..?
    const handleClick = () => {
      getMapInfo(map);
    };
    $getInfoButton.current.addEventListener('click', handleClick);
    kakao.maps.event.addListener(map, 'click', getMouseInfo);

    getMarkers().map((it) => {
      let marker = new kakao.maps.Marker({ position: it });
      marker.setMap(map);
    });
  }, []);

  return (
    <>
      <button ref={$getInfoButton}>지도 정보 갖고오기</button>
      <MapContainer ref={$mapContainer}></MapContainer>
    </>
  );
};

const MapContainer = styled.div`
  width: 1512px;
  height: 982px;
`;

export default KakaoMap;
