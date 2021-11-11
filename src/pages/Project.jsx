import React from 'react';
import styled from "styled-components";
import LevelImgs from '../assets/objects/LevelImgs';
import Gage from "../components/common/Gage";
import Header from "../components/common/Header";
import ProfileBox from "../components/common/ProfileBox";
import StepContainer from "../components/Project/StepContainer";

const Project = () => {
    /*dummy data */
    const myProjectObj = {
        projectId: 1,
        idea: "이미지 인식 앱서비스",
        headline: "",
        content: "",
        category: "",
        createdAt: new Date(),
        FudingCnt: 100,
        Users: [{ userId: 1 }, { userId: 1 }, { userId: 1 }],
        curriculum: 0
    }
    let gage = myProjectObj.curriculum / 20 * 100;
    /*stpe img path */
    
    return (<>
        <Header />
        <Container >
            <div className="row-container">
                <InfoBox className="col-container">
                    <span id="date">{new Date(myProjectObj.createdAt).getFullYear() + "." + new Date(myProjectObj.createdAt).getMonth() + "." + new Date(myProjectObj.createdAt).getDate() + "-"}</span>
                    <span id="funding">펀딩 이력 <span>{myProjectObj.FudingCnt}</span></span>
                </InfoBox>
                <MemberBox className="row-container">
                    <span>팀원</span>
                    {myProjectObj.Users.map(user => <ProfileBox />)}
                </MemberBox>
            </div>

            <NameBox className="col-container">
                <span id="idea">{myProjectObj.idea}</span>
                <span>프로젝트 {Math.ceil((new Date().getTime() - new Date(myProjectObj.createdAt).getTime()) / (1000 * 3600 * 24)) + 1}일 째</span>
            </NameBox>

            <ProjectGage className="col-container">
                <ImgBox>
                    {LevelImgs.map((img, idx) => <img src={require("../assets/imgs/" + `${gage < (idx + 1) * 20 ? img.unFill : img.fill}`).default} width={idx == 4 ? "100px" : "50px"} />)}

                </ImgBox>
                <Gage width={"50%"} gage={gage} />
            </ProjectGage>

            <StepContainer curr={myProjectObj.curriculum} />
        </Container>
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
#date{
    font-weight: lighter;
}
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