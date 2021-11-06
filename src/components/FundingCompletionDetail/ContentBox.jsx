import styled from "styled-components";
import ProfileBox from "../common/ProfileBox"

const ContentBox = ({ user, content, isGreen }) => {
    return (
        <Wrapper isGreen={isGreen}>
            <div className="row-container">
                <h4>기획 내용</h4>
                <ProfileBox nickName={user.nickName} />
            </div>
            <Content>{content.split("\n").map(line => <>{line}<br /></>)}</Content>
        </Wrapper>
    )
}
export default ContentBox;
const Wrapper=styled.div`
border-radius: 10px;
.row-container:nth-child(1){
    border-bottom: solid thin #37C56E;
    padding: 0 20px;
    margin-top: 0;
${props=>props.isGreen&&`
    background-color: #37C56E;
    border-radius: 8px 8px 0 0;
    color:white;
`}
}
h4{
    flex: 1;
}
`
const Content=styled.div`
    padding: 20px;
    min-height: 300px;
`