import React from 'react';
import InterestBox from '../common/InterestBox';
import GreenLabel from '../common/Label';
import styled from 'styled-components';
import Gage from '../common/Gage';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDollarSign } from '@fortawesome/free-solid-svg-icons';

const CompleteProjectCard = ({projectObj}) => {
    return (
        <>
         <Wrapper className="col-container">
            <Title>{projectObj.idea}</Title>
            <InterestBox interestArr={projectObj.Interests} />
            <Footer className="row-container">
                <GreenLabel>프로젝트 수료</GreenLabel>
                <span>펀딩 이력 <FontAwesomeIcon icon={faDollarSign}/> <span className="impact">2200</span></span>
                
            </Footer>
        </Wrapper>   
        </>
    );
};

export default CompleteProjectCard;

const Wrapper = styled.div`
    width:100%;
    background-color : white;
    border: 0.5px solid #EBEBEB;
    box-shadow: 5px 5px 10px 5px #00000010;
    border-radius: 15px;
    box-sizing:border-box;
    padding:20px;
`
const Title = styled.span`
    font-size: 17px;
    color : black;
`

const Footer = styled.div`
    gap:20px;
    font-weight : bold;
    &>span{
        font-size:small;
    }
    .impact{
        color:#37C56E;
        margin-left: 5px;
    }
`