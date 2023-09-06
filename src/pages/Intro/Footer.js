import styled from 'styled-components';
import { palette } from '../../style/palette';

const Footer = () => {
  return (
    <FooterContainer>
      <Text>멋쟁이사자처럼</Text>
    </FooterContainer>
  );
};

const FooterContainer = styled.footer`
  width: 100%;
  padding-top: 10rem;
  padding-bottom: 3rem;
  font-family: Gmarket Sans TTF;
  font-size: 12px;
  text-align: right;
  background-color: #efefef;
  position: relaive;
`;

const Text = styled.div`
  color: ${palette.brand_lv4};
  font-size: 1.2rem;
  position: relative;
  right: 50px;
`;

export default Footer;
