import axios from 'axios';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import styled from 'styled-components';
import { setProjectInfo } from '../../modules/project';
import InterestBox from '../common/InterestBox';
import GreenLabel from '../common/Label';
import ProfileBox from '../common/ProfileBox';
import RecruitmentBox from '../common/RecruitmentBox';

const CompleteCard = ({ projectObj }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const ms = new Date().getTime() - new Date(projectObj.createdAt).getTime();
  const date = Math.ceil(ms / (1000 * 3600 * 24));
  const onClickCard = () => {
    axios.get(`/project/completion/detail/${projectObj.id}`).then((res) => {
      dispatch(setProjectInfo(res.data.project));
      history.push(`/completion/detail/${projectObj.id}`);
    });
  };
  return (
    <>
      <Wrapper onClick={onClickCard}>
        <Header>
          <Title>{projectObj.idea}</Title>
          <ProfileBox
            nickName={projectObj.User.nickName}
            userId={projectObj.User.id}
            profileUrl={projectObj.User.ProfileImg?.url}
            isNickName
          />
        </Header>
        <Body>
          <RecruitmentBox member_plan={projectObj.member_plan} member_dev={projectObj.member_dev} />
          <InterestBox interestArr={projectObj.Interests} />
        </Body>
        <Footer className="row-container">
          <GreenLabel>모집 중</GreenLabel>
          <span>D-{14 - date}</span>
        </Footer>
      </Wrapper>
    </>
  );
};

export default CompleteCard;

const Wrapper = styled.div`
  width: 32%;
  padding: 20px;
  background-color: white;
  border: 0.5px solid #ebebeb;
  box-shadow: 5px 5px 10px 5px rgba(255, 255, 255, 0.25);
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
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

const Footer = styled.div`
  gap: 10px;
  & > span {
    color: #37c56e;
    font-weight: bold;
    font-size: medium;
  }
`;
