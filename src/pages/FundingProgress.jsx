import { useEffect, useState } from 'react';
import ProgressCard from '../components/FundingProgress/ProgressCard';
import Header from '../components/common/Header';
import TopDIv from '../components/common/TopDIv';
import { CardWrapper } from './FundingCompletion';
import { useSelector } from 'react-redux';
import axios from 'axios';
import styled from 'styled-components';
import GreenBtn from '../components/common/Button';
import { useHistory } from 'react-router';
import FilterTool from '../components/common/FilterTool';
const FundingProgress = () => {
  const { userObj, isLoggedin } = useSelector((state) => state.user);
  const [progressArr, setProgressArr] = useState();
  const [isProgress, setIsProgress] = useState(false);
  useEffect(() => {
    axios.get('/project/progress').then((res) => {
      setProgressArr(res.data.project);
    });
    userObj &&
      axios.get(`/user/${userObj?.id}`).then((res) => {
        const userProgress = res.data.user.Progress;
        typeof userProgress === 'undefined' ? setIsProgress(false) : setIsProgress(true);
      });
  }, []);
  const history = useHistory();
  const onClickCreation = () => {
    if (!isLoggedin && window.confirm('로그인 후, 이용 가능합니다.')) {
      history.push('/creation');
    } else if (isLoggedin) {
      isProgress ? alert('진행중인 펀딩이나 프로젝트가 존재합니다.') : history.push('/creation');
    }
  };
  return (
    <>
      <Header />
      <div className="main-container">
        <TopDIv pageLabel={'펀딩 진행'} subLabel={'프로젝트에 펀딩하세요!'} isGreen>
          <GreenBtn onClick={onClickCreation} animation>
            펀딩 생성
          </GreenBtn>
        </TopDIv>
        <FilterTool />
        <CardWrapper className="col-container">
          {progressArr === undefined ? (
            <Wrapper>잠시만 기다려주세요.</Wrapper>
          ) : (
            progressArr.map((progress, idx) => (
              <ProgressCard
                key={idx}
                projectObj={progress}
                idx={idx}
                usage={userObj?.id === progress.User.id && 'isNone'}
              />
            ))
          )}
        </CardWrapper>
      </div>
    </>
  );
};
export default FundingProgress;
const Wrapper = styled.div`
  text-align: center;
  color: #37c56e;
  padding: 30vh;
`;
