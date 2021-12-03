import styled from "styled-components";
import { ProjectHead } from "../components/common/Card";
import JoinBtnBox from "../components/common/JoinBtnBox";
import Header from "../components/common/Header";
import TopDiv from "../components/common/TopDIv";
import ContentBox from "../components/FundingCompletionDetail/ContentBox";
import CommentForm from "../components/FundingCompletionDetail/CommentForm";
import CategoryBox from "../components/FundingCompletionDetail/CategoryBox";
import MemberBox from "../components/FundingCompletionDetail/MemberBox";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import axios from "axios";
import { setProjectInfo } from "../modules/project";
const FundingCompletionDetail = () => {
    const dispatch = useDispatch();
    const { projectObj } = useSelector(state => ({ projectObj: state.project.projectObj }));

    useEffect(() => {
        axios.get(`/project/completion/detail/${projectObj.id}`)
            .then(res => {
                dispatch(setProjectInfo(res.data.project));
            });
    }, []);
    return (<>
        <Header />
        <div className="main-container">
            <TopDiv pageLabel="펀딩 완료" subLabel="프로젝트에 참여하세요!" />
            <ProjectHead label={projectObj.isCompletion ? "모집 완료" : "모집 중"} idea={projectObj.idea} headilne={projectObj.headilne} width="80%" isDetail>
                <JoinBtnBox project={projectObj} dDay={3} width="240px" content={"모집 종료까지"} />
            </ProjectHead>
            <Wrapper>
                <Container className="col-container">
                    <ContentBox writer={projectObj.User} content={projectObj.content} />
                    <CommentForm projectId={projectObj.id} commentArr={projectObj.Comments} />
                </Container>
                <SideContainer className="col-container">
                    <CategoryBox category={projectObj.Category.name} interestArr={projectObj.Interests} />
                    <MemberBox user={projectObj.User} projectId={projectObj.id} member_plan={projectObj.member_plan} member_dev={projectObj.member_dev} />
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