import React from 'react';
import {
  faCheck,
  faBed,
  faBookOpen,
  faPeopleGroup,
  faMapLocationDot,
  faHeart,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
import TitleDiv from './TitleDiv';
import image1 from '../../assets/images/DummyImage1.jpeg';
import image2 from '../../assets/images/DummyImage2.avif';
import image3 from '../../assets/images/DummyImage3.avif';
import { Gallery } from 'react-grid-gallery';

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

const Post = () => {
  const images = [
    {
      src: image1,
    },
    {
      src: image2,
    },
    {
      src: image3,
    },
    {
      src: image2,
    },
  ];
  return (
    <MediaDiv>
      <TitleDiv />
      <MenuDiv>
        <Like>
          <FontAwesomeIcon icon={faHeart} style={{ fontSize: '10px' }} />
          126
        </Like>
        <MenuButton>역사</MenuButton>
        <MenuButton>편집</MenuButton>
      </MenuDiv>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      ></div>
      <Gallery images={images} enableImageSelection={false} />
      <BodyText>
        생각하는 숲은 로욜라 도서관 1관 3층에 위치해 있는 공부하기 좋은 장소다.
        책상 및 의자가 있다. <br />
        <br /> - 대부분의 좌석에 콘센트가 있다. <br /> - 시험 기간 때는 사람이
        많으니 일찍 가야 한다. <br />
        <br />
        로욜라 도서관 1관 출입구에서 계단이나 엘리베이터를 통해 두 개의 층을
        올라가면 왼쪽에 위치해 있다.{' '}
      </BodyText>
    </MediaDiv>
  );
};

const MenuDiv = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: end;
`;

const MenuButton = styled.div`
  width: 45px;
  height: 30px;
  border: 0.5px solid #3c6255;
  background: #fff;
  color: #3c6255;
  text-align: center;
  justify-content: center;
  line-height: 30px;
  font-family: Noto Sans KR;
  font-size: 11px;
  font-style: normal;
  font-weight: 500;
  transform: translateY(-20px);
  transition: all 0.5s ease;
  cursor: pointer;

  &:hover {
    background-color: #3c6255;
    color: white;
  }
`;

const Like = styled(MenuButton)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3px;
`;

const BodyText = styled.h3`
  margin: 30px 10px;
  color: #000;
  font-family: Noto Sans KR;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  white-space: pre-wrap;
`;

export default Post;
