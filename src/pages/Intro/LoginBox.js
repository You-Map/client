import React from 'react';
import styled from 'styled-components';
import { palette } from '../../style/palette';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
const BASE_URL = process.env.REACT_APP_BASE_URL;
const LoginBox = () => {
  const navigate = useNavigate();
  const isRegisterOpen = true;

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleRegister = () => {
    console.log('to register');
    navigate('/', { isRegisterOpen });
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    console.log(BASE_URL + 'user/login/');
    if (email === '') {
      alert('이메일을 입력해주세요.');
      return;
    } else if (password === '') {
      alert('비밀번호를 입력해주세요.');
      return;
    }

    try {
      const response = await axios.post(BASE_URL + 'user/login/', {
        email,
        password,
      });
      if (response.status === 200) {
        navigate('/map');
      }
      console.log(response);
    } catch (error) {
      alert('이메일 혹은 비밀번호가 틀렸습니다.');
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
      <Input
        onChange={handlePasswordChange}
        placeholder="Password"
        type="password"
        name="password"
        value={password}
      />
      <LoginButton onClick={handleLogin}>로그인</LoginButton>
      <LinkStyled onClick={handleRegister}>계정이 없나요? 가입하기</LinkStyled>
    </LoginBoxContainer>
  );
};

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

const SignupButton = styled.button`
  background-color: ${palette.brand_lv4};
  color: white;
  width: 65%;
  padding: 5px;
  border-radius: 10px;
  box-shadow: 0px 7px 29px 0px rgba(100, 100, 111, 0.2);
  border-style: none;
  font-family: Gmarket Sans TTF;

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

export default LoginBox;
