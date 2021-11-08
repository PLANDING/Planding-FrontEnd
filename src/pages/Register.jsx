import { useState } from "react";
import styled from "styled-components";
import GreenBtn from "../components/common/Button";
import Header from "../components/common/Header";
import PersonalInfo from "../components/Register/PersonalInfo";
import SkillInfo from "../components/Register/SkillInfo";
import TopDiv from "../components/common/TopDIv";

const Register = () => {
    /*dummy data*/
    const [registerInfo, setRegisterInfo] = useState({
        id: "",
        pw: "",
        nickName: "",
        site: "",
        gitHub: "",
    })
    const onChangeInfo=(e)=>{
        const {target:{name, value}}=e;
        setRegisterInfo(prev=>({...prev, [name]:value}));
    }
    return (<>
        <Header />
        <div className="register main-container">
            <TopDiv pageLabel={"회원 가입"} />
            <Form className="col-container">
                <PersonalInfo registerInfo={registerInfo} onChangeInfo={onChangeInfo}/>
                <SkillInfo  registerInfo={registerInfo} onChangeInfo={onChangeInfo}/>
                <GreenBtn>회원 가입</GreenBtn>
            </Form>
        </div>
    </>);
}
const Form=styled.form`
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
export const Devider=styled.div`
span{
  color: #37C56E;
  padding: 10px;
}
hr{
    border: none;
    border-bottom: solid thin #37C56E;
}
`
export const InfoWrapper=styled.div`
  align-items: center;
  gap: 30px;
  &>div{
  width: 65%;
}
button{
  margin-left: 5px;
  font-size: small;
  padding: 5px 15px;
}
&>.col-container #label{
    margin-bottom: 30px;
}
`
export default Register;
