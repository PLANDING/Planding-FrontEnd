import { useEffect, useState } from "react";
import ProgressCard from "../components/FundingProgress/ProgressCard";
import Header from "../components/common/Header";
import TopDIv from "../components/common/TopDIv";
import { CardWrapper } from "./FundingCompletion";
import { useSelector } from "react-redux";
const FundingProgress = () => {
    const {userObj}=useSelector(state=>({userObj:state.user.userObj}));
    /*dummyData*/
    const projectObj = {
        idea: "이미지 인식을 활용한 앱 서비스",
        isCompletion: false,
        isEnd:false,
        User: { nickName: "닉네임" },
        Interests: [{ name: "안드로이드" }, { name: "데이터 분석" }, { name: "앱 서버" }],
        Category: { name: "인공지능" }
        //+ funding count
    }
    const [preogressArr, setProgressArr] = useState([]);
    useEffect(() => {
        setProgressArr([projectObj, projectObj]);
    }, []);
    return (<>
        <Header />
        <div className="progress main-container">
            <TopDIv pageLabel={"펀딩 진행"} subLabel={"프로젝트에 펀딩하세요!"}  isProgress isGreen />
            <CardWrapper className="col-container">
                {preogressArr.map((progress, idx) => <ProgressCard projectObj={progress} idx={idx}/>)}
            </CardWrapper>
        </div>
    </>);
}
export default FundingProgress;