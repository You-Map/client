import {
  faBed,
  faBookOpen,
  faMapLocationDot,
  faUsers,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import PlaceBox from './PlaceBox';
import styled from 'styled-components';

const PlaceContainer = ({ data, purpose }) => {
  let [posts, setPosts] = useState(data);
  const sortPostsLike = () => {
    const sortedPosts = [...posts].sort((a, b) => (a.like > b.like ? -1 : 1));
    setPosts(sortedPosts);
  };
  const sortPostsDate = () => {
    const sortedPosts = [...posts].sort((a, b) =>
      a.createdDate > b.createdDate ? -1 : 1
    );
    setPosts(sortedPosts);
  };

  return (
    <div>
      {purpose === 'rest' ? (
        <>
          <PurposeContainer>
            <PlacePurpose>
              <FontAwesomeIcon icon={faBed} />
              휴게
            </PlacePurpose>
            <PurposeButton>
              <button onClick={sortPostsLike}>인기순</button>
              <button onClick={sortPostsDate}>최신순</button>
            </PurposeButton>
          </PurposeContainer>
        </>
      ) : (
        <></>
      )}
      {purpose === 'study' ? (
        <>
          <PurposeContainer>
            <PlacePurpose>
              <FontAwesomeIcon icon={faBookOpen} />
              공부
            </PlacePurpose>
            <PurposeButton>
              <button onClick={sortPostsLike}>인기순</button>
              <button onClick={sortPostsDate}>최신순</button>
            </PurposeButton>
          </PurposeContainer>
        </>
      ) : (
        <></>
      )}
      {purpose === 'team' ? (
        <>
          <PurposeContainer>
            <PlacePurpose>
              <FontAwesomeIcon icon={faUsers} />
              팀플
            </PlacePurpose>
            <PurposeButton>
              <button onClick={sortPostsLike}>인기순</button>
              <button onClick={sortPostsDate}>최신순</button>
            </PurposeButton>
          </PurposeContainer>
        </>
      ) : (
        <></>
      )}
      {purpose === 'path' ? (
        <>
          <PurposeContainer>
            <PlacePurpose>
              <FontAwesomeIcon icon={faMapLocationDot} />
              경로
            </PlacePurpose>
            <PurposeButton>
              <button onClick={sortPostsLike}>인기순</button>
              <button onClick={sortPostsDate}>최신순</button>
            </PurposeButton>
          </PurposeContainer>
        </>
      ) : (
        <></>
      )}
      <PlaceListContainer>
        <PlaceBox data={posts[0]} />
        <PlaceBox data={posts[1]} />
        <PlaceBox data={posts[2]} />
      </PlaceListContainer>
    </div>
  );
};

const PlaceListContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  height: 370;
`;

const PurposeContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 60px 60px 20px 100px;
`;

const PlacePurpose = styled.div`
  display: flex;
  gap: 10px;
  color: #3c6255;
  font-size: 32px;
  font-family: Noto Sans KR;
  font-weight: 700;
`;

const PurposeButton = styled.button`
  margin-right: 40px;
`;

export default PlaceContainer;