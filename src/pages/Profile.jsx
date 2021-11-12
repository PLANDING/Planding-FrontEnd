import React from "react";
import Header from '../components/common/Header';
import ProfileInfo from '../components/Profile/ProfileInfo';
import styled from 'styled-components';
import { GreenBorderBtn } from '../components/common/Button';
import ProfileCard from '../components/Profile/ProfileCard'
import CompleteProject from '../components/Profile/CompleteProject';

const Profile=()=>{
    const profile = {
        nickName: "gamza",
        git: "https://github.com/PLANDING",
        site: "https://www.notion.so/",
        Interests: [{ name: "데이터 분석" }, { name: "빅데이터" }],
        Skills: [{ name: "R" }, { name: "python" }],
    }
    const projectObj = {
        idea: "이미지 인식을 활용한 앱 서비스",
        isCompletion: false,
        User: { nickName: "닉네임" },
        Interests: [{ name: "안드로이드" }, { name: "데이터 분석" }, { name: "앱 서버" }],
        Category: { name: "인공지능" }
        //+ funding count
    }
    return(
    <>
        <Header/>
        <div className="main-container">
            <ProfileWrapper className="col-container">
                <ProfileInfo profile={profile}/>
            </ProfileWrapper>
            <CardWrapper className="col-container">
                <BtnWrapper>
                    <GreenBorderBtn>프로필 수정</GreenBorderBtn>
                </BtnWrapper>
                <ProfileCard projectObj={projectObj}/>
                <CompleteProject projectObj={projectObj}></CompleteProject>
            </CardWrapper>
        </div>
    </>);
}

export default Profile;

const ProfileWrapper = styled.div`
    margin-top: 50px;
`
const CardWrapper = styled.div`
    width:60%;
`

const BtnWrapper = styled.div`
    display:flex;
    justify-content: end;
`