import react, { useState } from "react";
import Header from "../components/Header";
import "../stylesheets/register.css"

const Register = () => {
    const [registerInfo, setRegisterInfo] = useState({
        id: "",
        pw: "",
        nickName: "",
        site: "",
        git: "",

    })
    const [skillArr, setSkillArr] = useState(["javaScript", "React"]);
    const [interestArr, setinterestArr] = useState(["웹 프론트앤드"]);
    return (<>
        <Header />
        <div className="register main-container">
            <div className="top-div">
                <span>회원 가입</span>
                <hr className="green-hr" />
            </div>
            <form className="col-container">
                <div className="devider">
                    <span>개인 정보</span>
                    <hr className="green-hr" />
                </div>
                <div className="col-container wrapper">
                    <div className="row-container">
                        <span id="point">*</span>
                        <span id="label">아이디</span>
                        <input type="text" name="id" value={registerInfo.id} placeholder="이메일" />
                        <button className="border-btn">중복확인</button>
                    </div>
                    <div className="row-container">
                        <span id="point">*</span>
                        <span id="label">비밀번호</span>
                        <input type="password" name="pw" value={registerInfo.pw} placeholder="" />
                    </div>
                    <div className="row-container">
                        <span id="point">*</span>
                        <span id="label">비밀번호 확인</span>
                        <input type="password" name="pw" value={registerInfo.pw} placeholder="" />
                    </div>
                    <div className="row-container">
                        <span id="point">*</span>
                        <span id="label">닉네임</span>
                        <input type="text" name="id" value={registerInfo.nickName} placeholder="" />
                        <button className="border-btn">중복확인</button>
                    </div>
                </div>

                <div className="devider">
                    <span>기술 정보</span>
                    <hr className="green-hr" />
                </div>
                <div className="col-container wrapper">
                    <div className="row-container">
                        <span id="label">개인 사이트</span>
                        <input type="url" name="id" value={registerInfo.site} placeholder="ex. 블로그, 노션 주소" />
                    </div>
                    <div className="row-container">
                        <span id="label">Github</span>
                        <input type="url" name="pw" value={registerInfo.git} placeholder="" />
                        <button className="green-btn">기술 스택 분석</button>
                    </div>
                    <div className="col-container">
                        <span id="label">기술 스택</span>
                        <div className="row-container select-wrapper">
                            <div className="select">
                                <select>
                                    <option value="defalut" disabled selected hidden>분야</option>
                                    <option value="defalut" >분야2</option>
                                </select>
                                <span id="sel-arrow"><img src="arrow.png" /></span>
                            </div>
                            <div className="select">
                                <select>
                                    <option value="defalut" disabled selected hidden>언어|프레임워크|라이브러리</option>
                                </select>
                                <span id="sel-arrow"><img src="arrow.png" /></span>
                            </div>
                            <button className="border-btn">추가</button>
                        </div>
                        <div className="row-container block-wrapper">
                            {skillArr.map(skill => <span className="green-btn">{skill}<button id="del-btn">x</button></span>)}
                        </div>
                    </div>
                    <div className="col-container">
                        <span id="label">관심 분야</span>
                        <div className="row-container select-wrapper">

                            <div className="select">
                                <select>
                                    <option value="defalut" disabled selected hidden>분야</option>
                                </select>
                                <span id="sel-arrow"><img src="arrow.png" /></span>
                            </div>
                            <div className="select">
                                <select>
                                    <option value="defalut" disabled selected hidden>소분야</option>
                                </select>
                                <span id="sel-arrow"><img src="arrow.png" /></span>
                            </div>
                            <button className="border-btn">추가</button>
                        </div>

                        <div className="row-container block-wrapper">
                            {interestArr.map(interest => <span className="border-btn">{interest}<button id="del-btn">x</button></span>)}
                        </div>
                    </div>
                </div>
                <input type="submit" className="green-btn" value="회원 가입" />
            </form>
        </div>
    </>);
}
export default Register;