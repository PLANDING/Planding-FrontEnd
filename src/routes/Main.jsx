import React from 'react';
import Header from '../components/Header';
import MainProjectCard from '../components/MainProjectCard';

const projectObj = {
    idea: "이미지 인식을 활용한 앱 서비스",
    isCompletion: false,
    User: { nickName: "닉네임" },
    Interests: [{ name: "안드로이드" }, { name: "데이터 분석" }, { name: "앱 서버" }],
    Category: { name: "인공지능" }
    //+ funding count
}

const Main = () => {
    return (
        <>
        <Header />
        <MainProjectCard projectObj={projectObj}/>
        </>
    );
};

export default Main;