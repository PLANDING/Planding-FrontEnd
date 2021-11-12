import styled from "styled-components";
import ProfileBox from "../common/ProfileBox";
import CompletionCard from "../FundingCompletion/CompletionCard";
import ProgressCard from "../FundingProgress/ProgressCard";

const AlertCard=({content, projectId, fromUserId})=>{
    const projectObj = {
        idea: "이미지 인식을 활용한 앱 서비스",
        isCompletion: false,
        isEnd:true,
        User: { nickName: "닉네임" },
        Interests: [{ name: "안드로이드" }, { name: "데이터 분석" }, { name: "앱 서버" }],
        Category: { name: "인공지능" },
        //+ funding count
    }
    return(
        <Container className="col-container">
            <Content className="row-container">{fromUserId&&<ProfileBox/>}{content}</Content>
            {projectObj.isCompletion?
            <CompletionCard projectObj={projectObj} usage={fromUserId?"isAlert":"isNone"}/>:
            <ProgressCard projectObj={projectObj} usage={fromUserId?"isAlert":"isNone"}/>}
        </Container>
    )
}
export default AlertCard;

const Container=styled.div`
    width: 100%;
`
const Content=styled.div`
    padding-bottom: 20px;
`