import axios from 'axios';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import Header from '../components/common/Header';
import TopDIv from '../components/common/TopDIv';
import CompletionCard from '../components/FundingCompletion/CompletionCard';
const FundingCompletion = () => {
  const { userObj } = useSelector((state) => ({ userObj: state.user.userObj }));
  const [completionArr, setCompletionArr] = useState();
  useEffect(() => {
    axios.get('/project/completion').then((res) => {
      setCompletionArr(res.data.project);
    });
  }, []);
  return (
    <>
      <Header />
      <div className="completion main-container">
        <TopDIv pageLabel={'펀딩완료'} subLabel={'프로젝트에 참여하세요!'} />

        <CardWrapper className="col-container">
          {completionArr === undefined ? (
            <Wrapper>잠시만 기다려주세요.</Wrapper>
          ) : (
            completionArr.map((completion, idx) => (
              <CompletionCard
                key={idx}
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
