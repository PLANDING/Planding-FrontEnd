import react, { useState } from "react";
import { useHistory } from "react-router";
import styled from "styled-components";
import GreenBtn, { GreenBorderBtn } from "../components/common/Button";
import TopDiv from "../components/TopDIv";
import Header from "../components/Header";
import LoginForm from "../components/Login/LoginForm";

const Login = () => {
    const history = useHistory();
    const onClickRegister = () => {
        history.push("/register");
    }
    return (<>
        <Header />
        <div className="login main-container">
            <TopDiv pageLabel="로그인" />
            <Borderbox className="col-container">
                <img src="logo.png" width="100px" />
                <div className="wrapper col-container">

                    <LoginForm />
                    <GreenBorderBtn onClick={onClickRegister}>회원가입</GreenBorderBtn>

                </div>
            </Borderbox>
        </div>
    </>);
}
export default Login;
const Borderbox = styled.div`
width: 50%;
align-items: center;
padding: 50px 0;
margin-top: 50px;
border: solid thin #37C56E;
border-radius: 10px;
&>div{
width: 50%;
margin-top: 50px;
&>button{
  margin-top: 50px;
  align-self: flex-end;
}
}
`