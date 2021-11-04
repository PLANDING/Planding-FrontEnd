import react, { useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import styled from 'styled-components';
import { GreenBorderBtn } from './common/Button';
import ProfileBox from './ProfileBox';
const Header=()=>{
    const [isLoggedIn, setIsLoggedIn]=useState(false);
    const location= useLocation();
    const history= useHistory();
    const onClickNav=(e)=>{
        history.push("/"+e.target.id);
    }

    return(<Container className="row-container">
    <LogoWrapper className="row-container" onClick={onClickNav} >
        <img src={process.env.PUBLIC_URL+"/logo.png"} width="100px"/>
        <span>당신의 아이디어에 펀딩합니다</span>
    </LogoWrapper>
    <Nav className="row-container">
        <button onClick={onClickNav} id="completion" className={location.pathname=="/completion"&&"cur"}>펀딩 완료</button>
        <button onClick={onClickNav} id="progress" className={location.pathname=="/progress"&&"cur"}>펀딩 진행</button>
        <button onClick={onClickNav} id="project" className={location.pathname=="/project"&&"cur"}>나의 프로젝트</button>
        {isLoggedIn?
            <ProfileBox onClick={onClickNav} id="profile" profileUrl={"user.png"}/>
            :
            <GreenBorderBtn onClick={onClickNav} id="login">로그인</GreenBorderBtn>}
    </Nav>
    </Container>)
}
export default Header;
const Container=styled.div`
height: 100px;
`
const LogoWrapper=styled.div`
margin-left: 50px;
cursor: pointer;
span{
font-size: small;
font-weight: lighter;
align-self: flex-end;
margin-bottom: 10px;
}
`
const Nav=styled.nav`
gap: 50px;
flex: 1;
justify-content: right;
margin-right: 50px;
.cur{
color: #37C56E;
font-weight: bold;
}
`