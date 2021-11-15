import React from 'react';
import TopDiv from '../common/TopDIv'
import styled from 'styled-components';
import profile from '../../assets/imgs/user.png'
import { GreenBorderBtn } from '../common/Button';
import ProfileBox from '../common/ProfileBox';

const PersonalInfo = () => {
    return (
        <>
            <Wrapper className="col-container">
                <TopDiv pageLabel={"개인 정보"} isGreen={true}/>
                <Container className="row-container">
                <Photo className="col-container">
                    <img src={profile} alt="profile"/>
                    <GreenBorderBtn>이미지 선택</GreenBorderBtn>
                </Photo>
                <NickName className="col-container">
                    <span id="label">닉네임</span>
                    <div className="row-container" style={{gap:"10px"}}>
                    <input type="text" name="nickName" value={""} placeholder=""/>
                    <GreenBorderBtn>중복확인</GreenBorderBtn>
                    </div>
                </NickName>
                </Container>
            </Wrapper>
            
        </>
    );
};

export default PersonalInfo;

const Wrapper = styled.div`
    justify-content: center;
    align-items: center;
    width:70%;
    gap:100px;
    &>div{
        font-size:medium;
    }
`
const Container = styled.div`
    gap:50px;
`

const Photo = styled.div`
    width:100%;
    flex-grow :1;
    gap:20px;
    width:150px;
    height:150px;
`

const NickName = styled.div`
    width:100%;
    flex-grow : 1;
    gap:10px;
    &>span{
        font-size: large;
    }
`
