import React, { useEffect, useState } from 'react';
import Header from '../components/common/Header';
import PersonalInfo from '../components/ProfileEdit/PersonalInfo';
import styled from 'styled-components';
import SkillInfo from '../components/ProfileEdit/SkillInfo';
import TopDiv from '../components/common/TopDIv';
import GreenBtn from '../components/common/Button';
import { useSelector } from 'react-redux';
import { useHistory } from "react-router";
import axios from 'axios';

const ProfileEdit = () => {
    const history= useHistory();
    const { userObj } = useSelector(state => ({ userObj: state.user.userObj })); //기존 user 정보

    const [profileObj, setProfileObj] = useState(userObj); //수정용 user 정보
    const [interestArr, setInterestArr] = useState(userObj.Interests.map(interest => interest.category + ":" + interest.name));
    const [skillArr, setSkillArr] = useState(userObj.Skills.map(skill => skill.name));
    const [checkNick, setCheckNick] = useState("");

    const onChangeInfo = (e) => {
        const { target: { name, value } } = e;

        setProfileObj(prev => ({ ...prev, [name]: value }));
        /* 중복확인 및 일치 여부 판별 */
        name == "nickName" && setCheckNick("");
    }

    const onSubmit=(e)=>{
        e.preventDefault();
        const formData=new FormData();
        try{
            if(userObj.nickName!=profileObj.nickName&&checkNick!="사용 가능"){
                throw new Error("닉네임 중복확인 해주세요.")
            }
            formData.append('nickName', profileObj.nickName);
            formData.append('site', profileObj.site);
            formData.append('github', profileObj.github);
            formData.append('skillArr', skillArr);
            formData.append('interestArr', interestArr);
            formData.append('profileImg', profileObj.profileImg);
            axios.patch(`/user/${userObj.id}`,formData)
                .then(res=>{
                    res.status==200&&history.push("/profile");
                })
        }catch(err){
            alert(err.message);
        }
    }
    return (
        <>
            <Header />
            <div className="main-container">
                <TopDiv pageLabel={"프로필 수정"} />
                <Form className="main-container" onSubmit={onSubmit}>
                    <PersonalInfo profileObj={profileObj} setProfileObj={setProfileObj} onChangeInfo={onChangeInfo} checkNick={checkNick} setCheckNick={setCheckNick} />
                    <SkillInfo profileObj={profileObj} onChangeInfo={onChangeInfo} interestArr={interestArr} setInterestArr={setInterestArr} skillArr={skillArr} setSkillArr={setSkillArr} />
                    <GreenBtn>수정 완료</GreenBtn>
                </Form>
            </div>
        </>
    );
};

export default ProfileEdit;

const Form = styled.form`
    gap:30px;
    input{
        flex-grow : 1;
    }
    #label{
        width: 150px;
    }
    &>button{
        width:30%;
        margin-top: 50px;
    }
`

