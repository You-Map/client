import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import profileImg from '../assets/profile.png';

const Header = () => {
  const nav = useNavigate();
  const goMap = () => {
    nav('/map');
  };
  const goPlace = () => {
    nav('/place');
  };
  const goPurpose = () => {
    nav('/purpose');
  };
  const goSocial = () => {
    nav('/social');
  };

  return (
    <HeaderContainer>
      <HeaderLogo onClick={goMap}>
        <FontAwesomeIcon icon={faLocationDot} />
        YouMap
      </HeaderLogo>
      <HeaderNavContainer>
        <span> | </span>
        <HeaderCommunity onClick={goSocial}>커뮤니티</HeaderCommunity>
        <HeaderProfile>
          <img
            src={profileImg}
            alt="Profile"
            width="30"
            height="30"
            border-radious="15"
          />
        </HeaderProfile>
      </HeaderNavContainer>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  width: 100%;
  height: 82px;
  background-color: #e7f6d4;

  position: sticky;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const HeaderLogo = styled.div`
  color: #3c6255;
  font-size: 24px;
  font-family: Gmarket Sans TTF;
  font-weight: 700;
  margin-left: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  cursor: pointer;
`;

const HeaderNavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  font-family: Noto Sans KR;
  color: #3c6255;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  margin-right: 24px;
`;

const HeaderPurpose = styled.div`
  margin-right: 28px;
  cursor: pointer;
`;

const HeaderCommunity = styled.div`
  margin-left: 28px;
  margin-right: 40px;
  cursor: pointer;
`;

const HeaderProfile = styled.div`
  cursor: pointer;
`;

export default Header;