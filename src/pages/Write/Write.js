import React, { useState } from 'react';
import styled from 'styled-components';
import {
  faCheck,
  faBed,
  faBookOpen,
  faPeopleGroup,
  faMapLocationDot,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PhotoUploader from './PhotoUploader';
import BuildingDropDown from './BuildingDropDown';

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

const Write = () => {
  // 1. BodyInput Height 자동 조정
  const [text, setText] = useState('');

  const handleChange = (e) => {
    const textarea = e.target;
    textarea.style.height = 'auto'; // Reset height to auto
    textarea.style.height = `${textarea.scrollHeight}px`; // Set the height to the scrollHeight
    setText(e.target.value);
  };

  // 2. Category multi select button
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleButtonClick = (option) => {
    if (selectedOptions.includes(option)) {
      // If the option is already selected, remove it from the selection
      setSelectedOptions(selectedOptions.filter((item) => item !== option));
    } else {
      // If the option is not selected, add it to the selection
      setSelectedOptions([...selectedOptions, option]);
    }
  };

  const isOptionSelected = (option) => selectedOptions.includes(option);

  console.log(selectedOptions);

  // 3. Text Counter
  const maxLength = 20;
  const [title, setTitle] = useState('');
  const [remainingChars, setRemainingChars] = useState(0);

  const handleTitleChange = (e) => {
    const inputText = e.target.value;
    if (inputText.length <= maxLength) {
      setTitle(inputText);
      setRemainingChars(inputText.length);
    }
  };

  // 4. Image Count
  const [imageCount, setImageCount] = useState(0); // Initialize with 0 images

  const handleImageCountChange = (count) => {
    // This function receives the image count from the child component
    setImageCount(count);
  };

  return (
    <MediaDiv>
      <SubmitButtonDiv>
        <SubmitButton>
          <FontAwesomeIcon icon={faCheck} size="xl" />
          발행
        </SubmitButton>
      </SubmitButtonDiv>

      <InfoBox>
        <InfoLine>
          <InfoTitle>카테고리</InfoTitle>
          <CategoryDiv>
            <Category
              selected={isOptionSelected('Option 1')}
              onClick={() => handleButtonClick('Option 1')}
            >
              {' '}
              <FontAwesomeIcon icon={faBookOpen} style={{ fontSize: '10px' }} />
              공부
            </Category>
            <Category
              selected={isOptionSelected('Option 2')}
              onClick={() => handleButtonClick('Option 2')}
            >
              {' '}
              <FontAwesomeIcon
                icon={faPeopleGroup}
                style={{ fontSize: '10px' }}
              />
              팀플
            </Category>
            <Category
              selected={isOptionSelected('Option 3')}
              onClick={() => handleButtonClick('Option 3')}
            >
              {' '}
              <FontAwesomeIcon icon={faBed} style={{ fontSize: '10px' }} />
              휴식
            </Category>
            <Category
              selected={isOptionSelected('Option 4')}
              onClick={() => handleButtonClick('Option 4')}
            >
              {' '}
              <FontAwesomeIcon
                icon={faMapLocationDot}
                style={{ fontSize: '10px' }}
              />
              경로
            </Category>
          </CategoryDiv>
          <InfoTitle>건물</InfoTitle>
          <BuildingDropDown />
        </InfoLine>
        <InfoLine>
          <InfoTitleDiv>
            <InfoDiv>
              <InfoTitle>제목</InfoTitle>
              <InfoSubtitle>{remainingChars}/20</InfoSubtitle>
            </InfoDiv>
            <TitleInput
              placeholder="예) 생각하는 숲"
              value={title}
              onChange={handleTitleChange}
            />
          </InfoTitleDiv>
          <InfoTitle>장소</InfoTitle>
          <PlaceInput placeholder="예) 로욜라 도서관 1관 4층" />
        </InfoLine>
      </InfoBox>
      <InfoBox>
        <InfoLine style={{ marginTop: '20px' }}>
          <InfoPhotoDiv>
            <InfoDiv>
              <InfoTitle>사진</InfoTitle>
              <InfoSubtitle>{imageCount}/10</InfoSubtitle>
            </InfoDiv>
          </InfoPhotoDiv>
          <PhotoUploader onImageCountChange={handleImageCountChange} />
        </InfoLine>
      </InfoBox>
      <BodyInput
        onChange={handleChange}
        rows={1}
        value={text}
        placeholder="개요, 시설, 꿀팁, 가는 방법 등의 정보를 입력해주세요."
      />
    </MediaDiv>
  );
};

const SubmitButtonDiv = styled.div`
  padding: 23px;
  display: flex;
  justify-content: right;
  margin-top: 70px;
`;

const SubmitButton = styled.button`
  border-radius: 10px;
  background: #3c6255;
  border: none;
  height: 30px;
  color: #fff;
  text-align: right;
  font-family: Noto Sans KR;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 25px;
  padding: 6px 13px;
  cursor: pointer;
`;

const InfoBox = styled.div`
  border-bottom: 1px solid #c7c7c7;
  padding: 10px;
`;

const InfoLine = styled.div`
  display: flex;
  padding-bottom: 20px;
`;

const InfoTitleDiv = styled.div`
  display: flex;
`;

const InfoDiv = styled.div`
  text-align: center;
`;

const InfoTitle = styled.h1`
  color: #999;
  text-align: center;
  font-family: Noto Sans KR;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  width: 100px;
`;

const InfoSubtitle = styled.h2`
  color: #dadada;
  text-align: center;
  font-family: Noto Sans KR;
  font-size: 10px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const CategoryDiv = styled.div`
  display: flex;
  padding-right: 91px;
`;

const Category = styled.button`
  width: 48px;
  background-color: ${(props) => (props.selected ? '#3C6255' : 'white')};
  border-radius: 5px;
  border: 0.5px solid ${(props) => (props.selected ? '#3C6255' : '#dadada')};
  padding: 3px 5px;
  margin-left: 6px;
  color: ${(props) => (props.selected ? '#fff' : '#dadada')};
  font-family: Noto Sans KR;
  font-size: 10px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3px;
  cursor: pointer;
`;

const TitleInput = styled.input`
  width: 100%;
  color: black;
  font-family: Noto Sans KR;
  font-size: 24px;
  font-style: normal;
  font-weight: 900;
  line-height: normal;
  border: none;
  &::placeholder {
    color: #dadada;
  }
  &:focus {
    outline: none;
  }
`;

const PlaceInput = styled.input`
  color: black;
  font-family: Noto Sans KR;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  border: none;
  &::placeholder {
    color: #dadada;
  }
  &:focus {
    outline: none;
  }
`;

const InfoPhotoDiv = styled.div`
  display: flex;
`;

const BodyInput = styled.textarea`
  color: black;
  font-family: Noto Sans KR;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  border: none;
  width: 100%;
  height: 100%;
  resize: none;
  padding: 30px;
  &::placeholder {
    color: #dadada;
  }
  &:focus {
    outline: none;
  }
`;

export default Write;
