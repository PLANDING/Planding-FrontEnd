import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import GreenBtn from './Button';

const JoinBtnBox = ({ dDay, content, width, project }) => {
  const { userObj, isLoggedin } = useSelector((state) => state.user); //계정 user 정보
  const [isProject, setIsProject] = useState(false);
  const history = useHistory();
  const alertObj = {
    from: userObj?.id,
    to: project.user,
    projectId: project.id,
  };
  const onClickJoin = (type, event) => {
    event.stopPropagation();
    if (!isLoggedin) {
      if (window.confirm('로그인이 필요합니다.')) history.push('/login');
      return;
    }
    if (isProject) {
      alert('참여중인 프로젝트가 있습니다.');
      history.push('/completion');
    } else {
      if (!userObj.slackId) {
        alert('참여전, 팀원 소통을 위한 슬랙 아이디를 설정해주세요.');
      } else if (
        userObj.slackId &&
        window.confirm(
          '해당 프로젝트에 참여요청 하시겠습니까?\n(작성자가 수락 시, 프로젝트에 참여가능 합니다.)',
        )
      ) {
        axios
          .post('/alert/request', {
            ...alertObj,
            content: `님이 당신의 프로젝트의 ${
              type == 'plan' ? '기획자' : '개발자'
            }로 참여를 요청했습니다.`,
          })
          .then((res) => res.status == 200 && alert('참여요청이 완료되었습니다.'));
      }
    }
  };

  useEffect(() => {
    axios.get(`/myProject/${userObj?.id}`).then((res) => {
      res.status === 204 ? setIsProject(false) : setIsProject(true);
    });
  }, []);

  return (
    <BtnBox width={width} className="col-container">
      <div className="col-container">
        <span>
          {content}
          <Dday>D-{dDay}</Dday>
        </span>
        <GreenBtn onClick={(e) => onClickJoin('plan', e)} animation>
          기획 참여하기
        </GreenBtn>
        <GreenBtn onClick={(e) => onClickJoin('dev', e)} animation>
          개발 참여하기
        </GreenBtn>
      </div>
    </BtnBox>
  );
};
export const BtnBox = styled.div`
  z-index: 99;
  align-items: flex-end;
  flex: 1;
  align-self: flex-end;
  & > .col-container {
    gap: 10px;
    width: ${(porps) => porps.width};
  }
  span {
    text-align: center;
    font-weight: bold;
    color: #5f5f5f;
  }
`;
const Dday = styled.div`
  color: #37c56e;
  margin-left: 5px;
`;
export default JoinBtnBox;
