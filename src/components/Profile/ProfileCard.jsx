import React from 'react';
import styled from 'styled-components';
import FundingCard from './FundingCard';
import ProjectCard from './ProjectCard';

const ProfileCard = ({projectObj}) => {
    return (
        <>
            <Card className="row-container">
                <ProgressFunding className="col-container">
                    <p>진행중인 펀딩</p>
                    <FundingCard projectObj={projectObj}/>
                </ProgressFunding>
                <ProgressProject className="col-container">
                    <p>진행중인 프로젝트</p>
                    <ProjectCard projectObj={projectObj}/>
                </ProgressProject>
            </Card>
        </>
    );
};

export default ProfileCard;

const Card = styled.div`
    justify-content: center;
    width:100%;
    gap:20px;
`

const ProgressFunding=styled.div`
    flex-grow: 1;
    width:100%;
    background-color: #37C562;
    box-shadow: 5px 5px 20px 2px #00000015;
    border-radius: 15px;
    padding:0px 20px 20px 20px;
    box-sizing: border-box;
    &>p{
        color:white;
        font-size:15px;
    }
`

const ProgressProject=styled.div`
    flex-grow: 1;
    width:100%;
    background-color: #EDF2F8;
    box-shadow: 5px 5px 20px 2px #00000015;
    border-radius: 15px;
    margin:20px;
    padding:0px 20px 20px 20px;
    box-sizing: border-box;
    gap:10px;
    &>p{
        color:#9B9B9B;
        font-size:15px;
    }
`