import React from 'react';
import styled from 'styled-components';
import InterestBox from '../common/InterestBox';
import GreenLabel from '../common/Label';
import ProfileBox from '../common/ProfileBox';
import RecruitmentBox from '../common/RecruitmentBox';

const CompleteCard = ({projectObj}) => {
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

export default CompleteCard;

const Wrapper = styled.div`
    width: 32%;
    padding: 20px;
    background-color : white;
    border: 0.5px solid #EBEBEB;
    box-shadow: 5px 5px 10px 5px rgba(255, 255, 255,0.25);
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    box-sizing:border-box;
    height: 230px;
`

const Header = styled.div`
    display: flex;
    align-items:center;
`
const Title = styled.span`
    font-size: medium;
    color : black;
    flex: 1;
`
const Body = styled.div`
`

const Footer = styled.div`
    gap:10px;
    &>span{
        color:#37C56E;
        font-weight : bold;
        font-size : medium;
    }
`