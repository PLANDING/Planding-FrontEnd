import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import FilterTool from '../components/common/FilterTool';
import Header from '../components/common/Header';
import TopDIv from '../components/common/TopDIv';
import CompletionCard from '../components/FundingCompletion/CompletionCard';
import { initFilterArr, setEntireProjectArr } from '../modules/fundingProject';
const FundingCompletion = () => {
  const { userObj } = useSelector((state) => ({ userObj: state.user.userObj }));
  const { projectArr } = useSelector((state) => state.fundingProject);
  const dispatch = useDispatch();

  useEffect(() => {
    axios.get('/project/completion').then((res) => {
      dispatch(setEntireProjectArr(res.data.project));
    });
    return () => {
      dispatch(initFilterArr());
    };
  }, []);
  return (
    <>
      <Header />
      <div className="completion main-container">
        <TopDIv pageLabel={'펀딩완료'} subLabel={'프로젝트에 참여하세요!'} />
        <FilterTool />
        <CardWrapper className="col-container">
          {projectArr.length === 0 ? (
            <Wrapper>해당 조건의 펀딩이 없습니다.</Wrapper>
          ) : (
            projectArr.map((completion, idx) => (
              <CompletionCard
                key={completion.id}
                idx={idx}
                projectObj={completion}
                usage={userObj?.id === completion.User.id && 'isNone'}
              />
            ))
          )}
        </CardWrapper>
      </div>
    </>
  );
};
export const CardWrapper = styled.div`
  width: 80%;
  gap: 20px;
`;
const Wrapper = styled.div`
  text-align: center;
  color: #37c56e;
  padding: 30vh;
`;
export default FundingCompletion;
