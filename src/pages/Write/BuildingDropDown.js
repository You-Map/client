import React, { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

const DropdownContainer = styled.div`
  position: relative;
  width: 230px;
`;

const DropdownButton = styled.button`
  width: 100%;
  height: 25px;
  border-radius: 10px;
  border: 0.5px solid #3c6255;
  background: #fff;
  text-align: left;
  padding: 0 10px;
  cursor: pointer;
  display: flex;
  align-items: center; /* Center the icon vertically */
  justify-content: space-between; /* Add space between text and icon */
  font-family: Noto Sans KR;
  font-size: 12px;
`;

const DropdownList = styled.ul`
  position: absolute;
  width: 100%;
  max-height: 150px;
  overflow-y: auto;
  list-style: none;
  padding: 0;
  margin: 0;
  border: 0.5px solid #3c6255;
  border-radius: 0 0 10px 10px;
  background: #fff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
  font-family: Noto Sans KR;
  font-size: 12px;
`;

const DropdownItem = styled.li`
  padding: 5px 10px;
  cursor: pointer;

  &:hover {
    background-color: #f0f0f0;
  }
`;

const BuildingDropDown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const options = [
    '본관(A관)',
    '게페르트남덕우경제관(GN관)',
    '삼성 가브리엘관(GA관)',
    '금호아시아나 바오로 경영관(PA관)',
    '토마스 모어관(T관)',
    '마태오관(MA관)',
    '메리홀(M관)',
    '성이냐시오관(I관)',
    '엠마오관(E관)',
    '하비에르관(X관)',
    '다산관(D관)',
    '곤자가 국제학사(GH)',
    '곤자가 플라자(GP)',
    '떼이야르관(TE관)',
    '정하상관(J관)',
    '포스코 프란치스코관(F관)',
    '리치별관(RA관)',
    '아담샬관(AS관)',
    '리치과학관(R관)',
    '김대건관(K관)',
    '아루페관(AR관)',
    '체육관',
    '베르크만스 우정원(BW관)',
  ];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <DropdownContainer>
      <DropdownButton onClick={toggleDropdown}>
        {selectedOption || 'Select an option'}
        <FontAwesomeIcon
          icon={faChevronDown}
          style={{ marginLeft: '5px' }}
          color="#3c6255"
        />
      </DropdownButton>
      {isOpen && (
        <DropdownList>
          {options.map((option, index) => (
            <DropdownItem
              key={index}
              onClick={() => handleOptionSelect(option)}
            >
              {option}
            </DropdownItem>
          ))}
        </DropdownList>
      )}
    </DropdownContainer>
  );
};

export default BuildingDropDown;
