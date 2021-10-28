import react, { useState } from "react";
import { useHistory } from "react-router";
import Header from "../components/Header";
import "../stylesheets/login.css"

const Login = () => {
    const [input, setInput]=useState({id:"", pw:""});
    const history = useHistory();
    const onChangeInput=(e)=>{
        const {target:{name, value}}=e;
        setInput({...input, [name]:value});
    }
    const onClickRegister=()=>{
        history.push("/register");
    }
    return (<>
        <Header />
        <div className="login main-container">
            <div className="top-div">
                <span>로그인</span>
                <hr className="green-hr" />
            </div>
            <div className="border-box col-container">
                    <img src="logo.png" width="100px" />{/* 
                <div className="row-container logo-wrapper">
                    <img src="logo.png" width="100px" />
                    <span>당신의 아이디어에 펀딩합니다</span>
                </div> */}
                <div className="wrapper col-container">
                    <form className="col-container">
                        <div className="row-container">
                            <span>아이디</span>
                            <input type="text" name="id" value={input.id} onChange={onChangeInput} placeholder="이메일"/>
                        </div>
                        <div className="row-container">
                            <span>비밀번호</span>
                            <input type="password" name="pw" value={input.pw} onChange={onChangeInput}/>
                        </div>
                        <input className="green-btn" type="submit" value="로그인" />
                    </form>
                    <button className="border-btn" onClick={onClickRegister}>회원가입</button>
                </div>
            </div>
        </div>
    </>);
}
export default Login;