import React from 'react';
import styled from 'styled-components';
import IngCard from './IngCard';

const MainFundingCompletion = ({ projectArr }) => {
  return (
    <>
      <Wrapper className="col-container">
        <span>펀딩 진행 중</span>
        <ProCardWrapper className="row-container">
          {projectArr.length === 0 ? (
            <Notice className="row-container">로딩중..</Notice>
          ) : (
            projectArr.map((project, index) => <IngCard key={index} projectObj={project} />)
          )}
        </ProCardWrapper>
      </Wrapper>
    </>
  );
};

export default MainFundingCompletion;
const Notice = styled.div`
  color: #9b9b9b;
  height: 230px;
`;
const Wrapper = styled.div`
  background-color: #edf2f8;
  box-shadow: 5px 5px 20px 2px #00000015;
  width: 100%;
  border-radius: 15px;
  padding: 30px;
  box-sizing: border-box;
  gap: 10px;
  & > span {
    color: #9b9b9b;
    font-size: 20px;
    font-weight: bold;
  }
`;

const ProCardWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 10px;
`;
