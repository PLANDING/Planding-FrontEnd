import react from "react";
import Gage from "./Gage";
import "../stylesheets/card.css"
const ProgressCard = ({ projectObj }) => {
    return (<div className="Card progressCard">
        <div className="row-container top-wrapper">
            <span className="green-btn">{projectObj.isCompletion ? "펀딩마감" : "펀딩진행 중"}</span>
            <h2>{projectObj.idea}</h2>
            <div className="profile row-container">
                <div className="profile-img">
                    <img src="user.png" width="100%" />
                </div>
                <span>{projectObj.User.nickName}</span>
            </div>
        </div>
        <div className="row-container">
            <div className="col-contaienr main-wrapper">
                <div className="row-container category-wrapper">
                    <span>카테고리</span><span>{">"}</span>
                    <span>{projectObj.Category.name}</span>
                </div>
                <div className="row-container interest-group">
                    {projectObj.Interests.map(interest =>
                        <span className="grey-btn">{interest.name}</span>)}
                </div>
                <div className="col-container funding-wrapper">
                    <div className="row-container">
                        <span>펀딩</span>
                        <span className="funding-cnt">{ }1,200</span>
                    </div>
                    <div className="row-container gage-wrapper">
                        <Gage gage="80" />
                        <span>{ }80%</span>
                    </div>
                </div>
            </div>
            <div className="col-container bottom-wrapper">
                <div className="col-container">
                    <span id="d-day">D-{ }3</span>
                    <button className="green-btn">펀딩 하기</button>
                </div>
            </div>
        </div>
    </div>);
}
export default ProgressCard;