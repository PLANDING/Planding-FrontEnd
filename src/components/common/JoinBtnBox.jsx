import styled from "styled-components";
import GreenBtn from "./Button";

const JoinBtnBox=({dDay, content})=>{
    return(
        <BtnBox className="col-container">
            <div className="col-container">
                <span id="d-day">{content} D-{dDay}</span>
                <GreenBtn>기획 참여하기</GreenBtn>
                <GreenBtn>개발 참여하기</GreenBtn>
            </div>
        </BtnBox>
    );
}
export const BtnBox=styled.div`
align-items: flex-end;
flex: 1;
align-self: flex-end;
&>.col-container{
gap: 10px;
}
#d-day{
font-size: large;
font-weight: bold;
color: #37C56E;
text-align: center;
}
`
export default JoinBtnBox;