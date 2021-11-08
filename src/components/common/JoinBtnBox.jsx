import styled from "styled-components";
import GreenBtn from "./Button";

const JoinBtnBox=({dDay, content, width})=>{
    return(
        <BtnBox width={width} className="col-container">
            <div className="col-container">
                <span >{content}<span id="d-day">D-{dDay}</span></span>
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
width: ${porps=>porps.width};
}
span{
    text-align: center;
    font-weight: bold;
    color: #5F5F5F;
}
#d-day{
color: #37C56E;
margin-left: 5px;
}
`
export default JoinBtnBox;