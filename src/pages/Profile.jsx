import axios from 'axios';
import React, { useEffect } from 'react';
import { Cookies } from 'react-cookie';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import styled from 'styled-components';
import { GreenBorderBtn } from '../components/common/Button';
import { Flex } from '../components/common/Flex';
import Header from '../components/common/Header';
import CompleteProject from '../components/Profile/CompleteProject';
import ProfileCard from '../components/Profile/ProfileCard';
import ProfileInfo from '../components/Profile/ProfileInfo';
import { setProfileInfo } from '../modules/profile';
import { logout } from '../modules/user';

const Profile = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { userNickName } = useParams();
  const cookie = new Cookies();
  const { userObj } = useSelector((state) => ({ userObj: state.user.userObj })); //계정 user 정보
  const { profileObj } = useSelector((state) => ({ profileObj: state.profile.profileObj })); //prifile user 정보

  useEffect(() => {
    axios.get(`/user/${userNickName}`).then((res) => {
      dispatch(setProfileInfo(res.data.user));
    });
  }, []);

  const onClickEdit = () => {
    history.push('/profile/edit');
  };

  const onClickLogout = () => {
    cookie.remove('token', { path: '/' });
    dispatch(logout());
    history.push('/');
  };
  return (
    <>
      <Header />
      <div className="main-container">
        <ProfileWrapper dir="column" jCCenter>
          <ProfileInfo profile={profileObj} />
        </ProfileWrapper>
        <CardWrapper dir="column" jCCenter>
          {userObj?.id === profileObj.id && (
            <BtnWrapper>
              <GreenBorderBtn onClick={onClickEdit}>프로필 수정</GreenBorderBtn>
              <RedBorderBtn onClick={onClickLogout}>로그아웃</RedBorderBtn>
            </BtnWrapper>
          )}
          <ProfileCard {...{ profileObj }} />

          <CompleteProject projectArr={profileObj.MyProjects} />
        </CardWrapper>
      </div>
    </>
  );
};

export default Profile;

const ProfileWrapper = styled(Flex)`
  margin-top: 50px;
`;
const CardWrapper = styled(Flex)`
  width: 65%;
`;

const BtnWrapper = styled.div`
  display: flex;
  justify-content: end;
  gap: 10px;
`;
const RedBorderBtn = styled.button`
  border: solid thin #f55959;
  border-radius: 5px;
  color: #f55959;
  padding: 5px 15px;
  font-size: small;
  text-align: center;
`;
