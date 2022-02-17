import axios from 'axios';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useState } from 'react/cjs/react.development';
import styled from "styled-components";
import Header from "../components/common/Header";
import NoticeBox from '../components/Project/NoticeBox';
import ProjectGage from '../components/Project/ProjectGage';
import ProjectHead from '../components/Project/ProjectHead';
import ProjectInfo from '../components/Project/ProjectInfo';
import StepContainer from "../components/Project/StepContainer";

const Project = () => {
    const { userObj } = useSelector(state => ({ userObj: state.user.userObj }));
    const [myProjectObj, setMyProjectObj] = useState();
    let gage = parseInt(myProjectObj?.curriculum / 20 * 100);

    const [curriculum, setCurriculum] = useState(0);
    useEffect(() => {
        axios.get(`/myProject/${userObj.id}`)
            .then(res => {
                if (res.status === 200) {
                    setMyProjectObj(res.data.MyProject);
                    setCurriculum(res.data.MyProject.curriculum);
                }
            });
    }, [curriculum]);
    return (<>
        <Header />
        {myProjectObj !== undefined ?
            <Container >
                <ProjectInfo myProjectObj={myProjectObj} />
                <ProjectHead myProjectObj={myProjectObj} />
                <ProjectGage gage={gage} />
                <StepContainer curriculum={curriculum} setCurriculum={setCurriculum} projectId={myProjectObj.id} memberCnt={myProjectObj.UserProjects.length} />
            </Container>
            :
            <NoticeBox/>}
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