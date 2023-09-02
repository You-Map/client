import styled from 'styled-components';
import { palette } from '../../style/palette';
import Modal from './Modal/Modal';
import LoginBox from './LoginBox';
import useModal from './Modal/useModal';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SignupBox from './SignupBox';

const Header = ({ isRegisterOpen }) => {
  const [isLoginOpen, toggleLoginModal] = useModal();
  const [isRegister, toggleRegisterModal] = useModal();

  return (
    <HeaderContainer>
      <HeaderLogo>
        <FontAwesomeIcon icon={faLocationDot} />
        YouMap
      </HeaderLogo>
      <HeaderButton onClick={toggleLoginModal}>Sign</HeaderButton>
      <Modal state={isLoginOpen} toggleModal={toggleLoginModal}>
        <LoginBox />
      </Modal>
      {isRegisterOpen ? (
        <Modal state={isRegister} toggleModal={toggleRegisterModal}>
          <SignupBox />
        </Modal>
      ) : (
        <></>
      )}
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  width: 100%;
  height: 6rem;
  background-color: ${palette.brand_lv1};

  position: sticky;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const HeaderLogo = styled.div`
  color: ${palette.brand_lv4};

  font-size: 24px;
  font-family: Gmarket Sans TTF;
  font-weight: 700;

  margin-left: 2rem;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const HeaderButton = styled.button`
  background-color: ${palette.brand_lv4};
  color: white;
  font-family: Gmarket Sans TTF;

  letter-spacing: 2px;

  margin-right: 2rem;
  border: none;
  border-radius: 999px;
  padding: 1rem;
  width: 12rem;

  &:hover {
    opacity: 70%;
    cursor: pointer;
  }
`;

export default Header;
