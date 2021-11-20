import styled from "styled-components";
import { Devider, InfoWrapper } from "../../pages/Register";
import GreenBtn from "../common/Button";
import InterestForm from "../common/InterestForm";
import SkillForm from "../common/SkillForm";

const SkillInfo = ({ registerInfo, onChangeInfo, interestArr, setInterestArr, skillArr, setSkillArr }) => {

    return (
        <>
            <Devider>
                <span>기술 정보</span>
                <hr />
            </Devider>
            <InfoWrapper className="col-container">

                <Wrapper className="row-container">
                    <span id="label">개인 사이트</span>
                    <input type="url" name="site" value={registerInfo.site} placeholder="ex. 블로그, 노션 주소" onChange={onChangeInfo} />
                </Wrapper>

                <Wrapper className="row-container">
                    <span id="label">Github</span>
                    <input type="url" name="gitHub" value={registerInfo.git} placeholder="" onChange={onChangeInfo} />
                    <GreenBtn type="button">기술 스택 분석</GreenBtn>
                </Wrapper>

                <Wrapper skill>
                    <span id="label">기술 스택</span>
                    <SkillForm skillArr={skillArr} setSkillArr={setSkillArr} />
                </Wrapper>

                <Wrapper className="col-container">
                    <span id="label">관심 분야</span>
                    <InterestForm interestArr={interestArr} setInterestArr={setInterestArr} />
                </Wrapper>
            </InfoWrapper>
        </>
    )
}
export default SkillInfo;

const Wrapper = styled.div`
    &>button{
        margin-left: 5px;
        font-size: small;
        padding: 5px 15px;
    }
    ${props => props.skill && `
    display:flex;
    flex-direction:row;
    &>div{
        flex:1;
    }
    `}
`