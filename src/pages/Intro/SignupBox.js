import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { palette } from '../../style/palette';
import axios from 'axios';
const BASE_URL = process.env.REACT_APP_BASE_URL;
const isValidEmail = (email) => {
  // 정규 표현식을 이용해서 이메일 형식이 올바른지 검사
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return emailPattern.test(email);
};

const SignupBox = () => {
  const [email, setEmail] = useState('');
  const [emailValid, setEmailValid] = useState(true);
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [nickname, setNickname] = useState('');
  const [school, setSchool] = useState('');

  const [verificationCode, setVerificationCode] = useState('');
  const [showVerification, setShowVerification] = useState(false);

  const handleVerificationCodeChange = (event) => {
    setVerificationCode(event.target.value);
  };

  const handleEmailChange = (event) => {
    const newEmail = event.target.value;
    setEmail(newEmail);
    setEmailValid(isValidEmail(newEmail)); // 이메일 유효성 여부 설정
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleNicknameChange = (event) => {
    setNickname(event.target.value);
  };

  const handleSchoolChange = (event) => {
    setSchool(event.target.value);
  };

  const handleSignup = async () => {
    try {
      const useData = {
        email,
        password,
        name,
        nickname,
        school,
      };

      const response = await axios.post(BASE_URL + 'user/signup/', useData);
      if (response.status === 200) {
        setShowVerification(true);
      }
      console.log(response);
    } catch (error) {
      console.error(error);
    } finally {
    }
  };
  return (
    <LoginBoxContainer>
      <Input
        onChange={handleEmailChange}
        placeholder="Email"
        type="email"
        name="email"
        value={email}
      />
      {!emailValid && <ErrorText>유효하지 않은 이메일입니다.</ErrorText>}
      <Input
        onChange={handlePasswordChange}
        placeholder="Password"
        type="password"
        name="password"
        value={password}
      />
      <Input
        onChange={handleNameChange}
        placeholder="Name"
        type="text"
        name="name"
        value={name}
      />
      <Input
        onChange={handleNicknameChange}
        placeholder="Nickname"
        type="text"
        name="nickname"
        value={nickname}
      />
      <Input
        onChange={handleSchoolChange}
        placeholder="School"
        type="text"
        name="school"
        value={school}
      />
      {showVerification && (
        <>
          <Input
            placeholder="Verification Code"
            type="text"
            value={verificationCode}
            onChange={handleVerificationCodeChange}
          />
          <LoginButton>이메일 인증하기</LoginButton>
        </>
      )}
      <LoginButton onClick={handleSignup} disabled={!emailValid}>
        회원가입
      </LoginButton>
      {/* 메인 페이지에서 로그인 창이 띄워진 상태로 이동하도록 수정해야 됨 */}
      <LinkStyled to="/">이미 계정이 있으신가요? 로그인하기</LinkStyled>
    </LoginBoxContainer>
  );
};

export default SignupBox;

const ErrorText = styled.p`
  color: red;
  font-size: 12px;
  margin-top: 5px;
  text-align: left;
  width: 65%;
`;

const LoginBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 350px;
  padding: 30px 0;
  text-align: center;
  align-items: center;
  justify-content: center;
  background-color: white;
  border-radius: 10px;
  font-family: Gmarket Sans TTF;
`;

const Input = styled.input`
  display: block;
  width: 65%;
  height: 25px;
  margin: 20px auto;
  padding: 5px;
  border-radius: 10px;
  border: 1px solid #3c6255;
  font-family: Gmarket Sans TTF;
`;

const LoginButton = styled.button`
  background-color: ${palette.brand_lv4};
  color: white;
  width: 65%;
  height: 40px;
  padding: 5px;
  border-radius: 10px;
  background: #3c6255;
  box-shadow: 0px 7px 29px 0px rgba(100, 100, 111, 0.2);
  border-style: none;
  font-family: Gmarket Sans TTF;
  margin-top: 20px;
  margin-bottom: 20px;

  &:hover {
    opacity: 70%;
    cursor: pointer;
  }
`;

const LinkStyled = styled(Link)`
  text-decoration: none; // Remove the underline
  color: ${palette.brand_lv4}; // Use the desired color for the link
  font-family: Gmarket Sans TTF;
  margin-top: 10px; // Adjust the margin as needed
  &:hover {
    opacity: 70%;
    cursor: pointer;
  }
`;
