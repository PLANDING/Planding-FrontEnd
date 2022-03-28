import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { useState } from 'react/cjs/react.development';
import coin from '../../assets/imgs/coin.png';
import { setProjectInfo } from '../../modules/project';
import AcceptBtnBox from '../Alert/AcceptBtnBox';
import Card, { ProjectHead, Wrapper } from '../common/Card';
import { Flex } from '../common/Flex';
import InterestBox from '../common/InterestBox';
import JoinBtnBox from '../common/JoinBtnBox';
import ProfileBox from '../common/ProfileBox';
import RecruitmentBox from '../common/RecruitmentBox';
const CompletionCard = ({ projectObj, usage, idx, alertId }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const ms = new Date().getTime() - new Date(projectObj.createdAt).getTime();
  const date = Math.ceil(ms / (1000 * 3600 * 24));
  const [isEnd, setIsEnd] = useState(projectObj.isEnd);
  /*상세 페이지 이동 */
  const onClickCard = () => {
    axios.get(`/project/progress/detail/${projectObj.id}`).then((res) => {
      dispatch(setProjectInfo(res.data.project));
      history.push(`/completion/detail/${projectObj.id}`);
    });
  };
  useEffect(() => {
    if (!isEnd && date > 14) {
      axios
        .patch(`/project/end/${projectObj.id}`)
        .then((res) => res.status === 200 && setIsEnd(true));
    }
  }, []);
  return (
    <Card id={idx} onClick={onClickCard}>
      <ProjectHead label={projectObj.isEnd ? '모집 완료' : '모집 중'} idea={projectObj.idea}>
        <ProfileBox
          userId={projectObj.User.id}
          nickName={projectObj.User.nickName}
          profileUrl={projectObj.User.ProfileImg?.url}
          isNickName
        />
      </ProjectHead>

      <div className="row-container">
        <Wrapper className="col-container">
          <RecruitmentBox member_plan={projectObj.member_plan} member_dev={projectObj.member_dev} />
          <InterestBox interestArr={projectObj.Interests} />

          <div className="row-container">
            <Flex dir="row" alignCenter gap="5px">
              <span>펀딩 이력</span>
              <img src={coin} width="16px" />
            </Flex>
            <span id="funding-cnt">{projectObj.Fundings.length * 500}</span>
          </div>
        </Wrapper>
        {/* Button Group */}
        {/*usage=="isNone" -> none btn*/}
        {!isEnd &&
          usage != 'isNone' &&
          (usage == 'isAlert' ? (
            <AcceptBtnBox dDay={3} projectId={projectObj.id} alertId={alertId} />
          ) : (
            <JoinBtnBox dDay={3} project={{ id: projectObj.id, user: projectObj.User.id }} />
          ))}
      </div>
    </Card>
  );
};

export default CompletionCard;
