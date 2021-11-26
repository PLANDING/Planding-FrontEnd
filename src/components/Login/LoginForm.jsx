import { useState } from "react";
import styled from "styled-components";
import GreenBtn from "../common/Button";
import axios from "axios";
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";
import { setLoggedInfo } from "../../modules/user";

const LoginForm = () => {
    const history=useHistory();
    const dispatch=useDispatch();

    const [input, setInput] = useState({ id: "", pw: "" });
    const onChangeInput = (e) => {
        const { target: { name, value } } = e;
        setInput({ ...input, [name]: value });
    }

    const [notice,setNotice]=useState("");
    const onSubmit=(e)=>{
        e.preventDefault();
        try{
            axios.post("/auth",{...input}).then(res=>{
                console.log(res.data);
                if(res.status===204){
                    /* 로그인 정보 없을 경우 */
                    setNotice("회원 정보가 없거나, 정보가 일치하지 않습니다.");
                }
                if(res.status==200){
                    /*로그인 성공 */
                    dispatch(setLoggedInfo(true, res.data.user));
                    history.push("/");
                }
            })
        }catch(err){

        }
    }
    return (
        <Form className="col-container" onSubmit={onSubmit}>
            <Wrapper className="row-container">
                <span>아이디</span>
                <input type="text" name="id" value={input.id} onChange={onChangeInput} placeholder="이메일" />
            </Wrapper>
            <Wrapper className="row-container">
                <span>비밀번호</span>
                <input type="password" name="pw" value={input.pw} onChange={onChangeInput} />
            </Wrapper>
            <GreenBtn>로그인</GreenBtn>
            <Notice>{notice}</Notice>
        </Form>
    )
}
const Form = styled.form`
    width: 100%;
    gap: 30px;
`
const Wrapper=styled.div`
    span{
        width: 100px;
    }
    input[type=text],input[type=password]{
        width: 100%;
    }
`
const Notice=styled.div`
    color:#F55959;
    text-align: center;
    font-size: small;
`
export default LoginForm;