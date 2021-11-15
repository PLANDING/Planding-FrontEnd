import React from 'react';
import Header from '../components/common/Header';
import PersonalInfo from '../components/ProfileEdit/PersonalInfo';
import styled from 'styled-components';
import SkillInfo from '../components/ProfileEdit/SkillInfo';

const ProfileEdit = () => {
    return (
        <>
        <Header />
        <Form className="main-container">
            <PersonalInfo />
            <SkillInfo />
        </Form>
        
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

