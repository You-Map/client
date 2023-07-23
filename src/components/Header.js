import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styled from 'styled-components';

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderLogo>
        <FontAwesomeIcon icon={faLocationDot} />
        YouMap
      </HeaderLogo>
      <HeaderNavContainer>
        <HeaderPurpose>목적</HeaderPurpose>
        <span> | </span>
        <HeaderCommunity>커뮤니티</HeaderCommunity>
        <HeaderProfile>
          <img alt="dummyProfile" src="../assets/dummyProfileImage.webp" />
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
`;

const HeaderNavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  font-family: Noto Sans KR;
  color: #3c6255;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  margin-right: 24px;
`;

const HeaderPurpose = styled.div`
  margin-right: 28px;
`;

const HeaderCommunity = styled.div`
  margin-left: 28px;
  margin-right: 40px;
`;

const HeaderProfile = styled.div``;

export default Header;
