import { faDollarSign } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { setProjectInfo } from "../../modules/project";
import AcceptBtnBox from "../Alert/AcceptBtnBox";
import Card, { ProjectHead, Wrapper } from "../common/Card";
import InterestBox from "../common/InterestBox";
import JoinBtnBox from "../common/JoinBtnBox";
import ProfileBox from "../common/ProfileBox";
import RecruitmentBox from "../common/RecruitmentBox";
const CompletionCard = ({ projectObj, usage, idx }) => {
    const history = useHistory();
    const dispatch = useDispatch();
    /*상세 페이지 이동 */
    const onClickCard = () => {
        axios.get(`/project/completion/detail/${projectObj.id}`)
            .then(res => {
                dispatch(setProjectInfo(res.data.project));
                history.push("/completion/detail");
            })
    }
    return (<Card onClick={onClickCard} id={idx}>
            <ProjectHead label={projectObj.isEnd ? "모집 완료" : "모집 중"} idea={projectObj.idea}>
                <ProfileBox nickName={projectObj.User.nickName} profileUrl={projectObj.User.ProfileImg?.url}/>
            </ProjectHead>

            <div className="row-container">
                <Wrapper className="col-container">

                    <RecruitmentBox member_plan={projectObj.member_plan} member_dev={projectObj.member_dev} />
                    <InterestBox interestArr={projectObj.Interests} />

                    <div className="row-container">
                        <span>펀딩 이력 <FontAwesomeIcon icon={faDollarSign} /></span>
                        <span id="funding-cnt">{ }1,200</span>
                    </div>

                </Wrapper>
                {/* Button Group */}
                {/*usage=="isNone" -> none btn*/}
                {usage != "isNone" &&
                    (usage == "isAlert" ?
                        <AcceptBtnBox dDay={3} />
                        : <JoinBtnBox dDay={3} project={{ id: projectObj.id, user: projectObj.User.id }} />)}
            </div>
        </Card>);
}


export default CompletionCard;