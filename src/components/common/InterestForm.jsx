import { useState } from "react";
import styled from "styled-components";
import { GreenBorderBtn } from "./Button";
import Select from "./Select";

const InterestForm = ({ interestArr, setInterestArr }) => {
    const interestObj = {
        "기획": ["UI/UX 기획", "게임 기획", "프로젝트 매니저", "제품 기획"],
        "프론트엔드": ["iOS", "안드로이드", "웹 프론트엔드", "웹 퍼블리셔"],
        "백엔드": ["웹 서버", "블록체인", "AI", "DB/빅데이터", "게임 서버"],
    }

    const [first, setFirst] = useState(""); //분야
    const [second, setSecond] = useState(""); //소분야

    const onClickAdd = () => {
        second && (!interestArr.includes(second) && setInterestArr(prev => ([...prev, `${first}:` + second])));
    }
    const onClickDel = (e) => {
        const { target: { name } } = e;
        setInterestArr(interestArr.filter((it, idx) => idx != parseInt(name)));
    }
    return (<>
        <div className="row-container">
            <Select label={"분야"} optionArr={["기획", "프론트엔드", "백엔드"]} setValue={setFirst} />
            <Select label={"소분야"} optionArr={first ? interestObj[first] : []} setValue={setSecond} />
            <GreenBorderBtn type="button" onClick={onClickAdd}>추가</GreenBorderBtn>
        </div>

        {interestArr.length > 0 && <TagWrapper className="row-container">{
            interestArr.map((interest, idx) =>
                <GreenBorderBtn>{interest.split(":")[1]}
                    <button type="button" name={idx} id="del-btn" onClick={onClickDel}>X</button>
                </GreenBorderBtn>)}
        </TagWrapper>}
    </>)
}
const TagWrapper = styled.div`
    margin-top: 30px;
    gap: 10px;
    #del-btn{
        padding: 0;
        padding-left: 10px;
    }
`
export default InterestForm;

