import styled from "styled-components";
import { ProjectHead } from "../components/common/Card";
import JoinBtnBox from "../components/common/JoinBtnBox";
import Header from "../components/common/Header";
import TopDiv from "../components/common/TopDIv";
import ContentBox from "../components/FundingCompletionDetail/ContentBox";
import CommentForm from "../components/FundingCompletionDetail/CommentForm";
import CategoryBox from "../components/FundingCompletionDetail/CategoryBox";
import MemberBox from "../components/FundingCompletionDetail/MemberBox";
import FundingGage from "../components/common/FundingGage";
import GreenBtn from "../components/common/Button";
const FundingProgressDetail = () => {
    /*dummyData*/
    const projectObj = {
        idea: "이미지 인식을 활용한 앱 서비스",
        isCompletion: false,
        headilne: "프로젝트 주제 설명",
        content: "소개 \n 주요기능",
        member_plan: 2,
        member_dev: 2,
        User: { nickName: "닉네임" },
        Category: { name: "인공지능" },
        Interests: [{ name: "안드로이드" }, { name: "데이터 분석" }, { name: "앱 서버" }],
        //+ funding count
    }
    const Comments = [{
        User: {
            id: "",
            nickName: "사용자1",
        },
        content: "댓글내용",
        date: new Date(),
    }, {
        User: {
            id: "",
            nickName: "사용자2",
        },
        content: "댓글내용",
        date: new Date(),
    }]
    return (<>
        <Header />
        <div className="main-container">
            <TopDiv pageLabel="펀딩 진행" subLabel="프로젝트에 펀딩하세요!" isGreen/>
            <ProjectHead label={projectObj.isCompletion ? "펀딩마감" : "펀딩진행 중"} idea={projectObj.idea} headilne={projectObj.headilne} width="80%" isDetail>
                <SideBtnBox className="col-container">
                    <div className="row-container">
                        <span>펀딩 종료까지</span>
                        <span id="d-day">D-{5}</span>
                        <GreenBtn>펀딩 하기</GreenBtn>
                    </div>
                <FundingGage gage={80} fundingCnt={100} width={"200px"}/>
                </SideBtnBox>
            </ProjectHead>
            <Wrapper>
                <Container className="col-container">
                    <ContentBox user={projectObj.User} content={projectObj.content} isGreen/>
                    <CommentForm user={projectObj.User} commentArr={Comments} />
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
const SideBtnBox=styled.div`
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