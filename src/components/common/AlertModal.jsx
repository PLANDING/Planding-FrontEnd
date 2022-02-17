import { useHistory } from 'react-router';
import styled from 'styled-components';
/* Header 알림 모달창 component */
const AlertModal = ({ alertArr }) => {
  const history = useHistory();

  /* 알림 페이지로 이동 */
  const onClickDetail = () => {
    history.push('/alert');
  };
  return (
    <Container className="col-container">
      <Wrapper>
        {alertArr.length == 0 ? (
          <Box none>{'알림이 없습니다.'}</Box>
        ) : (
          alertArr.map((alert, idx) => (
            <Box key={idx}>{`'${alert.User.nickName}'${alert.content}`}</Box>
          ))
        )}
      </Wrapper>
      <Button onClick={onClickDetail}>자세히 보기</Button>
    </Container>
  );
};
export default AlertModal;
const Container = styled.div`
  border: solid thin #37c56e;
  border-radius: 10px;
  position: absolute;
  background-color: white;
  transform: translate(-50%, 10%);
  width: 300px;
  min-height: 300px;
  z-index: 999;
`;
const Wrapper = styled.div`
  flex: 1;
`;
const Box = styled.div`
  font-size: small;
  margin: 15px;
  border-bottom: solid thin #dbdbdb;
  padding-bottom: 10px;
  ${(props) =>
    props.none &&
    `text-align:center;
        color: #dbdbdb;
    `}
`;
const Button = styled.button`
  background-color: #37c56e;
  width: 100%;
  text-align: center;
  color: white;
  border-radius: 0 0 8px 8px;
  padding: 5px 0;
  font-size: small;
`;
