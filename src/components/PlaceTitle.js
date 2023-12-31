import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const PlaceTitle = () => {
  const navigate = useNavigate();

  
  const goToRest = () => {
    navigate('/placerest');
  };
  return (
    <TitleContainer>
      <MainTtile>정하상관(J관)</MainTtile>
      <HorizontalLine />
      <SelectMenu>
        <All>전체</All>
        <Rest onClick={goToRest}>휴게</Rest>
        <Study>공부</Study>
        <Team>팀플</Team>
        <Path>경로</Path>
      </SelectMenu>
    </TitleContainer>
  );
};

const TitleContainer = styled.div`
  width: 100%;
  height: 160px;

  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const MainTtile = styled.div`
  width: 100%;
  color: #3c6255;
  font-family: Noto Sans KR;
  font-size: 48px;
  font-style: normal;
  font-weight: 900;
  line-height: normal;
`;

const HorizontalLine = styled.hr`
  width: 20%;
  margin: 0px 500px;
  border: 0px;
  border-top: 1px solid #3c6255;
`;

const SelectMenu = styled.div`
  display: flex;
  width: 20%;
  justify-content: space-around;
  align-items: center;

  color: #999;
  font-family: Noto Sans KR;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const All = styled.div``;
const Rest = styled.div``;
const Study = styled.div``;
const Team = styled.div``;
const Path = styled.div``;

export default PlaceTitle;
