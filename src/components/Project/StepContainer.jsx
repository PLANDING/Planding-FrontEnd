import { useState } from "react";
import { useHistory } from "react-router";
import styled from "styled-components";
import arrowImg from "../../assets/imgs/arrow.png"
import arrowUpImg from "../../assets/imgs/arrowUp.png"
import doneImg from "../../assets/imgs/done.png"
import doneFillImg from "../../assets/imgs/doneFill.png"
import GreenBtn from "../common/Button";

const StepContainer = ({ curr }) => {
    const [curriculum, setCurriculum] = useState(curr);
    /*현재 step */
    const [curStep, setCurStep] = useState(
        curriculum <= 4 ? 1 :
            curriculum <= 8 ? 2 :
                curriculum <= 12 ? 3 :
                    curriculum <= 17 ? 4 : 5
    );
    /*드롭다운 메뉴 스탭 */
    const [dropMenu, setDropMenu] = useState(
        curriculum < 4 ? "step1" :
            curriculum < 8 ? "step2" :
                curriculum < 12 ? "step3" :
                    curriculum < 17 ? "step4" : "step5"
    );
    const onClickDrop = (event) => {
        dropMenu == event.target.id ?
            setDropMenu("")
            :
            setDropMenu(event.target.id);
    }
    const onClickDone = (event) => {
        if (parseInt(event.target.id) == curriculum) {
            setCurriculum(prev => --prev);
        }
        if (parseInt(event.target.id) - 1 == curriculum) {
            setCurriculum(prev => ++prev);
        }
    }
    const history=useHistory();
    const currArr = [
        [{ content: "팀 빌딩 확정", curr: 1 }, { content: "협업 툴 및 팀 규칙 정하기", curr: 2 }, { content: "펀딩 된 아이디어 기반으로 아이디어 브레인스토밍", curr: 3 }, { content: "시장 조사 (SWOT)", curr: 4 }],
        [{ content: "아이디어 구체화 / 개발동기", curr: 5 }, { content: "아이디어 구체화 / 개발 목적 및 필요성", curr: 6 }, { content: "아이디어 구체화 / 비즈니스 모델 캔버스 구상하기", curr: 7 }, { content: "파트 정하기 (프론트, 백, 데이터 정하기)", curr: 8 }],
        [{ content: "기능 구체화 / 플로우 차트", curr: 9 }, { content: "기능 구체화 / 시나리오 작성", curr: 10 }, { content: "개발-기획 기능 구현 가능성 회의 및 피드백", curr: 11 }, { content: "기술 스택 정하기", curr: 12 }],
        [{ content: "UI/UX 설계", curr: 13 }, { content: "ERD 작성", curr: 14 }, { content: "API문서 작성", curr: 15 }, { content: "프로젝트 개발 시작", curr: 16 }, { content: "개발-기획 기획 시나리오 피드백", curr: 17 }],
        [{ content: "프로젝트 코드 리팩토링", curr: 18 }, { content: "프로젝트 테스트", curr: 19 }, { content: "프로젝트 배포", curr: 20 }],
    ]
    return (
        <Container className="col-container">
            {currArr.map((curr, idx) =>
                <StepBox dropDown={dropMenu == `step${idx + 1}`}>
                    <div id="label" className="row-container">
                        <span style={{"color":curStep>=(idx+1)?"#37C56E":"#9B9B9B"}}>{idx + 1} step</span>
                        {dropMenu == `step${idx + 1}`
                            ?
                            <img src={arrowUpImg} width="18px" id={"step" + (idx + 1)} onClick={onClickDrop} />
                            : <img src={arrowImg} width="18px" id={"step" + (idx + 1)} onClick={onClickDrop} />}
                    </div>
                    {dropMenu == `step${idx + 1}` && <DropDown>{
                        curr.map(arr => <div className="row-container">
                            <span style={{ "color": curriculum >= arr.curr && "#37C56E" }}>{arr.content}</span>
                            {arr.curr==1&&curriculum==0&&<GreenBtn onClick={()=>{history.push("/project/matching")}}>개발자 매칭 추천</GreenBtn>}
                            <img id={arr.curr} src={curriculum >= arr.curr ? doneFillImg : doneImg} onClick={onClickDone} width="24px" />
                        </div>)
                    }</DropDown>}
                </StepBox>)}
        </Container>
    )
}
export default StepContainer;
const Container = styled.div`
align-items: center;
gap: 20px;
`
const StepBox = styled.div`
width: 80%;
#label{
    border: solid thin #37C56E;
    border-radius: 10px;
    ${props => props.dropDown && `
        border-bottom:none;
        border-radius: 10px 10px 0 0;
    `}
    padding: 20px;
    span{
        flex: 1;
        font-weight: bold;
    }
    img{
        cursor: pointer;
    }
}
`
const DropDown = styled.div`
border: solid thin #37C56E;
border-radius: 0 0 10px 10px;
button{
    margin-right: 20px;
}
&>div{
    border-top: solid thin #37C56E;
    padding: 20px;
    span{
        flex:1
    }
    img{
        cursor: pointer;
    }
}

`