import { Devider, InfoWrapper } from "../../pages/Register";
import { GreenBorderBtn } from "../common/Button";

const PersonalInfo = ({registerInfo, onChangeInfo}) => {
    return (<>
        <Devider>
            <span>개인 정보</span>
            <hr className="green-hr" />
        </Devider>
        <InfoWrapper className="col-container wrapper">
            <div className="row-container">
                <span id="point">*</span>
                <span id="label">아이디</span>
                <input type="text" name="id" value={registerInfo.id} placeholder="이메일" onChange={onChangeInfo}/>
                <GreenBorderBtn>중복확인</GreenBorderBtn>
            </div>
            <div className="row-container">
                <span id="point">*</span>
                <span id="label">비밀번호</span>
                <input type="password" name="pw" value={registerInfo.pw} placeholder="" onChange={onChangeInfo}/>
            </div>
            <div className="row-container">
                <span id="point">*</span>
                <span id="label">비밀번호 확인</span>
                <input type="password" name="pwCheck" value={registerInfo.pwCheck} placeholder="" onChange={onChangeInfo}/>
            </div>
            <div className="row-container">
                <span id="point">*</span>
                <span id="label">닉네임</span>
                <input type="text" name="nickName" value={registerInfo.nickName} placeholder="" onChange={onChangeInfo}/>
                <GreenBorderBtn>중복확인</GreenBorderBtn>
            </div>
        </InfoWrapper>
    </>)
}
export default PersonalInfo;