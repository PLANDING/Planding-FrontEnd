import { useState } from "react";
import styled from "styled-components";
import { GreenBorderBtn } from "./Button";
import GreenLabel from "./Label";
import Select from "./Select";

const SkillForm = ({ skillArr, setSkillArr }) => {
    const [first, setFirst] = useState("");
    const [second, setSecond] = useState("");
    const onClickAdd = () => {
        second && setSkillArr(prev => ([...prev, second]));
    }
    const onClickDel = (e) => {
        const { target: { name } } = e;
        setSkillArr(skillArr.filter((it, idx) => idx != parseInt(name)));
        return (<>
            <div className="row-container select-wrapper">
                <Select label={"분야"} optionArr={[]} />
                <Select label={"언어|프레임워크|라이브러리"} optionArr={[]} />
                <GreenBorderBtn onClick={onClickAdd}>추가</GreenBorderBtn>
            </div>

            <TagWrapper className="row-container">{
                skillArr?.map((skill, idx) =>
                    <GreenLabel>{skill}
                        <button name={idx} id="del-btn" onClick={onClickDel}>x</button>
                    </GreenLabel>)}
            </TagWrapper>
        </>)
    }
}
export default SkillForm;
const TagWrapper = styled.div`
    margin-top: 30px;
    gap: 20px;
    #del-btn{
        padding: 0;
        padding-left: 10px;
    }
`

