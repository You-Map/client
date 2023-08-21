import { place } from './data';
const { kakao } = window;

export const getMapInfo = (map) => {
  let center = map.getCenter();
  let level = map.getLevel();
  let mapTypeId = map.getMapTypeId();
  let bounds = map.getBounds();
  let swLatLng = bounds.getSouthWest();
  let neLatLng = bounds.getNorthEast();
  let boundsStr = bounds.toString();

  console.log('지도 중심 ', center);
  console.log('확대 레벨 ', level);
  console.log('지도 영역 ', bounds);
  console.log('남서 좌표 ', swLatLng);
  console.log('북동 좌표 ', neLatLng);
  console.log('영역 문자 ', boundsStr);
  console.log('지도 타입 ', mapTypeId);
};

export const getMouseInfo = (e) => {
  let latlng = e.latLng;

  console.log('클릭 위치 ', latlng);
};

export const getMarkers = () => {
  const coordinate = Object.values(place);
  return coordinate.map((it) => new kakao.maps.LatLng(it[0], it[1]));
  // return arr;
};
