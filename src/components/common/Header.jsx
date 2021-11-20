import { faBell } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router';
import styled from 'styled-components';
import logoSrc from '../../assets/imgs/logo.png';
import AlertModal from './AlertModal';
import { GreenBorderBtn } from './Button';
import Modal from './Modal';
import ProfileBox from './ProfileBox';
const Header = () => {
    const location = useLocation();
    const history = useHistory();

    const isLoggedIn = useSelector(state => ({ isLoggedIn: state.user.isLoggedIn }));

    const onClickNav = (e) => {
        history.push("/" + e.target.id);
    }

    const [isOpenModal, setIsOpenModal] = useState(false);

    const onClickAlert = () => {
        setIsOpenModal(prev => !prev);
    }
    return (<Container className="row-container">
        <LogoWrapper className="row-container" onClick={onClickNav} >
            <img src={logoSrc} width="100px" />
            <span>당신의 아이디어에 펀딩합니다</span>
        </LogoWrapper>

        <Nav className="row-container">
            <Button onClick={onClickNav} id="completion" cur={location.pathname == "/completion" }>펀딩 완료</Button>
            <Button onClick={onClickNav} id="progress" cur={location.pathname == "/progress"}>펀딩 진행</Button>
            <Button onClick={onClickNav} id="project" cur={location.pathname == "/project"}>나의 프로젝트</Button>
            {isLoggedIn ?
                <>
                    <AlertButton>
                        <FontAwesomeIcon id="bell" icon={faBell} color={"#37C56E"} onClick={onClickAlert} />
                        <Modal setIsOpen={setIsOpenModal}>{isOpenModal && <AlertModal />}</Modal>
                    </AlertButton>
                    <ProfileBox onClick={onClickNav} id="profile" />
                </>
                :
                <GreenBorderBtn onClick={onClickNav} id="login">로그인</GreenBorderBtn>}
        </Nav>
    </Container>)
}
export default Header;
const Container = styled.div`
    height: 100px;
`
const LogoWrapper = styled.div`
    margin-left: 50px;
    cursor: pointer;
    span{
        font-size: small;
        font-weight: lighter;
        align-self: flex-end;
        margin-bottom: 10px;
    }
`
const Nav = styled.nav`
    gap: 50px;
    flex: 1;
    justify-content: right;
    margin-right: 50px;
`
const Button=styled.button`
    ${props=>props.cur&&`
        color: #37C56E;
        font-weight: bold;
    `}
`
const AlertButton=styled.button`
    #bell{
        font-size: x-large;
    }
`