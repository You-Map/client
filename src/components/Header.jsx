import styled from 'styled-components';
import Wrapper from './Wrapper';
import Logo from './Logo';
import Text from '../pages/Map/Text';

import ProfileImg from '../assets/Images/DefaultProfile.png';

const Header = () => {
  return (
    <HeaderWrapper bgColor={'#E7F6D4'}>
      <HeaderContainer>
        <Logo color="#3C6255" />
        <Flex>
          <NavButton
            children={<Text children="지도" weight={500} size="16px" />}
          />
          <NavButton
            children={<Text children="커뮤니티" weight={700} size="16px" />}
          />
          <Profile />
        </Flex>
      </HeaderContainer>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled(Wrapper)`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
`;

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
`;

const Flex = styled.div`
  display: flex;
  gap: 50px;
`;

const NavButton = styled.button`
  border: none;
  background-color: inherit;
  color: #3c6255;
  cursor: pointer;
`;

const Profile = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 999px;
  background-image: url(${ProfileImg});
  background-size: cover;
  background-position: center;
`;

export default Header;
