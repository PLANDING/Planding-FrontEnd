import axios from 'axios';
import React from 'react';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react/cjs/react.development';
import styled from 'styled-components';
import Header from '../components/common/Header';
import MainFundingCompletion from '../components/Main/MainFundingCompletion';
import MainFundingIng from '../components/Main/MainFundingIng';

const Main = () => {
  const { gaObj } = useSelector((state) => ({ gaObj: state.user.gaObj }));
  const [progressArr, setProgressArr] = useState([]);
  const [completionArr, setCompletionArr] = useState([]);
  useEffect(() => {
    try {
      axios.post('/project', gaObj).then((res) => {
        setProgressArr(res.data.Progresses);
        setCompletionArr(res.data.Completions);
      });
    } catch (error) {
      console.error(error);
    }
  }, []);
  return (
    <>
      <Header />
      <Wrapper className="col-container">
        <MainFundingCompletion projectArr={completionArr} />
        <MainFundingIng projectArr={progressArr} />
      </Wrapper>
    </>
  );
};

export default Main;

const Wrapper = styled.div`
  margin: 50px 3%;
  justify-content: center;
  align-items: center;
  gap: 50px;
`;
