import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import styled from 'styled-components';
import { setProjectInfo } from '../../modules/project';
import AcceptBtnBox from '../Alert/AcceptBtnBox';
import Card, { ProjectHead, Wrapper } from '../common/Card';
import FundingBtnBox from '../common/FundingBtnBox';
import FundingGage from '../common/FundingGage';
import InterestBox from '../common/InterestBox';
import ProfileBox from '../common/ProfileBox';
const ProgressCard = ({ projectObj, usage, idx }) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const { isLoggedin, userObj } = useSelector((state) => ({
    isLoggedin: state.user.isLoggedin,
    userObj: state.user.userObj,
  }));

  const [progress, setProgress] = useState(projectObj);
  const ms = new Date().getTime() - new Date(projectObj.createdAt).getTime();
  const date = Math.ceil(ms / (1000 * 3600 * 24));
  useEffect(() => {
    if (!progress.isEnd && date > 7) {
      progress.Fundings.length >= 6 && axios.patch(`/project/complete/${projectObj.id}`);

      axios
        .patch(`/project/end/${projectObj.id}`)
        .then((res) => res.status === 200 && setProgress((p) => ({ ...p, isEnd: true })));
    }
  }, []);

  const [isFunding, setIsFunding] = useState(
    isLoggedin ? projectObj.Fundings.findIndex((i) => i.User.id == userObj?.id) != -1 : false,
  );
  useEffect(() => {
    axios.get(`/project/card/${projectObj.id}`).then((res) => {
      res.status === 200 && setProgress(res.data.project);
    });
  }, [isFunding]);

  const onClickCard = () => {
    axios.get(`/project/progress/detail/${projectObj.id}`).then((res) => {
      dispatch(setProjectInfo(res.data.project));
      history.push(`/progress/detail/${projectObj.id}`);
    });
  };

  return (
    <Card border id={idx} onClick={onClickCard}>
      <ProjectHead label={progress.isEnd ? '펀딩 마감' : '펀딩진행 중'} idea={progress.idea}>
        <ProfileBox
          nickName={progress.User.nickName}
          userId={progress.User.id}
          profileUrl={progress.User.ProfileImg?.url}
        />
      </ProjectHead>
      <div className="row-container">
        <Wrapper className="col-contaienr main-wrapper" onClick={onClickCard}>
          <CategoryWrapper className="row-container">
            <span>카테고리</span>
            <span>{'>'}</span>
            <span>{progress.Category?.name}</span>
          </CategoryWrapper>

          <InterestBox interestArr={progress.Interests} />

          <FundingGage
            gage={((progress.Fundings.length * 500) / 30).toFixed(1)}
            fundingCnt={progress.Fundings.length * 500}
          />
        </Wrapper>

        {!progress.isEnd &&
          usage !== 'isNone' &&
          (usage === 'isAlert' ? (
            <AcceptBtnBox dDay={7 - date} />
          ) : (
            <FundingBtnBox
              dDay={7 - date}
              projectId={progress.id}
              userId={userObj?.id}
              isFunding={isFunding}
              setIsFunding={setIsFunding}
            />
          ))}
      </div>
    </Card>
  );
};
export default ProgressCard;

const CategoryWrapper = styled.div`
  span:nth-child(3) {
    font-weight: normal;
  }
`;
