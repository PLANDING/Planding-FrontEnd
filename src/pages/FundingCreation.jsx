import { useState } from "react";
import { useHistory } from "react-router";
import FundingForm from "../components/common/FundingForm";
import Header from "../components/common/Header";
import TopDiv from "../components/common/TopDIv";
const FundingCreation = () => {
    /*init data */
    const [fundingObj, setFundingObj] = useState({
        idea: "",
        headline: "",
        content: "",
        member_plan: 0,
        member_dev: 0,
    });
    const [interestArr, setInterestArr] = useState([]);
    const [category, setCategory] = useState();
    
    const onSubmit = (e) => {
        e.preventDefault();
    }
    return (<>
        <Header />
        <div className="creation main-container">
            <TopDiv pageLabel="펀딩 생성"/>
            <FundingForm interestArr={interestArr} setInterestArr={setInterestArr} fundingObj={fundingObj} setFundingObj={setFundingObj} setCategory={setCategory} onSubmit={onSubmit}/>
        </div>
    </>);
}
export default FundingCreation;