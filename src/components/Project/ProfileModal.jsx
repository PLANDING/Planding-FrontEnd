import axios from 'axios';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import styled from 'styled-components';
import slackImg from '../../assets/imgs/slack_logo.png';
import { setProfileInfo } from '../../modules/profile';
import Modal from '../common/Modal';

const ProfileModal = ({ setIsOpen, userId, slackId }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  /*prifile user 정보 Get */
  const onClickNavHandler = () => {
    axios.get(`/user/${userId}`).then((res) => {
      dispatch(setProfileInfo(res.data.user));
      history.push('/profile');
    });
  };
  return (
    <Modal setIsOpen={setIsOpen} abs>
      <Container>
        <Wrapper>
          <img src={slackImg} />
          <IdSpan>{slackId}</IdSpan>
        </Wrapper>
        <Hr />
        <NavBtn onClick={onClickNavHandler}>프로필 이동</NavBtn>
      </Container>
    </Modal>
  );
};
export default ProfileModal;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  background-color: white;
  box-shadow: 10px 10px 20px 5px #00000010;
  border-radius: 10px;
  min-width: 250px;
  transform: translate(-50%, 30%);
  img {
    height: 18px;
    object-fit: contain;
  }
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px;
  gap: 10px;
`;
const Hr = styled.hr`
  border: none;
  border-bottom: solid thin #dadada;
  width: 100%;
  margin: 0;
`;
const IdSpan = styled.span`
  font-weight: lighter;
`;
const NavBtn = styled.button`
  font-size: small;
  color: #37c56e;
  width: 100%;
  text-align: center;
  padding: 10px;
`;
