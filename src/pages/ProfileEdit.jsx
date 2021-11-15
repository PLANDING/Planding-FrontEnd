import React from 'react';
import Header from '../components/common/Header';
import PersonalInfo from '../components/ProfileEdit/PersonalInfo';
import styled from 'styled-components';
import SkillInfo from '../components/ProfileEdit/SkillInfo';
import TopDiv from '../components/common/TopDIv';

const ProfileEdit = () => {
    return (
        <>
        <Header />
        <div className="main-container">
        <TopDiv pageLabel={"프로필 수정"}/>
        <Form className="main-container">
            <PersonalInfo />
            <SkillInfo />
        </Form>
        </div>
        </>
    );
};

export default ProfileEdit;

const Form = styled.div`
    width:100%;
    gap:70px;
    input{
        flex-grow : 1;
    }
    #label{
        width: 150px;
    }
`

