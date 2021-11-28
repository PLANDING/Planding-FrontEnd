import styled from "styled-components";
import DateBox from "../common/DateBox";
import ProfileBox from "../common/ProfileBox";
import CompletionCard from "../FundingCompletion/CompletionCard";
import ProgressCard from "../FundingProgress/ProgressCard";

const AlertCard = ({ content, date, projectId, fromUser }) => {
    /*dummy data */
    const projectObj = {
        idea: "이미지 인식을 활용한 앱 서비스",
        isCompletion: false,
        isEnd: true,
        User: { nickName: "닉네임" },
        Interests: [{ name: "안드로이드" }, { name: "데이터 분석" }, { name: "앱 서버" }],
        Category: { name: "인공지능" },
        //+ funding count
    }
    return (
        <Container className="col-container">
            <Content className="row-container">
                {fromUser ?
                    <><ProfileBox profileUrl={fromUser.ProfileImg?.url} />'{fromUser?.nickName}'{content}</>
                    : content}
                    
                <DateBox dateString={date} side />
            </Content>
            
            {projectObj.isCompletion ?
                <CompletionCard projectObj={projectObj} usage={fromUser ? "isAlert" : "isNone"} /> :
                <ProgressCard projectObj={projectObj} usage={fromUser ? "isAlert" : "isNone"} />}
        </Container>
    )
}
export default AlertCard;

const Container = styled.div`
    width: 100%;
`
const Content = styled.div`
    padding-bottom: 20px;
`