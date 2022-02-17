import React from 'react';
import styled from 'styled-components';
import { Container } from '../../pages/Project';

const NoticeBox = () => {
  return (
    <Container>
      <Notice>
        진행 중인 프로젝트가 없습니다.
        <br />
        <span>펀딩완료</span> 페이지에서 프로젝트 참여요청을 해보세요!
      </Notice>
    </Container>
  );
};
export default NoticeBox;
const Notice = styled.div`
  text-align: center;
  line-height: 2;
  font-weight: lighter;
  font-size: x-large;
  margin-top: 20%;
  span {
    color: #37c56e;
    font-weight: bold;
    font-size: xx-large;
  }
`;
