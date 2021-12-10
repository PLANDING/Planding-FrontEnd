import React from 'react';
import styled from "styled-components";

const ProjectHead = ({ myProjectObj }) => {
    return (
        <Container className="col-container">
            <span id="idea">{myProjectObj.Project.idea}</span>
            <span>프로젝트 {Math.ceil((new Date().getTime() - new Date(myProjectObj.Project.createdAt).getTime()) / (1000 * 3600 * 24)) - 7}일 째</span>
        </Container>
    );
}
export default ProjectHead;
const Container = styled.div`
    align-items: center;
    padding: 20px 0;
    span{
        color: #5F5F5F;
        font-weight: lighter;
    }
    #idea{
        color: black;
        font-size: xx-large;
        font-weight: bold;
        margin-bottom: 20px;

    }
`