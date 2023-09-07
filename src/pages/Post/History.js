import React from 'react';
import styled from 'styled-components';
import TitleDiv from './TitleDiv';

const MediaDiv = styled.div`
  margin: 0px auto;
  min-height: 100vh;
  width: 900px;
  color: #2c2c2c;
  background-color: white;
  @media screen and (max-width: 700px) {
    width: 100%;
  }
`;

const History = () => {
  return (
    <MediaDiv>
      <TitleDiv />
      <PostHistoryTitle>문서 역사</PostHistoryTitle>
      <PostHistoryList>
        <Time>• 2023-08-24 18:00:29 </Time>
        <Writer>@youmap</Writer>
      </PostHistoryList>
    </MediaDiv>
  );
};

const PostHistoryTitle = styled.h2`
  color: #000;
  font-family: Noto Sans KR;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-top: 60px;
  margin-bottom: 20px;
`;

const PostHistoryList = styled.h3`
  display: flex;
  gap: 5px;
`;

const Time = styled.h4`
  color: #000;
  font-family: Noto Sans KR;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
const Writer = styled.h4`
  color: #000;
  font-family: Noto Sans KR;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export default History;
