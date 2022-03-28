import axios from 'axios';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useState } from 'react/cjs/react.development';
import styled from 'styled-components';
import { Flex } from '../components/common/Flex';
import Header from '../components/common/Header';
import MatchingCard from '../components/Matching/MatchingCard';
import { Container } from './Project';

const Matching = ({ match }) => {
  const { projectId } = match.params;
  const { userObj } = useSelector((state) => ({ userObj: state.user.userObj })); //계정 user 정보
  const [devProfileArr, setDevProfileArr] = useState();
  useEffect(async () => {
    const { data } = await axios.get(`/myProject/${userObj?.id}`);
    const memberArr = data.MyProject.UserProjects.map((user) => user.UserId);
    axios.get(`/myProject/matching/${projectId}`).then((res) => {
      setDevProfileArr(res.data.Devs.filter((dev) => !memberArr.includes(dev.id)));
    });
  }, []);
  return (
    <>
      <Header />
      <Container>
        <Headline>당신의 프로젝트에 꼭 맞는 개발자를 추천합니다.</Headline>
        <MainContainer>
          {devProfileArr === undefined ? (
            <Notice>잠시만 기다려주세요.</Notice>
          ) : (
            <Wrapper dir="column" jCCenter>
              {devProfileArr.map((profile) => (
                <MatchingCard key={profile.id} {...{ profile, projectId }} />
              ))}
            </Wrapper>
          )}
        </MainContainer>
      </Container>
    </>
  );
};
export default Matching;
const Headline = styled.h1`
  font-size: x-large;
  font-weight: lighter;
  width: 100%;
  text-align: center;
  color: #37c56e;
  padding-bottom: 50px;
  border-bottom: solid thin #dddddd;
`;
const MainContainer = styled.div`
  padding: 50px;
  margin-top: 50px;
  height: 100%;
`;
const Wrapper = styled(Flex)`
  gap: 30px;
`;
const Notice = styled.div`
  text-align: center;
  color: #37c56e;
  padding: 30vh;
`;
