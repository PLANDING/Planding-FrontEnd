import axios from 'axios';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import GreenBtn, { GrayBorderBtn } from '../common/Button';
import ProfileBox from '../common/ProfileBox';

const MemberBox = ({ user, projectId, member_plan, member_dev }) => {
  const { userObj } = useSelector((state) => ({ userObj: state.user.userObj })); //계정 user 정보
  const alertObj = {
    from: userObj?.id,
    to: user.id,
    projectId: projectId,
  };
  /* 참여하기 요청 */
  const onClickJoin = (type) => {
    if (
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
  };
  return (
    <Container>
      <HeadLine>팀원 모집</HeadLine>

      <h5>리더</h5>
      <ProfileBox nickName={user.nickName} />

      <h5>모집 인원</h5>
      <div className="row-container">
        <GrayBorderBtn>
          기획<span>{member_plan}명</span>
        </GrayBorderBtn>
        <GreenBtn onClick={() => onClickJoin('plan')}>기획 참여하기</GreenBtn>
      </div>
      <div className="row-container">
        <GrayBorderBtn>
          개발<span>{member_dev}명</span>
        </GrayBorderBtn>
        <GreenBtn onClick={() => onClickJoin('dev')}>개발 참여하기</GreenBtn>
      </div>
    </Container>
  );
};
export default MemberBox;
const Container = styled.div`
  border: solid thin #37c56e;
  border-radius: 10px;
  & > :is(h5, div) {
    width: 200px;
    margin: 20px;
  }
  .row-container {
    gap: 10px;
  }
  button {
    font-size: small;
    padding: 5px 10px;
  }
`;
const HeadLine = styled.h4`
  background-color: #37c56e;
  padding: 20px;
  width: 240px;
  border-radius: 9px 9px 0 0;
  color: white;
`;
