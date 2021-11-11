
import React, { useEffect } from "react";
import { useState } from "react/cjs/react.development";
import styled from "styled-components";
import Header from "../components/common/Header";
import MatchingCard from "../components/Matching/MatchingCard";
import { Container } from "./Project";

const Matching = () => {
    const profile = {
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
                        {devProfileArr.map(profile => <MatchingCard profile={profile} />)}
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
border-bottom: solid thin #bcbcbc;
color: #37C56E;
padding-bottom: 30px;
`
const MainContainer = styled.div`
padding: 50px;
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