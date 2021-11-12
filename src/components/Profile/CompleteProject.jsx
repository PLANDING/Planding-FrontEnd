import React from 'react';
import styled from 'styled-components';
import CompleteProjectCard from './CompleteProjectCard';

const CompleteProject = ({projectObj}) => {
    return (
        <>
        <Wrapper>
             <p>완료한 프로젝트</p>
             <Card className="row-container">
                <CompleteProjectCard projectObj={projectObj}/>
                <CompleteProjectCard projectObj={projectObj}/>
             </Card>
        </Wrapper>   
        </>
    );
};

export default CompleteProject;

const Wrapper = styled.div`
    background-color: white;
    color:black;
    box-shadow: 5px 5px 20px 2px #00000015;
    border-radius: 15px;
    width:100%;
    padding:20px;
`

const Card = styled.div`
    gap:20px;
`