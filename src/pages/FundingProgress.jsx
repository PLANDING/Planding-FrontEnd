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
import { useDispatch } from 'react-redux';
import { initFilterArr, setEntireProjectArr } from '../modules/fundingProject';
const FundingProgress = () => {
  const { userObj, isLoggedin } = useSelector((state) => state.user);
  const { projectArr } = useSelector((state) => state.fundingProject);
  const dispatch = useDispatch();

  const [isProgress, setIsProgress] = useState(false);
  useEffect(() => {
    axios.get('/project/progress').then((res) => {
      dispatch(setEntireProjectArr(res.data.project));
    });
    userObj &&
      axios.get(`/user/${userObj?.nickName}`).then((res) => {
        const userProgress = res.data.user.Progress;
        typeof userProgress === 'undefined' ? setIsProgress(false) : setIsProgress(true);
      });
    return () => {
      dispatch(initFilterArr());
    };
  }, []);
  const history = useHistory();
  const onClickCreation = () => {
    if (!isLoggedin && window.confirm('로그인 후, 이용 가능합니다.')) {
      history.push('/login');
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
        <CardWrapper dir="column">
          {projectArr.length === 0 ? (
            <Wrapper>해당 조건의 펀딩이 없습니다.</Wrapper>
          ) : (
            projectArr.map((progress, idx) => (
              <ProgressCard
                key={progress.id}
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
