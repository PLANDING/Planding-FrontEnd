import { useState } from "react";
import styled from "styled-components";
import { GreenBorderBtn } from "./Button";
import { GrayLabel } from "./Label";
import Select from "./Select";

const InterestForm = () => {
    const [skillArr, setSkillArr] = useState(["웹 프론트앤드", "데이터 분석"]);
    return (<>
        <div className="row-container select-wrapper">
            <Select label={"분야"} optionArr={[]}/>
            <Select label={"소분야"} optionArr={[]} />
            <GreenBorderBtn>추가</GreenBorderBtn>
        </div>

        <TagWrapper className="row-container">{
            skillArr.map(skill => <GrayLabel>{skill}<button id="del-btn">x</button></GrayLabel>)}
        </TagWrapper>
    </>)
}
const TagWrapper = styled.div`
margin-top: 30px;
gap: 20px;
#del-btn{
padding: 0;
padding-left: 10px;
}
`
export default InterestForm;