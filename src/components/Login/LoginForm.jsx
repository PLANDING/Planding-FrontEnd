import { useState } from "react";
import styled from "styled-components";
import GreenBtn from "../common/Button";

const LoginForm = () => {
    const [input, setInput] = useState({ id: "", pw: "" });
    const onChangeInput = (e) => {
        const { target: { name, value } } = e;
        setInput({ ...input, [name]: value });
    }
    return (
        <Form className="col-container">
            <div className="row-container">
                <span>아이디</span>
                <input type="text" name="id" value={input.id} onChange={onChangeInput} placeholder="이메일" />
            </div>
            <div className="row-container">
                <span>비밀번호</span>
                <input type="password" name="pw" value={input.pw} onChange={onChangeInput} />
            </div>
            <GreenBtn>로그인</GreenBtn>
        </Form>
    )
}
const Form = styled.form`
width: 100%;
gap: 30px;
input::placeholder{
color: #BCBCBC;
}
.row-container span{
width: 100px;
}
input[type=text],input[type=password]{
width: 100%;
}
`
export default LoginForm;