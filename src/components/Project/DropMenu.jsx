import axios from 'axios';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import doneImg from '../../assets/imgs/done.png';
import doneFillImg from '../../assets/imgs/doneFill.png';
import { setCurriculum } from '../../modules/project';
import GreenBtn from '../common/Button';

const DropMenu = ({ currObj }) => {
  const { myProjectObj } = useSelector((state) => state.project);
  const curriculum = myProjectObj.curriculum;
  const projectId = myProjectObj.id;
  const memberCnt = myProjectObj.UserProjects.length;
  const dispatch = useDispatch();

  const onClickDel = (event) => {
    const {
      target: { id },
    } = event;
    id == 1 && axios.patch(`/project/end/del/${projectId}`);

    axios
      .patch(`/myProject/curriculum/${projectId}/${curriculum - 1}`)
      .then(() => dispatch(setCurriculum(curriculum - 1)));
  };

  const history = useHistory();
  const onClickDone = (event) => {
    const {
      target: { id },
    } = event;

    if (id > curriculum + 1) return;
    if (id == 1) {
      if (memberCnt < 2) {
        alert('팀원은 최소 2인 이상 모집되어야 합니다.');
        return;
      }
      axios.patch(`/project/end/${projectId}`);
    }
    if (id == 21) {
      if (
        window.confirm(
          '프로젝트가 마감됩니다. \n프로젝트 마감후, 취소가 불가합니다. \n프로젝트 완료하시겠습니까?',
        )
      ) {
        axios.patch(`/myProject/complete/${projectId}`).then(() => history.push('/'));
      } else return;
    }

    axios
      .patch(`/myProject/curriculum/${projectId}/${curriculum + 1}`)
      .then(() => dispatch(setCurriculum(curriculum + 1)));
  };

  return (
    <Container>
      {currObj.map((el, idx) => (
        <CurriBox key={idx} className="row-container">
          <Label isDone={curriculum >= el.curr}>{el.content}</Label>
          {/* 커리큘럼 0일 경우 */}
          {el.curr === 1 && curriculum === 0 && (
            <Link to={`project/matching/${projectId}`}>
              <GreenBtn>개발자 매칭 추천</GreenBtn>
            </Link>
          )}
          <img
            id={el.curr}
            src={curriculum >= el.curr ? doneFillImg : doneImg}
            onClick={curriculum >= el.curr ? onClickDel : onClickDone}
            width="24px"
          />
        </CurriBox>
      ))}
    </Container>
  );
};
export default DropMenu;
const Label = styled.span`
  flex: 1;
  color: ${(props) => props.isDone && '#37C56E'};
`;
const Container = styled.div`
  border: solid thin #37c56e80;
  border-radius: 0 0 10px 10px;
  button {
    margin-right: 20px;
  }
  background-color: white;
`;
const CurriBox = styled.div`
  border-top: solid thin #37c56e80;
  padding: 20px 25px;
  img {
    cursor: pointer;
  }
`;
