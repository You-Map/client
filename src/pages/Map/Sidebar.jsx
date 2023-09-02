import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMapPin,
  faBed,
  faBookOpen,
  faPeopleGroup,
  faMapLocationDot,
  faGuitar,
} from '@fortawesome/free-solid-svg-icons';

import Text from './Text';

const PurposeIcons = {
  휴게: faBed,
  공부: faBookOpen,
  팀플: faPeopleGroup,
  경로: faMapLocationDot,
  기타: faGuitar,
};

const Sidebar = ({ data, loading, change }) => {
  if (loading)
    return (
      <SidebarContainer>
        <LoadingBox>
          <FontAwesomeIcon icon={faMapPin} style={{ fontSize: '18px' }} />
          <Text children="장소를 선택해주세요." weight={500} size="18px" />
        </LoadingBox>
      </SidebarContainer>
    );
  else
    return (
      <SidebarContainer>
        {/* <StyledButton>{data.name}</StyledButton> */}
        <PurposeBox className={change ? 'on' : 'off'}>
          {data.purposes.map((it) => (
            <StyledButton>
              <FontAwesomeIcon
                icon={PurposeIcons[it.name]}
                style={{ fontSize: '18px' }}
              />
              <Text children={it.name} weight={500} size="18px" />
            </StyledButton>
          ))}
          {data.purposes.length % 2 !== 0 ? (
            <StyledButton style={{ opacity: 0, cursor: 'default' }}>
              <FontAwesomeIcon icon={faGuitar} style={{ fontSize: '18px' }} />
              <Text children={'기타'} weight={500} size="18px" />
            </StyledButton>
          ) : null}
        </PurposeBox>
      </SidebarContainer>
    );
};

const SidebarContainer = styled.div`
  position: absolute;
  left: 50px;
  bottom: 50px;

  width: 250px;
  height: auto;
  border-radius: 20px;
  background-color: #fff;
`;

const LoadingBox = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;

  border-radius: 20px;
  border-bottom: 5px solid #555;
  padding: 25px 0px;
`;

const PurposeBox = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 5px;

  padding: 20px 0;
  border-radius: 20px;

  overflow: hidden;

  &.on {
    animation: expand 2s linear forwards;
  }

  &.off {
    animation: expand2 2s linear forwards;
  }

  @keyframes expand {
    0% {
      max-height: 0px;
    }
    100% {
      max-height: 999px;
    }
  }

  @keyframes expand2 {
    0% {
      max-height: 0px;
    }
    100% {
      max-height: 999px;
    }
  }
`;

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  padding: 10px 20px;
  border-radius: 20px;

  border: none;
  background-color: #fff;
  color: #3c6255;

  cursor: pointer;

  &:hover {
    filter: brightness(80%);
  }
`;

export default Sidebar;
