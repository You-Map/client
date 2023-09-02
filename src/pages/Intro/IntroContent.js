import styled from 'styled-components';

const IntroContent = () => {
  return (
    <IntroContentContainer>
      <IntroContentTitle>
        <h2>그동안 알지 못했던 우리 학교의 장소</h2>
        <h1>학교 맞춤 지도</h1>
        <h1>YouMap</h1>
      </IntroContentTitle>
    </IntroContentContainer>
  );
};

const IntroContentContainer = styled.div`
  width: 100%;
`;

const IntroContentTitle = styled.div`
  margin: 15rem auto 0;
  margin-left: 10rem;
  font-family: Noto Sans KR;
  h1 {
    margin: 2rem auto;
    color: #3c6255;
    font-size: 120px;
    font-weight: 700;
  }
  h2 {
    color: #3c6255;
    font-size: 40px;
    font-weight: 500;
  }
`;

const IntroContentDescription = styled.p`
  margin: 3rem auto 5rem;
  margin-left: 10rem;
  color: #3c6255;
  font-size: 18px;
  font-family: Gmarket Sans TTF;
  font-weight: 500;
  line-height: 21px;
`;

export default IntroContent;
