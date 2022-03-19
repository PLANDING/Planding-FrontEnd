import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import styled from 'styled-components';
import { ProjectHead } from '../components/common/Card';
import Header from '../components/common/Header';
import JoinBtnBox from '../components/common/JoinBtnBox';
import TopDiv from '../components/common/TopDIv';
import CategoryBox from '../components/FundingCompletionDetail/CategoryBox';
import CommentForm from '../components/FundingCompletionDetail/CommentForm';
import ContentBox from '../components/FundingCompletionDetail/ContentBox';
import MemberBox from '../components/FundingCompletionDetail/MemberBox';
import { setProjectInfo } from '../modules/project';
const FundingCompletionDetail = () => {
  const dispatch = useDispatch();

  const { userObj } = useSelector((state) => state.user);
  const { projectObj } = useSelector((state) => state.project);
  const isWriter = userObj?.id === projectObj.User.id;
  const { projectId } = useParams();
  useEffect(() => {
    axios.get(`/project/completion/detail/${projectId}`).then((res) => {
      dispatch(setProjectInfo(res.data.project));
    });
  }, []);
  return (
    <>
      <Header />
      <div className="main-container">
        <TopDiv pageLabel="펀딩 완료" subLabel="프로젝트에 참여하세요!" />
        <ProjectHead
          label={projectObj.isEnd ? '모집 완료' : '모집 중'}
          idea={projectObj.idea}
          headilne={projectObj.headline}
          width="80%"
          isDetail
          marginTop="30px"
        >
          {!isWriter && (
            <JoinBtnBox project={projectObj} dDay={3} width="240px" content={'모집 종료까지'} />
          )}
        </ProjectHead>
        <Wrapper>
          <Container className="col-container">
            <ContentBox
              writer={projectObj.User}
              isWriter={isWriter}
              content={projectObj.content}
              type="completion"
            />
            <CommentForm projectId={projectObj.id} commentArr={projectObj.Comments} />
          </Container>
          <SideContainer className="col-container">
            <CategoryBox category={projectObj.Category?.name} interestArr={projectObj.Interests} />
            <MemberBox
              user={projectObj.User}
              projectId={projectObj.id}
              member_plan={projectObj.member_plan}
              member_dev={projectObj.member_dev}
            />
          </SideContainer>
        </Wrapper>
      </div>
    </>
  );
};
const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  width: 80%;
  gap: 20px;
`;
const Container = styled.div`
  flex: 1;
  border: solid thin #37c56e;
  border-radius: 10px;
`;
const SideContainer = styled.div`
  gap: 30px;
  h4 {
    margin-top: 0;
  }
`;

export default FundingCompletionDetail;
