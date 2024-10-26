import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { setCheckInfo, setRegsiterInfo } from '../../modules/register';
import { Devider } from '../../pages/Register';
import NickNameForm from '../Register/NickNameForm';
import ProfileImgForm from './ProfileImgForm';

const PersonalInfo = () => {
  const { registerInfo, checkInfo } = useSelector((state) => state.register);
  const dispatch = useDispatch();

  const onChangeInfoHandler = (e) => {
    const {
      target: { name, value },
    } = e;
    dispatch(setRegsiterInfo({ ...registerInfo, [name]: value }));
    dispatch(setCheckInfo({ ...checkInfo, [name]: false }));
  };
  return (
    <>
      <Devider>
        <span>개인 정보</span>
        <hr />
      </Devider>
      <Container className="row-container">
        <ProfileImgForm />
        <NickName className="col-container">
          <NickNameForm onChangeInfo={onChangeInfoHandler} isEdit />
        </NickName>
      </Container>
    </>
  );
};

export default PersonalInfo;

const Container = styled.div`
  width: 100%;
  gap: 30px;
  padding: 0 15%;
`;

const NickName = styled.div`
  gap: 10px;
  & span {
    width: 100px;
  }
`;
