import react, { useEffect, useState } from "react";
import CompletionCard from "../components/CompletionCard";
import Header from "../components/Header";
import "../stylesheets/completion.css"
const FundingCompletion = () => {
    /*dummyData*/
    const projectObj = {
        idea: "이미지 인식을 활용한 앱 서비스",
        isCompletion: false,
        member_plan: 2,
        member_dev: 2,
        User: { nickName: "닉네임" },
        Interests: [{ name: "안드로이드" }, { name: "데이터 분석" }, { name: "앱 서버" }],
        //+ funding count
    }
    const [completionArr, setCompletionArr] = useState([]);
    useEffect(() => {
        //get projects data form server
        setCompletionArr([projectObj, projectObj]);
    }, [])
    return (<>
        <Header />
        <div className="completion main-container">
            <div className="top-div">
                <div className="col-container">
                    <span>펀딩 완료</span>
                    <span className="small">프로젝트에 참여하세요!</span>
                </div>
                <hr className="green-hr" />
            </div>
            <div className="col-container card-wrapper">
                {completionArr.map(completion => <CompletionCard projectObj={completion} />)}
            </div>
        </div>
    </>);
}
export default FundingCompletion;