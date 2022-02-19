import axios from 'axios';
import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import styled from 'styled-components';
import GreenBtn from '../components/common/Button';
import Header from '../components/common/Header';
import TopDiv from '../components/common/TopDIv';
import PersonalInfo from '../components/ProfileEdit/PersonalInfo';
import SkillInfo from '../components/Register/SkillInfo';

const ProfileEdit = () => {
  const { registerInfo, interestArr, skillArr, checkInfo } = useSelector((state) => state.register);
  const { userObj } = useSelector((state) => state.user);

  const history = useHistory();
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
      axios.patch(`/user/${userObj.id}`, formData).then((res) => {
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
        <Form className="main-container" onSubmit={onSubmit}>
          <PersonalInfo />
          <SkillInfo />
          <GreenBtn>수정 완료</GreenBtn>
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
`;
