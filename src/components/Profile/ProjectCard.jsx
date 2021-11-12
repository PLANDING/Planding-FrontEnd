import React from 'react';
import InterestBox from '../common/InterestBox';
import GreenLabel from '../common/Label';
import styled from 'styled-components';
import Gage from '../common/Gage';

const ProjectCard = ({projectObj}) => {
    return (
        <>
         <Wrapper className="col-container">
            <Title>{projectObj.idea}</Title>
            <InterestBox interestArr={projectObj.Interests} />
            <Footer className="row-container">
                <GreenLabel>프로젝트 진행 중</GreenLabel>
                <div className="col-container" style={{gap:"10px"}}>
                    <span>진행 단계</span>
                    <Gage gage={40} width={'150px'}></Gage>
                </div>
            </Footer>
        </Wrapper>   
        </>
    );
};

export default ProjectCard;

const Wrapper = styled.div`
    width:100%;
    background-color : white;
    border: 0.5px solid #EBEBEB;
    box-shadow: 5px 5px 10px 5px #00000015;
    border-radius: 20px;
    box-sizing:border-box;
    padding:20px;
`
const Title = styled.span`
    font-size: 17px;
    color : black;
`

const Footer = styled.div`
    gap:20px;
    &>span{
        color:#37C56E;
        font-weight : bold;
        font-size : 20px;
    }
    div{
        font-size:small;
    }
`