import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styled from 'styled-components';
import GreenLabel, { GreenBorderLabel } from '../common/Label';
import ProfileBox from '../common/ProfileBox';
import LevelImgs from "../../assets/objects/LevelImgs";
import Gage from '../common/Gage';
import { GreenBorderBtn } from '../common/Button';

const ProfileInfo = ({profile}) => {
    return (
        <>
            <Card className="row-container">
                <Profile className="col-container">
                    <ProfileBox size={"120px"} />
                    <span style={{fontWeight:"bold", fontSize:"26px"}}>{profile.nickName}</span>
                    <div className="row-container" style={{gap:"10px"}}>
                        <img src={require("../../assets/imgs/" + LevelImgs[0].fill).default} width="24px" />
                        <Gage gage={40} width={'150px'}/>
                    </div>
                </Profile>
                <Content className="col-container">
                    <div className="row-container">
                        <span><FontAwesomeIcon icon={faGithub} /> Github</span>
                        <a href={profile.git}>{profile.git}</a>
                    </div>
                    <div className="row-container">
                        <span>Dev Blog</span>
                        <a href={profile.site}>{profile.site}</a>
                    </div>
                    <LabelWrapper className="col-container">
                        <span>관심분야</span>
                        <div>
                            {profile.Interests.map(interest => <GreenBorderLabel>{interest.name}</GreenBorderLabel>)}
                        </div>
                    </LabelWrapper>
                    <LabelWrapper className="col-container">
                        <span>기술 스택</span>
                        <div>
                            {profile.Skills.map(skill => <GreenLabel>{skill.name}</GreenLabel>)}
                        </div>
                    </LabelWrapper>  
                </Content>
            </Card>
        </>
    );
};

export default ProfileInfo;

const Card = styled.div`
    width:100%;
    padding: 30px;
    border-radius: 15px;
    gap: 20px;
`
const Profile = styled.div`
    flex: 0.2;
    align-items: center;
    gap:20px;
    margin-right:50px;
    &>div:nth-child(1){
        gap: 0;
    }
    &>div:nth-child(2){
        gap: 5px;
    }
`
const Content = styled.div`
    gap: 10px;
    flex: 0.8;
    a{
        color: #bfbfbf;
    }
    &>div>span:nth-child(1){
        width: 100px;
    }
`
const LabelWrapper = styled.div`
    gap: 10px;
    &>div>div{
        display: inline-block;
        margin-right: 5px;
    }   
`
