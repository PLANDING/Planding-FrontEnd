import styled from "styled-components";
import { Devider, InfoWrapper } from "../../pages/Register";
import GreenBtn from "../common/Button";
import InterestForm from "../common/InterestForm";
import SkillForm from "../common/SkillForm";

const SkillInfo = ({registerInfo, onChangeInfo}) => {

    return (
        <>
            <Devider>
                <span>기술 정보</span>
                <hr/>
            </Devider>
            <InfoWrapper className="col-container wrapper">

                <Wrapper className="row-container">
                    <span id="label">개인 사이트</span>
                    <input type="url" name="site" value={registerInfo.site} placeholder="ex. 블로그, 노션 주소" onChange={onChangeInfo}/>
                </Wrapper>

                <Wrapper className="row-container">
                    <span id="label">Github</span>
                    <input type="url" name="gitHub" value={registerInfo.git} placeholder="" onChange={onChangeInfo}/>
                    <GreenBtn>기술 스택 분석</GreenBtn>
                </Wrapper>

                <Wrapper className="col-container">
                    <span id="label">기술 스택</span>
                    <SkillForm/>
                </Wrapper>

                <Wrapper className="col-container">
                    <span id="label">관심 분야</span>
                    <InterestForm />
                </Wrapper>
            </InfoWrapper>
        </>
    )
}
export default SkillInfo;
const Wrapper=styled.div``