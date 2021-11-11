import React from 'react';
import styled from 'styled-components';
import InterestBox from '../common/InterestBox';
import GreenLabel from '../common/Label';
import ProfileBox from '../common/ProfileBox';
import FundingGage from '../common/FundingGage';

const IngCard = ({projectObj}) => {
    return (
        <>
        <Wrapper className="col-container">
            <Header>
                <Title>{projectObj.idea}</Title>
                <ProfileBox nickName = {projectObj.User.nickName}/>
            </Header>
            <Body>
                <InterestBox interestArr={projectObj.Interests} />
                <LabelWrap className="row-container">
                    <GreenLabel>모집 중</GreenLabel>
                    <span>D-5</span>
                </LabelWrap>
            </Body>
            <Footer>
            <FundingGage gage={30} fundingCnt={1300} />
            </Footer>
            
        </Wrapper>
        </>
    );
};

export default IngCard;

const Wrapper = styled.div`
    background-color : white;
    border: 0.5px solid #EBEBEB;
    box-shadow: 5px 5px 10px 5px rgba(255, 255, 255,0.25);
    border-radius: 20px;
    flex-wrap: wrap;
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

const LabelWrap = styled.div`
    gap:10px;
    &>span{
        color:#37C56E;
        font-weight : bold;
        font-size : 20px;
    }
`
const Footer = styled.div`
    display: flex;
    padding : 10px 30px 30px 30px;
`