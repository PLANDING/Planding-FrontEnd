import React from 'react';
import styled from 'styled-components';

const MainProjectCard = ({projectObj}) => {
    return (
        <>
        <Wrapper>
            <Header>
                <Title>{projectObj.idea}</Title>
                <ProfileWrapper>
                    <img src="logo.png" width="40" height="40"></img>
                    <span color="black" style={{marginLeft:"10px"}}>{projectObj.User.nickName}</span>
                </ProfileWrapper>
            </Header>
            <Body>

            </Body>
            <Footer>

            </Footer>
        </Wrapper>
        </>
    );
};

export default MainProjectCard;

const Wrapper = styled.div`
    width: 530px;
    height: 300px;
    background-color : white;
    border: 0.5px solid #EBEBEB;
    box-shadow: 5px 5px 10px 5px rgba(255, 255, 255,0.25);
    border-radius: 20px;
    display: flex;
`

const Header = styled.div`
    display: flex;
    width:530px;
    height:20%;
    flex-direction: row;
    justify-content: space-between;
    margin:30px;
    align-items:center;
`
const Title = styled.span`
    font-size: 20px;
    line-height: 28px;
    color : black;
`

const ProfileWrapper=styled.div`
    display: flex; 
    align-items: center;
`

const Body = styled.div`

`

const Footer = styled.div`

`