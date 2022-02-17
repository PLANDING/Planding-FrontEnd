import React from 'react';
import styled from 'styled-components';
import InterestBox from '../common/InterestBox';
import GreenLabel from '../common/Label';
import ProfileBox from '../common/ProfileBox';
import FundingGage from '../common/FundingGage';
import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { setProjectInfo } from '../../modules/project';

const IngCard = ({ projectObj }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const ms = new Date().getTime() - new Date(projectObj.createdAt).getTime();
  const date = Math.ceil(ms / (1000 * 3600 * 24));
  const onClickCard = () => {
    axios.get(`/project/progress/detail/${projectObj.id}`).then((res) => {
      dispatch(setProjectInfo(res.data.project));
      history.push('/progress/detail');
    });
  };

  return (
    <>
      <Wrapper className="col-container" onClick={onClickCard}>
        <Header>
          <Title>{projectObj.idea}</Title>
          <ProfileBox
            nickName={projectObj.User.nickName}
            userId={projectObj.User.id}
            profileUrl={projectObj.User.ProfileImg?.url}
          />
        </Header>
        <Body>
          <InterestBox interestArr={projectObj.Interests} />
          <LabelWrap className="row-container">
            <GreenLabel>펀딩 진행 중</GreenLabel>
            <span>D-{7 - date}</span>
          </LabelWrap>
        </Body>
        <Footer>
          <FundingGage
            gage={((projectObj.Fundings.length * 500) / 30).toFixed(1)}
            fundingCnt={projectObj.Fundings.length * 500}
          />
        </Footer>
      </Wrapper>
    </>
  );
};

export default IngCard;

const Wrapper = styled.div`
  width: 32%;
  padding: 20px;
  background-color: white;
  border: 0.5px solid #ebebeb;
  box-shadow: 5px 5px 10px 5px rgba(255, 255, 255, 0.25);
  border-radius: 15px;
  flex-wrap: wrap;
  height: 230px;
  cursor: pointer;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
`;
const Title = styled.span`
  font-size: medium;
  color: black;
  flex: 1;
`;
const Body = styled.div``;

const LabelWrap = styled.div`
  gap: 10px;
  & > span {
    color: #37c56e;
    font-weight: bold;
    font-size: medium;
  }
`;
const Footer = styled.div`
  display: flex;
  font-size: small;
  font-weight: bolder;
  margin-top: 5px;
  & > div {
    gap: 0px;
  }
`;
