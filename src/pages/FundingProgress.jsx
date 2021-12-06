import { useEffect, useState } from "react";
import ProgressCard from "../components/FundingProgress/ProgressCard";
import Header from "../components/common/Header";
import TopDIv from "../components/common/TopDIv";
import { CardWrapper } from "./FundingCompletion";
import { useSelector } from "react-redux";
import axios from "axios";
import styled from "styled-components";
import GreenBtn from "../components/common/Button";
import { useHistory } from "react-router";
const FundingProgress = () => {
    const {userObj}=useSelector(state=>({userObj:state.user.userObj}));
    const [progressArr, setProgressArr] = useState();
    useEffect(() => {
        axios.get('/project/progress').then(res => {
            setProgressArr(res.data.project);
        });
    }, []);

    const history = useHistory();
    const onClickCreation = () => {
        history.push("/creation");
    }
    return (<>
        <Header />
        <div className="main-container">
            <TopDIv pageLabel={"펀딩 진행"} subLabel={"프로젝트에 펀딩하세요!"} isGreen><GreenBtn onClick={onClickCreation}>펀딩 생성</GreenBtn></TopDIv>
            <CardWrapper className="col-container">
                {progressArr === undefined ? <Wrapper>잠시만 기다려주세요.</Wrapper> :
                    progressArr.map((progress, idx) => <ProgressCard projectObj={progress} idx={idx} usage={userObj.id === progress.User.id && "isNone"}  />)}
            </CardWrapper>
        </div>
    </>);
}
export default FundingProgress;
const Wrapper = styled.div`
    text-align: center;
    color: #37C56E;
    padding: 30vh;
`
