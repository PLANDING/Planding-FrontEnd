import { faDollarSign } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useHistory } from "react-router";
import Card, { ProjectHead, Wrapper } from "../common/Card";
import InterestBox from "../common/InterestBox";
import JoinBtnBox from "../common/JoinBtnBox";
import ProfileBox from "../common/ProfileBox";
import RecruitmentBox from "../common/RecruitmentBox";
const CompletionCard = ({ projectObj }) => {
    const history = useHistory();
    const onClickCard = () => {
        history.push("/completion/detail");
    }
    return (<Card onClick={onClickCard}>
        <ProjectHead label={projectObj.isCompletion ? "모집 완료" : "모집 중"} idea={projectObj.idea}>
        <ProfileBox nickName={projectObj.User.nickName} />
        </ProjectHead>
        <div className="row-container">

            <Wrapper className="col-contaienr">

                <RecruitmentBox member_plan={projectObj.member_plan} member_dev={projectObj.member_dev} />

                <InterestBox interestArr={projectObj.Interests} />

                <div className="row-container">
                    <span>펀딩 이력 <FontAwesomeIcon icon={faDollarSign}/></span>
                    <span id="funding-cnt">{ }1,200</span>
                </div>
            </Wrapper>

            <JoinBtnBox dDay={3} />
        </div>

    </Card>);
}


export default CompletionCard;