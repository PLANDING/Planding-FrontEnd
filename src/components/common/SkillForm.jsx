import { useState } from "react";
import styled from "styled-components";
import { GreenBorderBtn } from "./Button";
import GreenLabel from "./Label";
import Select from "./Select";

const SkillForm = () => {
    const TagWrapper = styled.div`
    margin-top: 30px;
    gap: 20px;
    #del-btn{
    padding: 0;
    padding-left: 10px;
    }
    `
    const [skillArr, setSkillArr] = useState(["javaScript", "React"]);
    return (<>
        <div className="row-container select-wrapper">
            <Select label={"분야"} optionArr={[]}/>
            <Select label={"언어|프레임워크|라이브러리"} optionArr={[]} />
            <GreenBorderBtn>추가</GreenBorderBtn>
        </div>

        <TagWrapper className="row-container">{
            skillArr.map(skill => <GreenLabel>{skill}<button id="del-btn">x</button></GreenLabel>)}
        </TagWrapper>
    </>)
}
export default SkillForm;