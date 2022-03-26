import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import styled from 'styled-components';
import Cookies from 'universal-cookie';
import GreenBtn from '../components/common/Button';
import Header from '../components/common/Header';
import TopDiv from '../components/common/TopDIv';
import PersonalInfo from '../components/ProfileEdit/PersonalInfo';
import SkillInfo from '../components/Register/SkillInfo';
import { setPrevInfo } from '../modules/register';

const ProfileEdit = () => {
  const { registerInfo, interestArr, skillArr, checkInfo } = useSelector((state) => state.register);
  const { userObj } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const history = useHistory();
  const cookie = new Cookies();
  const userId = cookie.get('userId');

  useEffect(() => {
    axios.get(`/user/${userId}`).then((res) => {
      dispatch(setPrevInfo(res.data.user));
    });
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    try {
      if (userObj.nickName != registerInfo.nickName && !checkInfo.nickName) {
        throw new Error('닉네임 중복확인 해주세요.');
      }
      formData.append('nickName', registerInfo.nickName);
      formData.append('site', registerInfo.site);
      formData.append('github', registerInfo.github);
      formData.append('skillArr', skillArr);
      formData.append('interestArr', interestArr);
      formData.append('profileImg', registerInfo.profileImg);
      axios.patch(`/user/${userObj?.id}`, formData).then((res) => {
        res.status == 200 && history.push('/profile');
      });
    } catch (err) {
      alert(err.message);
    }
  };
  return (
    <>
      <Header />
      <div className="main-container">
        <TopDiv pageLabel={'프로필 수정'} />
        <Form className="col-container" onSubmit={onSubmit}>
          <PersonalInfo />
          <SkillInfo />
          <GreenBtn animation>수정 완료</GreenBtn>
        </Form>
      </div>
    </>
  );
};

export default ProfileEdit;

const Form = styled.form`
  width: 50%;
  margin-top: 50px;
  gap: 30px;
  input {
    flex-grow: 1;
  }
  & > button {
    width: 30%;
    margin-top: 50px;
  }
  input[type='text'],
  input[type='password'],
  input[type='url'] {
    flex: 1;
  }
  & > button {
    width: 50%;
    align-self: center;
    margin-top: 30px;
  }
`;
