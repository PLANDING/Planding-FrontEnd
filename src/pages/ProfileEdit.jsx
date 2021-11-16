import React from 'react';
import Header from '../components/common/Header';
import PersonalInfo from '../components/ProfileEdit/PersonalInfo';
import styled from 'styled-components';
import SkillInfo from '../components/ProfileEdit/SkillInfo';
import TopDiv from '../components/common/TopDIv';
import GreenBtn from '../components/common/Button';

const ProfileEdit = () => {
    return (
        <>
        <Header />
        <div className="main-container">
        <TopDiv pageLabel={"프로필 수정"}/>
        <Form className="main-container">
            <PersonalInfo />
            <SkillInfo />
            <GreenBtn>수정 완료</GreenBtn>
        </Form>
        </div>
        </>
    );
};

export default ProfileEdit;

const Form = styled.div`
    gap:70px;
    input{
        flex-grow : 1;
    }
    #label{
        width: 150px;
    }
    &>button{
        width:30%;
    }
`

