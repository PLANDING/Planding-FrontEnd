import styled from "styled-components";
import { ProjectHead } from "../components/common/Card";
import JoinBtnBox from "../components/common/JoinBtnBox";
import Header from "../components/common/Header";
import TopDiv from "../components/common/TopDIv";
import ContentBox from "../components/FundingCompletionDetail/ContentBox";
import CommentForm from "../components/FundingCompletionDetail/CommentForm";
import CategoryBox from "../components/FundingCompletionDetail/CategoryBox";
import MemberBox from "../components/FundingCompletionDetail/MemberBox";
const FundingCompletionDetail = () => {
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
            <TopDiv pageLabel="펀딩 완료" subLabel="프로젝트에 참여하세요!" />
            <ProjectHead label={projectObj.isCompletion ? "모집 완료" : "모집 중"} idea={projectObj.idea} headilne={projectObj.headilne} width="80%" isDetail>
                <JoinBtnBox dDay={3} width="240px" content={"모집 종료까지"} />
            </ProjectHead>
            <Wrapper>
                <Container className="col-container">
                    <ContentBox user={projectObj.User} content={projectObj.content} />
                    <CommentForm user={projectObj.User} commentArr={Comments} />
                </Container>
                <SideContainer className="col-container">
                    <CategoryBox category={projectObj.Category.name} interestArr={projectObj.Interests} />
                    <MemberBox user={projectObj.User} member_plan={projectObj.member_plan} member_dev={projectObj.member_dev} />
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
const SideContainer = styled.div`
    gap: 30px;
    h4{
        margin-top: 0;
    }
`



export default FundingCompletionDetail;