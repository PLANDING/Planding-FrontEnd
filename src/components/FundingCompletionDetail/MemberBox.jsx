import styled from "styled-components"
import GreenBtn, { GrayBorderBtn } from "../common/Button"
import ProfileBox from "../common/ProfileBox"

const MemberBox = ({ user, member_plan, member_dev }) => {
    return (
        <Container>
            <HeadLine>팀원 모집</HeadLine>

            <h5>리더</h5>
            <ProfileBox  nickName={user.nickName} />
            
            <h5>모집 인원</h5>
            <div className="row-container">
                <GrayBorderBtn>기획<span>{member_plan}명</span></GrayBorderBtn>
                <GreenBtn>기획 참여하기</GreenBtn>
            </div>
            <div className="row-container">
                <GrayBorderBtn>개발<span>{member_dev}명</span></GrayBorderBtn>
                <GreenBtn>개발 참여하기</GreenBtn>
            </div>
        </Container>
    )

}
export default MemberBox;
const Container=styled.div`
    border: solid thin #37C56E;
    border-radius: 10px;
    &>:is(h5,div){
        width: 200px;
        margin: 20px;
    }
    .row-container{
        gap: 10px;
    }
    button{
        font-size: small;
        padding: 5px 10px
    }
`
const HeadLine=styled.h4`
    background-color: #37C56E;
    padding: 20px;
    width: 240px;
    border-radius: 9px 9px 0 0;
    color: white;
`