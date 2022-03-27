import axios from 'axios';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import styled from 'styled-components';
import userImg from '../../assets/imgs/user.png';
import { setProfileInfo } from '../../modules/profile';

const ProfileBox = ({ profileUrl, nickName, size, borderNone, isNickName }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  /*prifile user 정보 Get */
  const onClickProfile = (event) => {
    event.stopPropagation();
    axios.get(`/user/${nickName}`).then((res) => {
      dispatch(setProfileInfo(res.data.user));
      history.push(`/profile/${nickName}`);
    });
  };
  return (
    <ProfileWrapper className="row-container" onClick={onClickProfile}>
      <ImgWrapper size={size} borderNone={borderNone}>
        <img src={profileUrl ? profileUrl : userImg} width="100%" />
      </ImgWrapper>
      {isNickName && <span>{nickName}</span>}
    </ProfileWrapper>
  );
};
export default ProfileBox;

export const ProfileWrapper = styled.div`
  font-size: small;
  gap: 10px;
  cursor: pointer;
`;
export const ImgWrapper = styled.div`
  background-color: white;
  overflow: hidden;
  transition: 0.3s;
  ${(props) =>
    props.size
      ? `width:${props.size};
    height:${props.size};`
      : `width: 40px;
    height: 40px;`}
  border-radius: 50%;
  border: solid thin #dbdbdb;
  &:hover {
    border: solid 2px #37c56e;
  }
  ${(props) =>
    props.borderNone &&
    `
    &:hover{
        border: solid thin #dbdbdb;
    }
    `}
`;
