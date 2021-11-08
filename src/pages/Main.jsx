import React from 'react';
import styled from 'styled-components';
import Header from '../components/common/Header';
import MainFundingCompletion from '../components/Main/MainFundingCompletion';
import MainProjectCard from '../components/Main/MainProjectCard';

const projectObj = {
    idea: "이미지 인식을 활용한 앱 서비스",
    isCompletion: false,
    User: { nickName: "닉네임" },
    Interests: [{ name: "안드로이드" }, { name: "데이터 분석" }, { name: "앱 서버" }],
    Category: { name: "인공지능" }
    //+ funding count
}

const Main = () => {
    return (
        <>
        <Header />
        <Wrapper>
            <MainFundingCompletion projectObj={projectObj} bgcolor={"#37C56E"}/>
        </Wrapper>
        
        </>
    );
};

export default Main;

const Wrapper = styled.div`
    display:flex;
    flex-direction: column;
    margin:50px 3%;
    justify-content: center;
    align-items: center;

`