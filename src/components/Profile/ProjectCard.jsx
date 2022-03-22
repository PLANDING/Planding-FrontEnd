import React from 'react';
import InterestBox from '../common/InterestBox';
import GreenLabel from '../common/Label';
import styled from 'styled-components';
import Gage from '../common/Gage';

const ProjectCard = ({ projectObj }) => {
  const totalCurriCnt = 20;
  let gage = parseInt(
    ((projectObj.devCurriculum + projectObj.planCurriculum) / totalCurriCnt) * 100,
  );
  return (
    <>
      {projectObj === undefined ? (
        <Notice>진행중인 프로젝트가 없습니다.</Notice>
      ) : (
        <Wrapper className="col-container">
          <Title>{projectObj.Project.idea}</Title>
          <InterestBox interestArr={projectObj.Project.Interests} />
          <Footer className="row-container">
            <GreenLabel>프로젝트 진행 중</GreenLabel>
            <div className="col-container" style={{ gap: '10px' }}>
              <span>진행 단계</span>
              <Gage gage={gage} width={'180px'}></Gage>
            </div>
          </Footer>
        </Wrapper>
      )}
    </>
  );
};

export default ProjectCard;

const Wrapper = styled.div`
  width: 100%;
  background-color: white;
  border: 0.5px solid #ebebeb;
  box-shadow: 5px 5px 10px 5px #00000010;
  border-radius: 15px;
  box-sizing: border-box;
  padding: 20px;
  min-height: 180px;
`;
const Title = styled.span`
  font-size: 17px;
  color: black;
`;

const Footer = styled.div`
  gap: 20px;
  font-weight: bold;
  & > span {
    color: #37c56e;
    font-size: 20px;
  }
  div {
    font-size: small;
  }
`;
const Notice = styled.div`
  width: 100%;
  background-color: white;
  border: 0.5px solid #ebebeb;
  box-shadow: 5px 5px 10px 5px #00000010;
  border-radius: 15px;
  box-sizing: border-box;
  padding: 80px 20px;
  text-align: center;
  color: #bdbdbd;
`;
