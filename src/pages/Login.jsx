import { useHistory } from 'react-router';
import styled from 'styled-components';
import { GreenBorderBtn } from '../components/common/Button';
import Header from '../components/common/Header';
import LoginForm from '../components/Login/LoginForm';
import TopDiv from '../components/common/TopDIv';
import logoImg from '../assets/imgs/logo.png';
import { Flex } from '../components/common/Flex';
const Login = () => {
  const history = useHistory();
  const onClickRegister = () => {
    history.push('/register');
  };
  return (
    <>
      <Header />
      <div className="main-container">
        <TopDiv pageLabel="로그인" />
        <Borderbox className="col-container">
          <img src={logoImg} width="100px" />
          <Flex dir="column" width="50%" gap="30px">
            <LoginForm />
            <JoinBtn onClick={onClickRegister}>회원가입</JoinBtn>
          </Flex>
        </Borderbox>
      </div>
    </>
  );
};
export default Login;
const Borderbox = styled.div`
  width: 50%;
  align-items: center;
  padding: 50px 0;
  margin-top: 50px;
  border: solid thin #37c56e;
  border-radius: 10px;
  box-shadow: 5px 5px 10px 5px #00000010;
  & > div {
    margin-top: 50px;
  }
`;
const JoinBtn = styled(GreenBorderBtn)`
  align-self: flex-end;
`;
