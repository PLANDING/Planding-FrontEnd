import { useHistory } from "react-router";
import styled from "styled-components";
import AcceptBtnBox from "../Alert/AcceptBtnBox";
import Card, { ProjectHead, Wrapper } from "../common/Card";
import FundingBtnBox from "../common/FundingBtnBox";
import FundingGage from "../common/FundingGage";
import InterestBox from "../common/InterestBox";
import ProfileBox from "../common/ProfileBox";
const ProgressCard = ({ projectObj, usage , idx}) => {
    const history = useHistory();
    const onClickCard = () => {
        history.push("/progress/detail");
    }
    return (<Card border onClick={onClickCard} id={idx}>
        <ProjectHead label={projectObj.isEnd ? "펀딩 마감" : "펀딩진행 중"} idea={projectObj.idea}>
        <ProfileBox  nickName={projectObj.User.nickName} />
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

            {usage!="isNone"&&(usage=="isAlert"?<AcceptBtnBox dDay={3} />:<FundingBtnBox dDay={3} />)}
            
        </div>
    </Card>);
}
export default ProgressCard;

const CategoryWrapper = styled.div`
span:nth-child(3){
  font-weight: normal;
}
`