import React, { useState } from 'react';
import styled from 'styled-components';

import ProfileImg from '../../assets/images/DefaultProfile.png';
import MyLiked from './MyLiked';
import MyEdited from './MyEdited';

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

const MyPage = () => {
  const [isLiked, setLiked] = useState(true);
  const [isEdited, setEdited] = useState(false);

  const handleLikedClick = () => {
    setEdited(false);
    setLiked(true);
  };

  const handleEditedClick = () => {
    setEdited(true);
    setLiked(false);
  };

  return (
    <MediaDiv>
      <ProfileBox>
        <ProfilePhoto />
        <UserId>@youmap</UserId>
      </ProfileBox>
      <TabBar isLiked={isLiked} isEdited={isEdited}>
        <button className="liked" onClick={handleLikedClick}>
          내가 좋아요 한 게시물
        </button>
        <button className="edited" onClick={handleEditedClick}>
          내가 편집한 게시물
        </button>
      </TabBar>
      {isLiked ? <MyLiked /> : <MyEdited />}
    </MediaDiv>
  );
};

const ProfileBox = styled.div`
  margin-top: 150px;
  margin-left: 10px;
`;
const ProfilePhoto = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 100px;
  background-image: url(${ProfileImg});
  background-size: cover;
  background-position: center;
  margin-bottom: 14px;
`;
const UserId = styled.h2`
  color: #000;
  font-family: Noto Sans KR;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const TabBar = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 70px;
  align-items: center;

  .liked {
    cursor: pointer;
    width: 50%;
    background-color: transparent;
    border-color: transparent;
    padding-bottom: 15px;
    font-family: Noto Sans KR;
    font-size: 14px;
    font-weight: 700;
    color: ${(props) => (props.isLiked ? 'black' : '#d9d9d9')};
    border-bottom: 2px solid ${(props) => (props.isLiked ? 'black' : '#d9d9d9')};
    display: block;
  }

  .edited {
    cursor: pointer;
    width: 50%;
    background-color: transparent;
    border-color: transparent;
    padding-bottom: 15px;
    font-family: Noto Sans KR;
    font-size: 14px;
    font-weight: 700;
    color: ${(props) => (props.isEdited ? 'black' : '#d9d9d9')};
    border-bottom: 2px solid
      ${(props) => (props.isEdited ? 'black' : '#d9d9d9')};
    display: block;
  }
`;

export default MyPage;
