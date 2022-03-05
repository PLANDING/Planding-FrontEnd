import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const ProjectHead = () => {
  const { myProjectObj } = useSelector((state) => state.project);
  return (
    <Container className="col-container">
      <span id="idea">{myProjectObj.Project.idea}</span>
      <span>
        프로젝트{' '}
        {Math.ceil(
          (new Date().getTime() - new Date(myProjectObj.createdAt).getTime()) / (1000 * 3600 * 24),
        )}
        일 째
      </span>
    </Container>
  );
};
export default ProjectHead;
const Container = styled.div`
  align-items: center;
  padding: 20px 0;
  span {
    color: #5f5f5f;
    font-weight: lighter;
  }
  #idea {
    color: black;
    font-size: xx-large;
    font-weight: bold;
    margin-bottom: 20px;
  }
`;
