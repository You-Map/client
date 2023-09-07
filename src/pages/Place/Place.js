import React from 'react';
import PlaceTitle from '../../components/PlaceTitle';
import PlaceContainer from '../../components/PlaceContainer';

const dummy = {
  title: 'J관 휴게실',
  location: '정하상관 3층',
  purpose: 1,
};

const purpose = 1;

const Place = () => {
  return (
    <div>
      <PlaceTitle />
      <PlaceContainer data={dummy} purpose={purpose} />
    </div>
  );
};

export default Place;
