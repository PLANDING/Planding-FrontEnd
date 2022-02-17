import axios from 'axios';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import GreenBtn, { GrayBtn } from '../common/Button';

const AcceptBtnBox = ({ dDay, projectId, alertId }) => {
  const { userObj } = useSelector((state) => ({ userObj: state.user.userObj }));
  const onClickAccept = () => {
    axios.get(`/myProject/join/${projectId}/${userObj.id}`).then((res) => {
      if (res.status === 200) {
        alert('팀원으로 합류 되었습니다.\n 나의 프로젝트에서 확인해보세요.');
        axios.delete(`/alert/${alertId}`);
      }
    });
  };
  const onClickRefuse = () => {
    axios
      .delete(`/alert/${alertId}`)
      .then((res) => res.status === 200 && alert('요청을 거절하였습니다.'));
  };
  return (
    <Wrppaer className="col-container">
      <div className="col-container">
        <span id="d-day">D-{dDay}</span>
        <GreenBtn onClick={onClickAccept}>수락</GreenBtn>
        <GrayBtn onClick={onClickRefuse}>거절</GrayBtn>
      </div>
    </Wrppaer>
  );
};
export default AcceptBtnBox;
const Wrppaer = styled.div`
  align-items: flex-end;
  flex: 1;
  align-self: flex-end;
  & > .col-container {
    gap: 10px;
  }
  button {
    padding: 10px 20px;
    font-size: medium;
    width: 100px;
  }
  span {
    text-align: center;
    font-weight: bold;
    color: #5f5f5f;
  }
  #d-day {
    color: #37c56e;
    margin-left: 5px;
  }
`;
