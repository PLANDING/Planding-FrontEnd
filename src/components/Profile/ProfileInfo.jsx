import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styled from 'styled-components';
import GreenLabel, { GreenBorderLabel } from '../common/Label';
import ProfileBox from '../common/ProfileBox';
import LevelImgs from "../../assets/objects/LevelImgs";
import Gage from '../common/Gage';

const ProfileInfo = ({ profile }) => {
    return (
        <>
            <Card>
                <Profile className="col-container">
                    <ProfileBox size={"150px"} profileUrl={profile.ProfileImg.url} borderNone/>
                    <span style={{ fontWeight: "bold", fontSize: "26px" }}>{profile.nickName}</span>
                    <LevelWrapper className="col-container" >

                        <div className="row-container" style={{ gap: "10px" }}>
                            <img src={require("../../assets/imgs/" + LevelImgs[profile.level/4].fill).default} width="24px" />
                            <Gage gage={profile.level*10} width={'150px'} />
                        </div>

                        <Tooltip className="tooltip" >
                            <span>**스택레벨 이란?</span>
                            <p >
                                <div>총 5레벨 {LevelImgs.map((it,idx) => <><img src={require("../../assets/imgs/" + `${it.fill}`).default} />{idx<4&&'→'}</>)}</div><br/>
                                플랜딩 프로젝트 완료 시 증가되는 평가지표입니다.
                            </p>
                        </Tooltip>
                    </LevelWrapper>

                </Profile>
                <Content className="col-container">
                    <div className="row-container">
                        <span><FontAwesomeIcon icon={faGithub} /> Github</span>
                        <a href={profile.github}>{profile.github}</a>
                    </div>
                    <div className="row-container">
                        <span>Dev Blog</span>
                        <a href={profile.site}>{profile.site}</a>
                    </div>
                    <LabelWrapper className="col-container">
                        <span>관심분야</span>
                        <div>
                            {profile.Interests?.map(interest => <GreenBorderLabel>{interest.name}</GreenBorderLabel>)}
                        </div>
                    </LabelWrapper>
                    <LabelWrapper className="col-container">
                        <span>기술 스택</span>
                        <div>
                            {profile.Skills?.map(skill => <GreenLabel>{skill.name}</GreenLabel>)}
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
    display: flex;
    align-items: flex-start;
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
    .level:hover > .tootip{
        display: block;
    }
`
const LevelWrapper = styled.div`

    &:hover > .tooltip{
    display: block;
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
const Tooltip = styled.div`
    display: none;
    position: absolute;
    transform: translate(0, 100px);
    border: solid thin #37C56E;
    padding: 10px 20px;
    border-radius: 5px;
    font-size: xx-small;
    background-color: white;
    line-height:2;
    font-weight: lighter;
    &>span:nth-child(1){
        color: #37C56E;
    }
    img{
        width: 20px;
    }
    div{
        display: flex;
        flex-direction: row;
        align-items: flex-end;
        gap: 5px;
    }
`