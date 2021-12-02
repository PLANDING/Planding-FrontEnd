import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Header from "../components/common/Header";
import TopDIv from "../components/common/TopDIv";
import CompletionCard from "../components/FundingCompletion/CompletionCard";
const FundingCompletion = () => {
    const {userObj}=useSelector(state=>({userObj:state.user.userObj}));
    /*dummyData*/
    const projectObj = {
        idea: "이미지 인식을 활용한 앱 서비스",
        isCompletion: true,
        isEnd:false,
        member_plan: 2,
        member_dev: 2,
        User: { nickName: "닉네임" },
        Interests: [{ name: "안드로이드" }, { name: "데이터 분석" }, { name: "앱 서버" }],
        //+ funding count
    }
    const [completionArr, setCompletionArr] = useState([]);
    useEffect(() => {
        setCompletionArr([projectObj, projectObj]);
    }, []);
    return (<>
        <Header />
        <div className="completion main-container">
            <TopDIv pageLabel={"펀딩완료"} subLabel={"프로젝트에 참여하세요!"}/>

            <CardWrapper className="col-container">
                {completionArr.map((completion, idx) => <CompletionCard idx={idx} projectObj={completion} usage={userObj.id===completion.User.id&&"isNone"} />)}
            </CardWrapper>
        </div>
    </>);
}
export const CardWrapper=styled.div`
    width: 80%;
    gap: 20px;
`
export default FundingCompletion;