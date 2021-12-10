import axios from "axios";
import { useState } from "react";
import styled from "styled-components";
import GreenBtn, { GrayBtn } from "./Button";
const FundingBtnBox = ({ dDay, projectId, userId, isFunding, setIsFunding,content, isRow }) => {
    const onClickFunding = () => {
        isFunding ?
            axios.delete(`/funding/${projectId}/${userId}`)
                .then(res => res.status == 200 && setIsFunding(p => !p))
            :
            axios.get(`/funding/${projectId}/${userId}`)
                .then(res => res.status == 200 && setIsFunding(p => !p))
    }
    return (
        <BtnBox className="col-container">
            <Wrapper isRow={isRow}>
                <span>{content}<Dday>D-{dDay}</Dday></span>
                {isFunding ? <GrayBtn onClick={onClickFunding}>펀딩 취소</GrayBtn> : <GreenBtn onClick={onClickFunding}>펀딩 하기</GreenBtn>}
            </Wrapper>
        </BtnBox>
    )

}
export default FundingBtnBox;
const Wrapper = styled.div`   
    gap: 10px;
    align-items: center;
    button{
        padding: 10px 20px;
        font-size: medium;
    }
    display: flex;
    flex-direction: column;
    ${props => props.isRow && `
    flex-direction: row;
    button{
        padding: 5px 20px;
    }
    gap:15px;
    margin-bottom: 20px;
    &>span{
        font-weight: bold;
        color: #5F5F5F;
    }`}
`
export const BtnBox = styled.div`
    z-index: 99;
    align-items: flex-end;
    flex: 1;
    align-self: flex-end;
    span{
        text-align: center;
        font-weight: bold;
    }
`
const Dday = styled.span`
    color: #37C56E;
    margin-left: 5px;
`
