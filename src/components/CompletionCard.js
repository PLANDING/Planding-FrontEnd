import react from "react";
import "../stylesheets/completionCard.css"
const CompletionCard = ({ projectObj }) => {
    return (<div className="completionCard">
        <div className="row-container top-wrapper">
            <span className="green-btn">{projectObj.isCompletion ? "모집 완료" : "모집 중"}</span>
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
                <span>모집 인원</span>
                <div className="row-container">
                    <span className="greyborder-btn">기획<span>{projectObj.member_plan}명</span></span>
                    <span className="greyborder-btn">개발<span>{projectObj.member_dev}명</span></span>
                </div>
                <div className="row-container interest-group">
                    {projectObj.Interests.map(interest =>
                        <span className="grey-btn">{interest.name}</span>)}
                </div>
                <div className="row-container">
                    <span>펀딩 이력</span>
                    <span className="funding-cnt">{ }1,200</span>
                </div>
            </div>
            <div className="col-container bottom-wrapper">
                <div className="col-container">
                    <span id="d-day">D-{ }3</span>
                    <button className="green-btn">기획 참여하기</button>
                    <button className="green-btn">개발 참여하기</button>
                </div>
            </div>
        </div>
    </div>);
}
export default CompletionCard;