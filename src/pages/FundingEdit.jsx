import axios from 'axios';
import { useState } from "react";
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import FundingForm from "../components/common/FundingForm";
import Header from "../components/common/Header";
import TopDiv from "../components/common/TopDIv";
const FundingEdit= () => {
    const history = useHistory();
    const { projectObj } = useSelector(state => ({ projectObj: state.project.projectObj }));
    const [fundingObj, setFundingObj] = useState(projectObj);
    const [interestArr, setInterestArr] = useState(projectObj.Interests.map(interest => interest.category + ":" + interest.name));
    console.log(projectObj);
    const [category, setCategory] = useState(projectObj.Category.name);
    
    const onSubmit = (e) => {
        e.preventDefault();
        try{
            axios.patch(`/project/${projectObj.id}`,{...fundingObj, interestArr, category}).then(res => {
                res.status === 200 && history.push("/progress");
            })
        }catch(err){
            alert(err.message);
        }
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