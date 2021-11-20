import { useState } from "react";
import styled from "styled-components";
import GreenBtn from "../components/common/Button";
import Header from "../components/common/Header";
import PersonalInfo from "../components/Register/PersonalInfo";
import SkillInfo from "../components/Register/SkillInfo";
import TopDiv from "../components/common/TopDIv";
import axios from "axios";
import { useHistory } from "react-router";

const Register = () => {
  const history = useHistory();
  const [registerInfo, setRegisterInfo] = useState({
    email: "",
    pw: "",
    pwCheck: "",
    nickName: "",
    site: "",
    gitHub: "",
  })
  const [check, setCheck] = useState({
    email: "",
    pw: "",
    pwCheck: "",
    nickName: ""
  })

  const [interestArr, setInterestArr] = useState([]);
  const [skillArr, setSkillArr] = useState([]);

  const onChangeInfo = (e) => {
    const { target: { name, value } } = e;
    setRegisterInfo(prev => ({ ...prev, [name]: value }));
    name == "email" && setCheck(p=>({...p, email:""}));
    name == "nickName" && setCheck(p=>({...p, nickName:""}));
    name == "pw" && checkedValidPW(value);

    name == "pwCheck" && setCheck(p => ({ ...p, pwCheck: registerInfo.pw == value ? "사용 가능" : "비밀번호가 일치하지 않습니다." }));

  }

  const checkedValidPW = (value) => {
    let valPw = /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+]).{8,16}$/g;
    if (!valPw.test(value)) {
      setCheck(p => ({ ...p, pw: '8-16자, 숫자/영문/특수문자 각 1자리 이상' }));
    }
    else {
      value.search(/\s/) != -1 ?
        setCheck(p => ({ ...p, pw: '8-16자, 숫자/영문/특수문자 각 1자리 이상' })) : setCheck(p => ({ ...p, pw: '사용 가능' }));
    }
  }

  const onSubmit = (e) => {
    e.preventDefault();
    try {
      if (check.email != "사용 가능" || check.pw != "사용 가능" || check.pwCheck != "사용 가능" || check.nickName != "사용 가능") {
        throw new Error("기재사항 조건들을 확인해주세요.");
      }
      if (registerInfo.email == "" || registerInfo.pw == "" || registerInfo.nickName == "") {
        throw new Error("필수 항목을 기재해주세요.");
      }

      axios.post("/auth", { ...registerInfo, interestArr: interestArr, skillArr: skillArr }).then(res => {
        res.status == 200 && history.push("/login");
      })
    }
    catch (error) {
      alert(error.message);
    }
  }
  return (<>
    <Header />
    <div className="main-container">
      <TopDiv pageLabel={"회원 가입"} />
      <Form className="col-container" onSubmit={onSubmit}>
        <PersonalInfo registerInfo={registerInfo} onChangeInfo={onChangeInfo} check={check} setCheck={setCheck} />
        <SkillInfo registerInfo={registerInfo} onChangeInfo={onChangeInfo} interestArr={interestArr} setInterestArr={setInterestArr} skillArr={skillArr} setSkillArr={setSkillArr} />
        <GreenBtn>회원 가입</GreenBtn>
      </Form>
    </div>
  </>);
}
const Form = styled.form`
  width: 50%;
  margin-top: 50px;
  gap: 30px;
  input[type=text],input[type=password],input[type=url]{
    flex: 1;
  }
  &>button{  
    width: 50%;
    align-self: center;
    margin-top: 30px;
  }
  #point{
    color: #F55959;
    margin-right: 5px;
  }
  #label{
    width: 150px;
  }
`
export const Devider = styled.div`
  span{
    color: #37C56E;
    padding: 10px;
  }
  hr{
      border: none;
      border-bottom: solid thin #37C56E;
  }
`
export const InfoWrapper = styled.div`
  align-items: center;
  gap: 30px;
  &>div{
    width: 65%;
  }
  &>.col-container #label{
    margin-bottom: 30px;
  }
`
export default Register;
