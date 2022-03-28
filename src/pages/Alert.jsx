import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useState } from 'react/cjs/react.development';
import styled from 'styled-components';
import AlertCard from '../components/Alert/AlertCard';
import { Flex } from '../components/common/Flex';
import Header from '../components/common/Header';
import TopDiv from '../components/common/TopDIv';

const Alert = () => {
  const { userObj } = useSelector((state) => ({ userObj: state.user.userObj })); //계정 user 정보

  const [alertArr, setAlertArr] = useState([]);

  useEffect(() => {
    axios.get(`/alert/${userObj?.id}`).then((res) => {
      setAlertArr(res.data.Alerts);
    });
  });

  return (
    <>
      <Header />
      <Container className="main-container">
        <TopDiv pageLabel={'알림함'} />
        <AlertContainer dir="column" jCCenter gap="30px" width="80%">
          {alertArr.length == 0 ? (
            <NoticeBox dir="row" center gap="10px">
              <FontAwesomeIcon icon={faSearch} />
              {'알림 내역이 없습니다.'}
            </NoticeBox>
          ) : (
            alertArr.map((alert, idx) => (
              <AlertCard
                key={idx}
                content={alert.content}
                date={alert.createdAt}
                projectId={alert.ProjectId}
                fromUser={alert.User}
                alertId={alert.id}
              />
            ))
          )}
        </AlertContainer>
      </Container>
    </>
  );
};
export default Alert;
const Container = styled.div``;
const AlertContainer = styled(Flex)`
  border: solid thin #37c56e;
  padding: 30px;
  border-radius: 10px;
  margin-top: 20px;
`;
const NoticeBox = styled(Flex)`
  font-weight: lighter;
  color: #bdbdbd;
  padding: 20px 0;
  & > svg {
    font-size: 50px;
    color: #37c56e;
  }
`;
