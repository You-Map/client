import React from 'react';
import styled from 'styled-components';

const PlaceBox = (props) => {
  const { title, place, like, createdDate } = props.data;
  return (
    <PlaceBoxContainer>
      <PlaceBoxImage />
      <PlaceTitle>{title}</PlaceTitle>
      <PlaceLoctaion>{place}</PlaceLoctaion>
      <div>{like}</div>
    </PlaceBoxContainer>
  );
};

const PlaceBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 25%;
`;

const PlaceBoxImage = styled.div`
  width: 100%;
  height: 218px;
  background-color: #ddd;
`;

const PlaceTitle = styled.div`
  display: flex;
  color: #3c6255;
  font-size: 24px;
  font-family: Noto Sans KR;
  font-weight: 700;
  padding: 15px 5px 5px 0px;
`;

const PlaceLoctaion = styled.div`
  display: flex;
  color: #999;
  font-size: 12px;
  font-family: Noto Sans KR;
  font-weight: 500;
  padding: 5px 5px 5px 0px;
`;

export default PlaceBox;