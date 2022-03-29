import axios from 'axios';
import React from 'react';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react/cjs/react.development';
import styled from 'styled-components';
import { Flex } from '../components/common/Flex';
import Header from '../components/common/Header';
import MainFundingCompletion from '../components/Main/MainFundingCompletion';
import MainFundingIng from '../components/Main/MainFundingIng';

const Main = () => {
  const { isLoggedin, userObj } = useSelector((state) => state.user);
  const [progressArr, setProgressArr] = useState([]);
  const [completionArr, setCompletionArr] = useState([]);
  useEffect(() => {
    try {
      if (isLoggedin) {
        axios.get(`/ga/${userObj?.id}`).then((res) => {
          setProgressArr(res.data.Progresses);
          setCompletionArr(res.data.Completions);
        });
      } else {
        axios.get(`/project`).then((res) => {
          setProgressArr(res.data.Progresses);
          setCompletionArr(res.data.Completions);
        });
      }
    } catch (error) {
      console.error(error);
    }
  }, [isLoggedin]);
  return (
    <>
      <Header />
      <Wrapper dir="column" center gap="50px">
        <MainFundingCompletion projectArr={completionArr} />
        <MainFundingIng projectArr={progressArr} />
      </Wrapper>
    </>
  );
};

export default Main;

const Wrapper = styled(Flex)`
  margin: 50px 3%;
`;
