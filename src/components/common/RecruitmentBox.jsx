import styled from "styled-components";
import { GrayBorderLabel } from "./Label";

const RecruitmentBox =({member_plan , member_dev})=>{

    return(<Container>
        <span>모집 인원</span>
        <div className="row-container">
            <GrayBorderLabel>기획<span>{member_plan}명</span></GrayBorderLabel>
            <GrayBorderLabel>개발<span>{member_dev}명</span></GrayBorderLabel>
        </div> 
        </Container>)
}
export default RecruitmentBox;
const Container=styled.div`
&>div{
    gap: 5px;
    margin-top: 10px;
}
&>div span{
    font-weight:normal;
    margin-left: 5px;
  }
`