import styled from "styled-components";
import GreenBtn, { GrayBorderBtn } from "../components/common/Button";
import { ProjectHead } from "../components/common/Card";
import Comment from "../components/common/Comment.jsx";
import Header from "../components/common/Header";
import InterestBox from "../components/common/InterestBox";
import JoinBtnBox from "../components/common/JoinBtnBox";
import ProfileBox from "../components/common/ProfileBox";
import TopDiv from "../components/common/TopDIv";
import "../stylesheets/detail.css";
const FundingCompletionDetail = () => {
    /*dummyData*/
    const projectObj = {
        idea: "이미지 인식을 활용한 앱 서비스",
        isCompletion: false,
        headilne: "프로젝트 주제 설명",
        content: "소개 \n 주요기능",
        member_plan: 2,
        member_dev: 2,
        User: { nickName: "닉네임" },
        Category: { name: "인공지능" },
        Interests: [{ name: "안드로이드" }, { name: "데이터 분석" }, { name: "앱 서버" }],
        //+ funding count
    }
    const Comments = [{
        User: {
            id: "",
            profileUrl: "user.png",
            nickName: "사용자1",
        },
        content: "댓글내용",
        date: new Date(),
    }, {
        User: {
            id: "",
            profileUrl: "user.png",
            nickName: "사용자2",
        },
        content: "댓글내용",
        date: new Date(),
    }]
    return (<>
        <Header />
        <div className="completion detail main-container">
            <TopDiv pageLabel="펀딩 완료" subLabel="프로젝트에 참여하세요!" />
            <ProjectHead label={projectObj.isCompletion ? "모집 완료" : "모집 중"} idea={projectObj.idea} headilne={projectObj.headilne}>
                <JoinBtnBox dDay={3} content={"모집 종료까지"} />
            </ProjectHead>
            <div className="row-container wrapper">
                <Warpper className="col-container">
                    <ContentBox user={projectObj.User} content={projectObj.content} />
                    <CommentForm user={projectObj.User} commentArr={Comments} />
                </Warpper>
                <SideWrapper className="col-container">
                    <CategoryBox category={projectObj.Category.name} interestArr={projectObj.Interests} />
                    <MemberBox user={projectObj.User} member_plan={projectObj.member_plan} member_dev={projectObj.member_dev} />
                </SideWrapper>
            </div>
        </div>
    </>);
}
const Warpper=styled.div`
   flex: 1;
border: solid thin #37C56E;

border-radius: 10px;
`
const SideWrapper=styled.div`
gap: 30px;
h4{
    margin-top: 0;
}
`
const ContentBox = ({ user, content }) => {
    return (
        <div className="content-wrapper">
            <div className="row-container">
                <h4>기획 내용</h4>
                <ProfileBox profileUrl={"user.png"} nickName={user.nickName} />
            </div>
            <div className="content">{content.split("\n").map(line => <>{line}<br /></>)}</div>
        </div>
    )
}
const CommentForm = ({ user, commentArr }) => {
    return (<CmtContianer>
        <div id="label">댓글</div>
        <From className="row-container">
            <ProfileBox profileUrl={"user.png"} />
            <textarea type="text" placeholder="댓글을 입력해주세요" />
            <GreenBtn>작성</GreenBtn>
        </From>
        <div>{commentArr.map(comment => <Comment commentObj={comment} isUser={true} />)}</div>
    </CmtContianer>)
}
const CmtContianer= styled.div`
#label{
    width: 100%;
    background-color: #37C56E;
    text-align: center;
    color: white;
    font-size: small;
    padding: 5px 0;
}
`
const From=styled.form`
    width: 100%;
    border: none;
    padding: 20px;
    box-sizing: border-box;
`
const CategoryBox = ({ category, interestArr }) => {
    return (
        <Container className="category-wrapper">
            <h4>주제 카테고리</h4>
            <div className="row-container">
                <span>카테고리</span><span>{">"}</span>
                <span>{category}</span>
            </div>
            <h4>기술 카테고리</h4>
            <InterestBox interestArr={interestArr} />
        </Container>
    )
} 
const Container=styled.div`
    border: solid thin #37C56E;
    padding: 20px;
    border-radius: 10px;
    width: 200px;
    .row-container{
    font-weight: bold;
    margin-bottom: 20px;
    gap: 10px;
    font-size: small;
}
`
const MemberBox = ({ user, member_plan, member_dev }) => {
    return (
        <MemberContainer className="member-wrapper">
            <h4>팀원 모집</h4>
            <h5>리더</h5>
            <ProfileBox profileUrl={"user.png"} nickName={user.nickName} />
            <h5>모집 인원</h5>
            <div className="row-container">
                <GrayBorderBtn>기획<span>{member_plan}명</span></GrayBorderBtn>
                <GreenBtn>기획 참여하기</GreenBtn>
            </div>
            <div className="row-container">
                <GrayBorderBtn>개발<span>{member_dev}명</span></GrayBorderBtn>
                <GreenBtn>개발 참여하기</GreenBtn>
            </div>
        </MemberContainer>
    )

}
const MemberContainer=styled.div`
    border: solid thin #37C56E;
    border-radius: 10px;
    &>h5,div{
    width: 200px;
    margin: 20px;
}
h4{
    background-color: #37C56E;
    padding: 20px;
    width: 200px;
    border-radius: 9px 9px 0 0;
    color: white;
}
.row-container{
    gap: 10px;
}
button{
    font-size: small;
    padding: 5px 10px
}
`
export default FundingCompletionDetail;