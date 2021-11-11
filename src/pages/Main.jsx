import React from 'react';
import styled from 'styled-components';
import Header from '../components/common/Header';
import MainFundingCompletion from '../components/Main/MainFundingCompletion';
import MainFundingIng from '../components/Main/MainFundingIng';

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
        <Wrapper className="col-container">
            <MainFundingCompletion projectObj={projectObj} />
            <MainFundingIng projectObj={projectObj} />
        </Wrapper>
        
        </>
    );
};

export default Main;

const Wrapper = styled.div`
    margin:50px 3%;
    justify-content: center;
    align-items: center;
    gap:50px;
`