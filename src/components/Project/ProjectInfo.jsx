import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import DateBox from '../common/DateBox';
import ProfileBox from './ProfileBox';

const ProjectInfo = () => {
  const { myProjectObj } = useSelector((state) => state.project);
  return (
    <Wrapper className="row-container">
      <InfoBox className="col-container">
        <DateBox dateString={myProjectObj.createdAt} />
        <span id="funding">
          펀딩 이력 <span>{myProjectObj.Project.Fundings.length * 500}</span>
        </span>
      </InfoBox>
      <MemberBox className="row-container">
        <span>팀원</span>
        {myProjectObj.UserProjects.map((Member, index) => (
          <ProfileBox
            key={index}
            userId={Member.User.id}
            profileUrl={Member.User.ProfileImg?.url}
          />
        ))}
      </MemberBox>
    </Wrapper>
  );
};
export default ProjectInfo;
const InfoBox = styled.div`
  flex: 1;
  gap: 10px;
  #funding {
    font-weight: bold;
    font-size: small;
    span {
      color: #37c56e;
      margin-left: 10px;
    }
  }
`;
const MemberBox = styled.div`
  gap: 10px;
`;
const Wrapper = styled.div``;
