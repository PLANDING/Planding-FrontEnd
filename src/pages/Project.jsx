import axios from 'axios';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useState } from 'react/cjs/react.development';
import styled from "styled-components";
import LevelImgs from '../assets/objects/LevelImgs';
import DateBox from '../components/common/DateBox';
import Gage from "../components/common/Gage";
import Header from "../components/common/Header";
import ProfileBox from "../components/common/ProfileBox";
import StepContainer from "../components/Project/StepContainer";

const Project = () => {
    const { userObj } = useSelector(state => ({ userObj: state.user.userObj }));
    const [myProjectObj, setMyProjectObj] = useState();
    let gage = myProjectObj?.curriculum / 20 * 100;

    useEffect(() => {
        axios.get(`/myProject/${userObj.id}`)
            .then(res => {
                setMyProjectObj(res.data.myProject);
            });
    })
    return (<>
        <Header />
        {myProjectObj !== undefined &&
            <Container >
                <Wrapper className="row-container">
                    <InfoBox className="col-container">
                        <DateBox dateString={myProjectObj.Project.createdAt} />
                        <span id="funding">펀딩 이력 <span>{myProjectObj.FudingCnt}</span></span>
                    </InfoBox>
                    <MemberBox className="row-container">
                        <span>팀원</span>
                        {myProjectObj.UserProjects.map(Member => <ProfileBox profileUrl={Member.User.ProfileImg?.url} />)}
                    </MemberBox>
                </Wrapper>

                <NameBox className="col-container">
                    <span id="idea">{myProjectObj.Project.idea}</span>
                    <span>프로젝트 {Math.ceil((new Date().getTime() - new Date(myProjectObj.Project.createdAt).getTime()) / (1000 * 3600 * 24)) + 1}일 째</span>
                </NameBox>

                <ProjectGage className="col-container">
                    <ImgBox>
                        {LevelImgs.map((img, idx) =>
                            <img src={require("../assets/imgs/" + `${gage < (idx + 1) * 20 ? img.unFill : img.fill}`).default} width={idx == 4 ? "100px" : "50px"} />)}
                    </ImgBox>
                    <Gage width={"50%"} gage={gage} />
                </ProjectGage>
                <StepContainer curr={myProjectObj.curriculum} projectId={myProjectObj.id} memberCnt={myProjectObj.UserProjects.length} />
            </Container>}
    </>);
}
export default Project;
export const Container = styled.div`
    box-shadow: 5px 5px 20px 10px #00000020;
    margin: 0 5%;
    margin-top: 20px;
    min-height: 100vh;
    padding: 50px 40px;
    border-radius: 20px 20px 0 0;
`
const InfoBox = styled.div`
    flex: 1;
    gap: 10px;
    #funding{
        font-weight: bold;
        font-size: small;
        span{
            color: #37C56E;
            margin-left: 10px;
        }
    }

`
const MemberBox = styled.div`
    gap: 10px;
`
const NameBox = styled.div`
    align-items: center;
    padding: 20px 0;
    span{
        color: #5F5F5F;
        font-weight: lighter;
    }
    #idea{
        color: black;
        font-size: xx-large;
        font-weight: bold;
        margin-bottom: 20px;

    }
`
const ImgBox = styled.div`
    display: flex;
    padding-left: 9%;
    box-sizing:border-box;
    width: 55%;
    align-items: flex-end;
    gap: 13%;
    margin-bottom: 20px;
`
const ProjectGage = styled.div`
    align-items: center;
    padding: 30px 0;
`
const Wrapper=styled.div``