import axios from "axios";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react/cjs/react.development";
import styled from "styled-components";
import GreenBtn from "../components/common/Button";
import { ProjectHead } from "../components/common/Card";
import FundingBtnBox from "../components/common/FundingBtnBox";
import FundingGage from "../components/common/FundingGage";
import Header from "../components/common/Header";
import TopDiv from "../components/common/TopDIv";
import CategoryBox from "../components/FundingCompletionDetail/CategoryBox";
import CommentForm from "../components/FundingCompletionDetail/CommentForm";
import ContentBox from "../components/FundingCompletionDetail/ContentBox";
import { setProjectInfo } from "../modules/project";
const FundingProgressDetail = () => {
    const dispatch = useDispatch();
    const { projectObj } = useSelector(state => ({ projectObj: state.project.projectObj }));
    const ms = new Date().getTime() - new Date(projectObj.createdAt).getTime();
    const date = Math.ceil(ms / (1000 * 3600 * 24));


    const {userObj}=useSelector(state=>({userObj:state.user.userObj}));
    const [isFunding, setIsFunding] = useState(projectObj.Fundings.findIndex(i => i.User.id == userObj.id) != -1);
    useEffect(() => {
        axios.get(`/project/progress/detail/${projectObj.id}`)
            .then(res => {
                dispatch(setProjectInfo(res.data.project));
            });
    }, []);
    return (<>
        <Header />
        <div className="main-container">
            <TopDiv pageLabel="펀딩 진행" subLabel="프로젝트에 펀딩하세요!" isGreen />
            <ProjectHead label={projectObj.isEnd? "펀딩 마감" : "펀딩진행 중"} idea={projectObj.idea} headilne={projectObj.headline} width="80%" isDetail>
                <SideBtnBox className="col-container">
                    <FundingBtnBox dDay={7 - date} projectId={projectObj.id} userId={userObj.id} isfunding={isFunding} content="펀딩 종료까지" isRow/>
                    <FundingGage gage={(projectObj.Fundings.length * 500 / 30).toFixed(1)} fundingCnt={projectObj.Fundings.length * 500} width={"200px"} />
                </SideBtnBox>
            </ProjectHead>
            <Wrapper>
                <Container className="col-container">
                    <ContentBox writer={projectObj.User} content={projectObj.content} isGreen />
                    <CommentForm commentArr={projectObj.Comments} projectId={projectObj.id} />
                </Container>
                <SideContainer className="col-container">
                    <CategoryBox category={projectObj.Category.name} interestArr={projectObj.Interests} />
                </SideContainer>
            </Wrapper>
        </div>
    </>);
}
const Wrapper = styled.div`
    display:flex;
    flex-direction: row;
    align-items: flex-start;
    width: 80%;
    gap: 20px;
`
const Container = styled.div`
    flex: 1;
    border: solid thin #37C56E;
    border-radius: 10px;
`
const SideBtnBox = styled.div`
    width: 240px;
    button{
        padding: 5px 20px;
    }
    #d-day{
        color: #37C56E;
        flex: 1;
    }
    &>div:nth-child(1){
        gap: 5px;
        margin-bottom: 20px;
    }
    &>div:nth-child(1)>span{
        font-weight: bold;
        color: #5F5F5F;
    }
`
const SideContainer = styled.div`
    gap: 30px;
    h4{
        margin-top: 0;
    }
`



export default FundingProgressDetail;