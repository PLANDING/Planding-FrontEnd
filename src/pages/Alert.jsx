import React, { useEffect } from "react";
import { useState } from "react/cjs/react.development";
import styled from "styled-components";
import AlertCard from "../components/Alert/AlertCard";
import Header from "../components/common/Header";
import TopDiv from "../components/common/TopDIv";

const Alert = () => {
    /*dummy data */
    const arr = [{
        content: "‘happy’님이 플랜딩의 추천시스템을 통해 당신에게 개발 협업을 요청했습니다.",
        projectId: "1",
        fromUserId: "1"
    },
    {
        content: "‘이미지 인식을 활용한 앱서비스’ 프로젝트 펀딩이 마감되었습니다.",
        projectId: "1"
    }];

    const [alertArr, setAlertArr] = useState([]);
    useEffect(() => {
        setAlertArr(arr);
    }, [])
    return (<>
        <Header />
        <Container className="main-container">
            <TopDiv pageLabel={"알림함"} />
            <AlertContainer className="col-container">
                {alertArr.map(alert => <AlertCard content={alert.content} projectId={alert.projectId} fromUserId={alert.fromUserId} />)}
            </AlertContainer>
        </Container>
    </>);
}
export default Alert;
const Container = styled.div``
const AlertContainer = styled.div`
    border: solid thin #37C56E;
    padding: 30px;
    width: 80%;
    border-radius: 10px;
    margin-top: 20px;
    gap: 30px;
`