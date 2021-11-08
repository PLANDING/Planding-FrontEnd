import React from 'react';
import styled from 'styled-components';
import { GreenBorderBtn } from '../common/Button';
import InterestBox from '../common/InterestBox';
import GreenLabel from '../common/Label';
import ProfileBox from '../common/ProfileBox';
import RecruitmentBox from '../common/RecruitmentBox';

const MainProjectCard = ({projectObj}) => {
    return (
        <>
        <Wrapper>
            <Header>
                <Title>{projectObj.idea}</Title>
                <ProfileBox nickName = {projectObj.User.nickName}/>
            </Header>
            <Body>
                <RecruitmentBox member_plan={3} member_dev={3}/>
                <InterestBox interestArr={projectObj.Interests} />
            </Body>
            <Footer className="row-container">
                <GreenLabel>모집 중</GreenLabel>
                <span>D-5</span>
            </Footer>
        </Wrapper>
        </>
    );
};

export default MainProjectCard;

const Wrapper = styled.div`
    width: 500px;
    height: 270px;
    background-color : white;
    border: 0.5px solid #EBEBEB;
    box-shadow: 5px 5px 10px 5px rgba(255, 255, 255,0.25);
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    box-sizing:border-box;
`

const Header = styled.div`
    display: flex;
    width:500px;
    justify-content: space-between;
    align-items:center;
    padding: 30px 30px;
`
const Title = styled.span`
    font-size: 20px;
    line-height: 28px;
    color : black;
`
const Body = styled.div`
    padding:0px 30px;
`

const Footer = styled.div`
    gap:10px;
    padding-left:30px;
    &>span{
        color:#37C56E;
        font-weight : bold;
        font-size : 20px;
    }
`