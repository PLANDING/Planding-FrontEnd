import { useState } from "react";
import FundingForm from "../components/common/FundingForm";
import Header from "../components/common/Header";
import TopDiv from "../components/common/TopDIv";
const FundingEdit= () => {
    /*dummy data */
    const [fundingObj, setFundingObj] = useState({
        idea: "테스트",
        headline: "테스트",
        content: "테스트",
        member_plan: 2,
        member_dev: 3,
    });
    const [interestArr, setInterestArr] = useState(["프론트엔드:웹 프론트앤드", "백엔드:데이터 분석"]);
    const [category, setCategory] = useState("공유서비스");
    
    const onSubmit = (e) => {
        e.preventDefault();
    }
    
    return (<>
        <Header />
        <div className="creation main-container">
            <TopDiv pageLabel="펀딩 수정"/>
            <FundingForm interestArr={interestArr} setInterestArr={setInterestArr} fundingObj={fundingObj} setFundingObj={setFundingObj} setCategory={setCategory} onSubmit={onSubmit}/>
        </div>
    </>);
}
export default FundingEdit;