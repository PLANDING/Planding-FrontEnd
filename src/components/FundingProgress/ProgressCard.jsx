import react from "react";
import ProfileBox from "../common/ProfileBox";
import GreenLabel from "../common/Label";
import InterestBox from "../common/InterestBox";
import FundingBtnBox from "../common/FundingBtnBox";
import FundingGage from "../common/FundingGage";
import styled from "styled-components";
import Card, { ProjectHead, Wrapper } from "../common/Card";
const ProgressCard = ({ projectObj }) => {
    return (<Card border>
        <ProjectHead label={projectObj.isCompletion ? "펀딩마감" : "펀딩진행 중"} idea={projectObj.idea}>
        <ProfileBox profileUrl="user.png" nickName={projectObj.User.nickName} />
        </ProjectHead>
        <div className="row-container">
            <Wrapper className="col-contaienr main-wrapper">
                <CategoryWrapper className="row-container">
                    <span>카테고리</span><span>{">"}</span>
                    <span>{projectObj.Category.name}</span>
                </CategoryWrapper>

                <InterestBox interestArr={projectObj.Interests} />

                <FundingGage gage={80} fundingCnt={1200} />
            </Wrapper>

            <FundingBtnBox dDay={3} />
        </div>
    </Card>);
}
export default ProgressCard;

const CategoryWrapper = styled.div`
span:nth-child(3){
  font-weight: normal;
}
`