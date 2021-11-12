import { useState } from "react";
import { useHistory } from "react-router";
import FundingForm from "../components/common/FundingForm";
import Header from "../components/common/Header";
import TopDiv from "../components/common/TopDIv";
const FundingCreation = () => {
    /*dummy data */
    const [fundingObj, setFundingObj] = useState({
        idea: "",
        headline: "",
        category:"",
        content: "",
        member_plan: 0,
        member_dev: 0,
    });
    const [skillArr, setSkillArr] = useState(["웹 프론트앤드", "데이터 분석"]);
    
    const onSubmit = (e) => {
        e.preventDefault();
    }
    return (<>
        <Header />
        <div className="creation main-container">
            <TopDiv pageLabel="펀딩 생성"/>
            <FundingForm funding={fundingObj} skillArr={skillArr} onSubmit={onSubmit}/>
        </div>
    </>);
}
export default FundingCreation;