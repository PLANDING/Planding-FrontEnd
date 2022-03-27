import { faBell } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logoSrc from '../../assets/imgs/logo.png';
import AlertModal from './AlertModal';
import { GreenBorderBtn } from './Button';
import Modal from './Modal';
import ProfileBox from './ProfileBox';
const Header = () => {
  const { pathname } = useLocation();

  const { isLoggedin, userObj } = useSelector((state) => state.user);

  const [isOpenModal, setIsOpenModal] = useState(false);
  const [alertArr, setAlertArr] = useState([]);

  const onClickAlert = () => {
    axios.get(`/alert/limit/${userObj?.id}`).then((res) => {
      setAlertArr(res.data.Alerts);
    });
    setIsOpenModal((prev) => !prev);
  };

  return (
    <Container className="row-container">
      <LogoWrapper className="row-container" to="/">
        <img src={logoSrc} width="100px" />
        <span>당신의 아이디어에 펀딩합니다</span>
      </LogoWrapper>

      <Nav className="row-container">
        <Button to={'/completion'} cur={pathname === '/completion'}>
          펀딩 완료
        </Button>
        <Button to={'/progress'} cur={pathname === '/progress'}>
          펀딩 진행
        </Button>
        <Button to={'/project'} cur={pathname === '/project'}>
          나의 프로젝트
        </Button>
        {isLoggedin ? (
          <>
            <AlertButton>
              <FontAwesomeIcon id="bell" icon={faBell} color={'#37C56E'} onClick={onClickAlert} />
              <Modal setIsOpen={setIsOpenModal}>
                {isOpenModal && <AlertModal alertArr={alertArr} />}
              </Modal>
            </AlertButton>
            <ProfileBox
              profileUrl={userObj.ProfileImg?.url}
              userId={userObj.id}
              nickName={userObj?.nickName}
              isNickName={false}
            />
          </>
        ) : (
          <Link to="login">
            <GreenBorderBtn>로그인</GreenBorderBtn>
          </Link>
        )}
      </Nav>
    </Container>
  );
};
export default Header;
const Container = styled.div`
  height: 100px;
`;
const LogoWrapper = styled(Link)`
  margin-left: 50px;
  cursor: pointer;
  span {
    font-size: small;
    font-weight: lighter;
    align-self: flex-end;
    margin-bottom: 10px;
  }
`;
const Nav = styled.nav`
  gap: 50px;
  flex: 1;
  justify-content: right;
  margin-right: 50px;
`;
const Button = styled(Link)`
  ${(props) =>
    props.cur &&
    `
        color: #37C56E;
        font-weight: bold;
    `}
  &:hover {
    color: #37c56e;
    font-weight: bold;
  }
  transition: 0.3s;
`;
const AlertButton = styled.button`
  #bell {
    font-size: x-large;
  }
`;
