import React from 'react';
import styled from 'styled-components';

const TitleDiv = () => {
  return (
    <STitleDiv>
      <Category>공부</Category>
      <MainTitle>생각하는 숲</MainTitle>
      <Place>로욜라도서관 1관 4층</Place>
    </STitleDiv>
  );
};

const STitleDiv = styled.div`
  text-align: center;
  margin-top: 100px;
`;

const Category = styled.h2`
  color: #3c6255;
  font-family: Noto Sans KR;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
const MainTitle = styled.h1`
  color: #000;
  font-family: Noto Sans KR;
  font-size: 24px;
  font-style: normal;
  font-weight: 900;
  line-height: normal;
  margin-top: 4px;
`;
const Place = styled.h3`
  color: #999;
  font-family: Noto Sans KR;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-top: 4px;
`;

export default TitleDiv;
