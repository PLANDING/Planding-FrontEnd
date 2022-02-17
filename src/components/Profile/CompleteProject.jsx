import React from 'react';
import styled from 'styled-components';
import CompleteProjectCard from './CompleteProjectCard';

const CompleteProject = ({ projectArr }) => {
  return (
    <Wrapper>
      <p>완료한 프로젝트</p>
      {projectArr.length === 0 ? (
        <Notice>완료한 프로젝트가 없습니다.</Notice>
      ) : (
        <Card className="row-container">
          {projectArr.map((project, index) => (
            <CompleteProjectCard key={index} projectObj={project.MyProject.Project} />
          ))}
        </Card>
      )}
    </Wrapper>
  );
};

export default CompleteProject;

const Wrapper = styled.div`
  background-color: white;
  color: black;
  box-shadow: 5px 5px 20px 2px #00000015;
  border-radius: 15px;
  width: 100%;
  padding: 20px;
`;

const Card = styled.div`
  justify-content: space-between;
`;
const Notice = styled.div`
  width: 100%;
  background-color: white;
  padding: 80px 20px;
  text-align: center;
  color: #bdbdbd;
`;
