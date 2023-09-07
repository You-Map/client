import {
  faBed,
  faBookOpen,
  faMapLocationDot,
  faUsers,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import PlaceBox from './PlaceBox';
import styled from 'styled-components';

const PlaceContainer = ({ purpose, data }) => {
  return (
    <div>
      {purpose === 1 ? (
        <>
          <PlacePurpose>
            <FontAwesomeIcon icon={faBed} />
            휴게
          </PlacePurpose>
        </>
      ) : (
        <></>
      )}
      {purpose === 2 ? (
        <>
          <PlacePurpose>
            <FontAwesomeIcon icon={faBookOpen} />
            공부
          </PlacePurpose>
        </>
      ) : (
        <></>
      )}
      {{ purpose } === '3' ? (
        <>
          <PlacePurpose>
            <FontAwesomeIcon icon={faUsers} />
            {purpose}
          </PlacePurpose>
        </>
      ) : (
        <></>
      )}
      {{ purpose } === '경로' ? (
        <>
          <PlacePurpose>
            <FontAwesomeIcon icon={faMapLocationDot} />
            {purpose}
          </PlacePurpose>
        </>
      ) : (
        <></>
      )}

      <PlaceListContainer>
        <PlaceBox data={data} />
        <PlaceBox data={data} />
        <PlaceBox data={data} />
      </PlaceListContainer>
    </div>
  );
};

const PlaceListContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  height: 370;
`;

const PlacePurpose = styled.div`
  display: flex;
  gap: 10px;
  color: #3c6255;
  font-size: 32px;
  font-family: Noto Sans KR;
  font-weight: 700;
  padding: 60px 60px 20px 100px;
`;

export default PlaceContainer;
