import React, { useEffect } from "react";
import Header from '../components/common/Header';
import ProfileInfo from '../components/Profile/ProfileInfo';
import styled from 'styled-components';
import { GreenBorderBtn } from '../components/common/Button';
import ProfileCard from '../components/Profile/ProfileCard'
import CompleteProject from '../components/Profile/CompleteProject';
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import axios from "axios";
import { setLoggedInfo, setUserInfo } from "../modules/user";
import { setProfileInfo } from "../modules/profile";
import { Cookies } from "react-cookie";

const Profile = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const cookie=new Cookies;
    const { userObj } = useSelector(state => ({ userObj: state.user.userObj })); //계정 user 정보

    const projectObj = {
        idea: "이미지 인식을 활용한 앱 서비스",
        isCompletion: false,
        User: { nickName: "닉네임" },
        Interests: [{ name: "안드로이드" }, { name: "데이터 분석" }, { name: "앱 서버" }],
        Category: { name: "인공지능" }
        //+ funding count
    }
    const { profileObj } = useSelector(state => ({ profileObj: state.profile.profileObj })); //prifile user 정보
    useEffect(() => {
        axios.get(`/user/${profileObj.id}`)
            .then(res => dispatch(setProfileInfo(res.data.user)));
    }, [])

    /*계정 user 정보 Get -> 프로픨 수정*/
    const onClickEdit = () => {
        axios.get(`/user/${userObj.id}`).then(res => {
            dispatch(setUserInfo(res.data.user));
            history.push("/profile/edit");
        });
    }

    /*계정 user 정보 Get -> 프로픨 수정*/
    const onClickLogout = () => {
        dispatch(setLoggedInfo(false, null));
        cookie.remove('token');
        history.push("/");
    }
    return (
        <>
            <Header />
            <div className="main-container">
                <ProfileWrapper className="col-container">
                    <ProfileInfo profile={profileObj} />
                </ProfileWrapper>
                <CardWrapper className="col-container">
                    {userObj.id == profileObj.id &&
                        <BtnWrapper>
                            <GreenBorderBtn onClick={onClickEdit}>프로필 수정</GreenBorderBtn>
                            <RedBorderBtn onClick={onClickLogout}>로그아웃</RedBorderBtn>
                        </BtnWrapper>}
                    <ProfileCard projectObj={projectObj} />
                    <CompleteProject projectObj={projectObj}></CompleteProject>
                </CardWrapper>
            </div>
        </>);
}

export default Profile;

const ProfileWrapper = styled.div`
    margin-top: 50px;
`
const CardWrapper = styled.div`
    width:65%;
`

const BtnWrapper = styled.div`
    display:flex;
    justify-content: end;
    gap: 10px;
`
const RedBorderBtn = styled.button`
    border: solid thin #F55959;
    border-radius: 5px;
    color: #F55959;
    padding: 5px 15px;
    font-size: small;
    text-align: center;

`