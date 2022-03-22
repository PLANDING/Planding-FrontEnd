import React from 'react';
import styled from 'styled-components';
import coin from '../../assets/imgs/coin.png';
import { Flex } from '../common/Flex';
import InterestBox from '../common/InterestBox';
import GreenLabel from '../common/Label';

const CompleteProjectCard = ({ projectObj }) => {
  return (
    <>
      <Wrapper className="col-container">
        <Title>{projectObj.idea}</Title>
        <InterestBox interestArr={projectObj.Interests} />
        <Footer className="row-container">
          <GreenLabel>프로젝트 수료</GreenLabel>
          <span>
            <Flex dir="row" alignCenter gap="5px">
              <span>펀딩 이력</span>
              <img src={coin} width="16px" />
            </Flex>
            <span className="impact">{projectObj.Fundings.length * 500}</span>
          </span>
        </Footer>
      </Wrapper>
    </>
  );
};

export default CompleteProjectCard;

const Wrapper = styled.div`
  width: 48%;
  background-color: white;
  border: 0.5px solid #ebebeb;
  box-shadow: 5px 5px 10px 5px #00000010;
  border-radius: 15px;
  box-sizing: border-box;
  padding: 20px;
`;
const Title = styled.span`
  font-size: 17px;
  color: black;
`;

const Footer = styled.div`
  gap: 20px;
  font-weight: bold;
  & > span {
    font-size: small;
  }
  .impact {
    color: #37c56e;
    margin-left: 5px;
  }
`;
