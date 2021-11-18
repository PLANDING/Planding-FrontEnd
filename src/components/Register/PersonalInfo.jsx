import axios from "axios";
import styled from "styled-components";
import { Devider, InfoWrapper } from "../../pages/Register";
import { GreenBorderBtn } from "../common/Button";

const PersonalInfo = ({ registerInfo, onChangeInfo, check, setCheck }) => {
    const onClickCheck = (type) => {
        if (type == "email") {
            axios.get(`/auth/check/email/${registerInfo.email}`)
                .then(res => setCheck(p => ({ ...p, email: res.data.isExisted ? "이미 가입된 이메일입니다." : "사용 가능" })))
        }
        if (type == "nickName") {
            checkedValidNick();
        }
    }
    /*닉네임 형식검사&중복검사*/
    const checkedValidNick = () => {
        let valNick = /^[가-힣a-z0-9]{2,20}$/g;
        !valNick.test(registerInfo.nickName) ?
            setCheck(p => ({ ...p, nickName: "2-20자 영소문자/한글/숫자 [공백 및 특수문자 불가]" }))
            :
            axios.get(`/auth/check/nickName/${registerInfo.nickName}`)
                .then(res => setCheck(p => ({ ...p, nickName: res.data.isExisted ? "이미 사용중입니다." : "사용 가능" })));
    }
    return (<>
        <Devider>
            <span>개인 정보</span>
            <hr />
        </Devider>
        <InfoWrapper className="col-container">
            <Wrapper className="row-container" checking={check.email == "사용 가능" && "email"}>
                <span id="point">*</span>
                <span id="label">아이디</span>
                <input type="email" name="email" value={registerInfo.id} placeholder="이메일" onChange={onChangeInfo} />
                <GreenBorderBtn type="button" onClick={() => onClickCheck("email")}>중복확인</GreenBorderBtn>
            </Wrapper>
            {check.email == "이미 가입된 이메일입니다." && <Notice>{check.email}</Notice>}
            <Wrapper className="row-container">
                <span id="point">*</span>
                <span id="label">비밀번호</span>
                <input type="password" name="pw" value={registerInfo.pw} placeholder="" onChange={onChangeInfo} />
            </Wrapper>
            {(check.pw != "" && check.pw != "사용 가능") && <Notice>{check.pw}</Notice>}
            <Wrapper className="row-container" checking={check.pwCheck == "사용 가능" && "pwCheck"}>
                <span id="point">*</span>
                <span id="label">비밀번호 확인</span>
                <input type="password" name="pwCheck" value={registerInfo.pwCheck} placeholder="" onChange={onChangeInfo} />
            </Wrapper>
            {check.pwCheck == "비밀번호가 일치하지 않습니다." && <Notice>{check.pwCheck}</Notice>}
            <Wrapper className="row-container" checking={check.nickName == "사용 가능" && "nickName"}>
                <span id="point">*</span>
                <span id="label">닉네임</span>
                <input type="text" name="nickName" value={registerInfo.nickName} placeholder="최대 20자, 공백 및 특수문자 불가" onChange={onChangeInfo} maxLength={20} />
                <GreenBorderBtn type="button" onClick={() => onClickCheck("nickName")}>중복확인</GreenBorderBtn>
            </Wrapper>
            {(check.nickName != "" && check.nickName != "사용 가능") && <Notice>{check.nickName}</Notice>}
        </InfoWrapper>
    </>)
}
export default PersonalInfo;
const Wrapper = styled.div`
    input[name=${props => props.checking}]{
        border: solid 2px #37C56E;
    }
    &>button{
        margin-left: 5px;
        font-size: small;
        padding: 5px 15px;
    }
`
const Notice = styled.div`
    font-size: x-small;
    padding-left: 170px;
    color:#F55959;
`