import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import GreenBtn from "../components/common/Button";
import Header from "../components/common/Header";
import ProgressCard from "../components/FundingProgress/ProgressCard";
const FundingProgressDetail = () => {
    /*dummyData*/
    const projectObj = {
        idea: "이미지 인식을 활용한 앱 서비스",
        isCompletion: false,
        User: { nickName: "닉네임" },
        Interests: [{ name: "안드로이드" }, { name: "데이터 분석" }, { name: "앱 서버" }],
        Category: { name: "인공지능" }
        //+ funding count
    }
    const history = useHistory();
    const [preogressArr, setProgressArr] = useState([]);
    useEffect(() => {
        //get projects data form server
        setProgressArr([projectObj, projectObj]);
    }, []);
    const onClickCreation = () => {
        history.push("/creation");
    }
    return (<>
        <Header />
        <div className="progress main-container">
            <div className="top-div">
                <div className="row-container wrapper">
                    <div className="col-container">
                        <span>펀딩 진행</span>
                        <span className="small">프로젝트에 펀딩하세요!</span>
                    </div>
                    <GreenBtn onClick={onClickCreation}>펀딩 생성</GreenBtn>
                </div>
                <hr className="green-hr" />
            </div>
            <div className="col-container card-wrapper">
                {preogressArr.map(progress => <ProgressCard projectObj={progress} />)}
            </div>
        </div>
    </>);
}
export default FundingProgressDetail;