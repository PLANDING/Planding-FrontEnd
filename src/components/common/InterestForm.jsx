import { useState } from "react";
import styled from "styled-components";
import { GreenBorderBtn } from "./Button";
import { GrayLabel } from "./Label";
import Select from "./Select";

const InterestForm = ({interestArr, setinterestArr}) => {
    const [first, setFirst]=useState("");
    const [second, setSecond]=useState("");
    const onClickAdd=()=>{
        second&&setinterestArr(prev=>([...prev, second]));
    }
    const onClickDel=(e)=>{
        const {target:{name}}=e;
        setinterestArr(interestArr.filter((it, idx)=>idx!=parseInt(name)));
    }
    return (<>
        <div className="row-container">
            <Select label={"분야"} optionArr={["기획", "프론트 앤드", "백엔드"]} setValue={setFirst}/>
            <Select label={"소분야"} optionArr={["테스트", "테스트2"]} setValue={setSecond}/>
            <GreenBorderBtn onClick={onClickAdd}>추가</GreenBorderBtn>
        </div>

        <TagWrapper className="row-container">{
            interestArr?.map((interest,idx) => 
            <GrayLabel>{interest}
            <button name={idx} id="del-btn" onClick={onClickDel}>x</button>
            </GrayLabel>)}
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