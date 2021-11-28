import React from "react";
import styled from "styled-components";
/* 날짜 component */
const DateBox=({dateString, side})=>{
    const date=new Date(dateString);
    return(
        <Wrapper side={side}>{date.getFullYear()+"."+("0"+date.getMonth()).slice(-2)+"."+("0"+date.getDate()).slice(-2)}</Wrapper>
    );
}
export default DateBox;
const Wrapper=styled.div`
    ${props=>props.side&&`
    flex: 1;
    text-align: end;
    `}
    color: #bdbdbd;
    font-size: small;
`