
import React, { useEffect } from "react";
import { useState } from "react/cjs/react.development";
import styled from "styled-components";
import Header from "../components/common/Header";
import MatchingCard from "../components/Matching/MatchingCard";
import { Container } from "./Project";

const Matching = () => {
    /*dummyData*/
    const projectObj = {
        idea: "이미지 인식을 활용한 앱 서비스",
        isCompletion: true,
        isEnd:false,
        member_plan: 2,
        member_dev: 2,
        User: { nickName: "닉네임" },
        Interests: [{ name: "안드로이드" }, { name: "데이터 분석" }, { name: "앱 서버" }],
        //+ funding count
    }
    const profile = {
        id:0,
        nickName: "gamza",
        git: "https://github.com/PLANDING",
        site: "https://www.notion.so/",
        Interests: [{ name: "데이터 분석" }, { name: "빅데이터" }],
        Skills: [{ name: "R" }, { name: "python" }],
    }
    const [devProfileArr, setDevProfileArr] = useState([]);
    useEffect(() => {
        setDevProfileArr([profile, profile])
    }, [])
    return (
        <>
            <Header />
            <Container>
                <Headline>당신의 프로젝트에 꼭 맞는 개발자를 추천합니다.</Headline>
                <MainContainer>
                    <VerLine />
                    <Wrapper className="col-container">
                        {devProfileArr.map(profile => <MatchingCard profile={profile} projectObj={projectObj}/>)}
                    </Wrapper>
                </MainContainer>
            </Container>
        </>
    )
}
export default Matching;
const Headline = styled.h1`
font-size: x-large;
font-weight: lighter;
width: 100%;
text-align: center;
color: #37C56E;
padding-bottom: 50px;
border-bottom: solid thin #dddddd;
`
const MainContainer = styled.div`
padding: 50px;
margin-top: 50px;
`
const Wrapper = styled.div`
gap: 30px;
`
const VerLine = styled.div`
border-left: solid thin #37C56E;
height: 80%;
position: absolute;
z-index: -1;
transform: translate(30px, 30px);
`