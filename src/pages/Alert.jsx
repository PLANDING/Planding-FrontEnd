import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useState } from "react/cjs/react.development";
import styled from "styled-components";
import AlertCard from "../components/Alert/AlertCard";
import Header from "../components/common/Header";
import TopDiv from "../components/common/TopDIv";

const Alert = () => {
    const { userObj } = useSelector(state => ({ userObj: state.user.userObj })); //계정 user 정보

    const [alertArr, setAlertArr] = useState([]);
    /* 모든 alert get  */
    useEffect(() => {
        axios.get(`/alert/${userObj.id}`).then(res => {
            setAlertArr(res.data.Alerts);
        });
    });

    return (<>
        <Header />
        <Container className="main-container">
            <TopDiv pageLabel={"알림함"} />
            <AlertContainer className="col-container">
                
                {alertArr.length == 0 ?
                    <NoticeBox className="row-container">
                        <FontAwesomeIcon icon={faSearch} style={{ "font-size": "50px", "color": "#37C56E" }} />
                        {'알림 내역이 없습니다.'}
                    </NoticeBox>
                    :
                    alertArr.map(alert => <AlertCard content={alert.content} date={alert.createdAt} projectId={alert.ProjectId} fromUser={alert.User} alertId={alert.id}/>)}

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
const NoticeBox = styled.div`
    justify-content: center;
    font-weight: lighter;
    color: #bdbdbd;
    gap: 10px;
    padding: 20px 0;
`