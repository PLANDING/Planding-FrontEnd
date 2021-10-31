import react, { useState } from "react";
import { useHistory } from "react-router";
import Header from "../components/Header";
import "../stylesheets/creation.css"
const FundingCreation = () => {
    const history=useHistory();
    const [fundingObj, setFundingObj] = useState({
        idea: "",
        headline: "",
        category:"",
        content: "",
        member_plan: 0,
        member_dev: 0,
    });
    const [skillArr, setSkillArr] = useState(["웹 프론트앤드", "데이터 분석"]);
    const onChangeFunding = (e) => {
        const { target: { name, value } } = e;
        setFundingObj(prev => ({ ...prev, [name]: value }));
    }
    const onClickPlus = (e) => {
        e.target.id == "plan" ?
            setFundingObj(prev => ({ ...prev, member_plan: prev.member_plan++ }))
            :
            setFundingObj(prev => ({ ...prev, member_dev: prev.member_dev++ }))
    }
    const onClickMinus = (e) => {
        if (e.target.id == "plan" && fundingObj.member_plan > 0) {
            setFundingObj(prev => ({ ...prev, member_plan: prev.member_plan-- }))
        }
        else if (e.target.id == "dev" && fundingObj.member_dev > 0) {
            setFundingObj(prev => ({ ...prev, member_dev: prev.member_dev-- }))
        }
    }
    const onSubmit = (e) => {
        e.preventDefault();
    }
    const onClickBack=()=>{
        if(window.confirm("내용이 저장되지 않습니다. 정말 작성을 취소하시겠습니까?")){
            history.push("/progress");
        }
    }
    return (<>
        <Header />
        <div className="creation main-container">
            <div className="top-div">
                <div className="col-container">
                    <span>펀딩 생성</span>
                </div>
                <hr className="green-hr" />
            </div>
            <form onSubmit={onSubmit} >
                <input type="text" value={fundingObj.idea} placeholder="프로젝트명" name="idea" onChange={onChangeFunding} />
                <div className="col-container">
                    <span className="label">프로젝트 주제 <span>*헤드라인</span></span>
                    <input type="text" value={fundingObj.headline} placeholder="예) 이미지 인식을 활용한 앱 서비스" name="headline" onChange={onChangeFunding} />
                </div>
                <div className="col-container">
                    <span className="label">주제 카테고리</span>
                    <div className="select">
                        <select>
                            <option value="defalut" disabled selected hidden>카테고리</option>
                        </select>
                        <span id="sel-arrow"><img src="arrow.png" /></span>
                    </div>
                </div>
                <div className="col-container">
                    <span className="label">기획 내용</span>
                    <textarea name="content" value={fundingObj.content} onChange={onChangeFunding} />
                </div>
                <div className="col-container">
                    <span className="label">기술 카테고리</span>
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

                    <div className="row-container block-wrapper">{
                        skillArr.map(skill => <span className="grey-btn">{skill}<button id="del-btn">x</button></span>)}
                    </div>
                </div>
                <div className="col-container">
                    <span className="label">모집 인원</span>
                    <div className="row-container member-wrapper">
                        <div className="row-container member">
                            <span>기획</span>
                            <div className="row-container">
                                <button  id="plan" onClick={onClickMinus}>-</button>
                                <span id="green">{fundingObj.member_plan}</span>
                                <button id="plan" onClick={onClickPlus}>+</button>
                            </div>
                        </div>
                        <div className="row-container member">
                            <span>개발</span>
                            <div className="row-container">
                                <button id="dev"  onClick={onClickMinus}>-</button>
                                <span id="green">{fundingObj.member_dev}</span>
                                <button id="dev" onClick={onClickPlus} >+</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row-container btn-group">
                    <button className="grey-btn" onClick={onClickBack}>취소</button>
                    <input type="submit" value="생성" className="green-btn" />
                </div>
            </form>
        </div>
    </>);
}
export default FundingCreation;