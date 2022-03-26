import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { Flex } from '../components/common/Flex';
import Header from '../components/common/Header';
import NoticeBox from '../components/Project/NoticeBox';
import ProjectGage from '../components/Project/ProjectGage';
import ProjectHead from '../components/Project/ProjectHead';
import ProjectInfo from '../components/Project/ProjectInfo';
import StepContent from '../components/Project/StepContent';
import { setMyProjectInfo } from '../modules/project';

const Project = () => {
  const { userObj } = useSelector((state) => state.user);
  const { myProjectObj } = useSelector((state) => state.project);
  const dispatch = useDispatch();

  useEffect(
    () =>
      axios.get(`/myProject/${userObj?.id}`).then((res) => {
        dispatch(setMyProjectInfo(res.data.MyProject));
      }),
    [userObj, myProjectObj?.devCurriculum, myProjectObj?.planCurriculum],
  );

  return (
    <>
      <Header />
      {myProjectObj !== undefined ? (
        <Container>
          <ProjectInfo />
          <ProjectHead />
          <ProjectGage />
          <Flex dir="column" center gap="20px">
            <StepContent type="plan" />
            <StepContent type="dev" />
          </Flex>
        </Container>
      ) : (
        <NoticeBox />
      )}
    </>
  );
};
export default Project;
export const Container = styled.div`
  box-shadow: 5px 5px 20px 10px #00000020;
  margin: 0 5%;
  margin-top: 20px;
  min-height: 100vh;
  padding: 50px 40px;
  border-radius: 20px 20px 0 0;
`;
