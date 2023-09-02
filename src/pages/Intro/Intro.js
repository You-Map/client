import React from 'react';
import IntroContent from './IntroContent';
import Header from './Header';

const Intro = ({ isRegisterOpen }) => {
  return (
    <>
      <Header isRegisterOpen={isRegisterOpen}></Header>
      <IntroContent></IntroContent>
    </>
  );
};

export default Intro;
