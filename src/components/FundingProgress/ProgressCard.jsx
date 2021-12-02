import axios from "axios";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import styled from "styled-components";
import { setProjectInfo } from "../../modules/project";
import AcceptBtnBox from "../Alert/AcceptBtnBox";
import Card, { ProjectHead, Wrapper } from "../common/Card";
import FundingBtnBox from "../common/FundingBtnBox";
import FundingGage from "../common/FundingGage";
import InterestBox from "../common/InterestBox";
import ProfileBox from "../common/ProfileBox";
const ProgressCard = ({ projectObj, usage, idx }) => {
    const history = useHistory();
    const dispatch = useDispatch();
    const onClickCard = () => {
        axios.get(`/project/progress/detail/${projectObj.id}`)
            .then(res => {
                dispatch(setProjectInfo(res.data.project));
                history.push("/progress/detail");
            })
    }
    const ms = new Date().getTime() - new Date(projectObj.createdAt).getTime();
    const date = Math.ceil(ms / (1000 * 3600 * 24));

    const {isLoggedin, userObj}=useSelector(state=>({isLoggedin:state.user.isLoggedin, userObj:state.user.userObj}));
    const [isFunding, setIsFunding] = useState(isLoggedin?projectObj.Fundings.findIndex(i => i.User.id == userObj.id) != -1:false);

    return (<Card border id={idx}>
        <ProjectHead label={date > 7 ? "펀딩 마감" : "펀딩진행 중"} idea={projectObj.idea} onClickCard={onClickCard}>
            <ProfileBox nickName={projectObj.User.nickName} userId={projectObj.User.id} profileUrl={projectObj.User.ProfileImg?.url} />
        </ProjectHead>
        <div className="row-container" >
            <Wrapper className="col-contaienr main-wrapper" onClick={onClickCard}>
                <CategoryWrapper className="row-container">
                    <span>카테고리</span><span>{">"}</span>
                    <span>{projectObj.Category?.name}</span>
                </CategoryWrapper>

                <InterestBox interestArr={projectObj.Interests} />

                <FundingGage gage={(projectObj.Fundings.length * 500 / 30).toFixed(1)} fundingCnt={projectObj.Fundings.length * 500} />
            </Wrapper>

            {usage != "isNone" && (usage == "isAlert" ? <AcceptBtnBox dDay={7 - date} /> : <FundingBtnBox dDay={7 - date} projectId={projectObj.id} userId={userObj?.id} isfunding={isFunding} />)}

        </div>
    </Card>);
}
export default ProgressCard;

const CategoryWrapper = styled.div`
    span:nth-child(3){
    font-weight: normal;
    }
`