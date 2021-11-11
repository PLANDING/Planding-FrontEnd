import styled from "styled-components";
import ProfileBox from "../common/ProfileBox";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import GreenLabel, { GreenBorderLabel } from "../common/Label";
import GreenBtn from "../common/Button";
import LevelImgs from "../../assets/objects/LevelImgs";
const MatchingCard = ({ profile }) => {
    return (<Container className="row-container">
        <GreenBtn>협업요청</GreenBtn>
        <hr />
        <Card className="row-container">
            <Profile className="col-container">
                <ProfileBox size={"120px"} />
                <div className="row-container">
                    <img src={require("../../assets/imgs/" + LevelImgs[0].fill).default} width="24px" />
                    {profile.nickName}
                </div>
            </Profile>
            <Content className="col-container">
                <div className="row-container">
                    <span><FontAwesomeIcon icon={faGithub} /> Github</span>
                    <a href={profile.git}>{profile.git}</a>
                </div>
                <div className="row-container">
                    <span>Dev Blog</span>
                    <a href={profile.site}>{profile.site}</a>
                </div>
                <LabelWrapper className="col-container">
                    <span>관심분야</span>
                    <div>
                        {profile.Interests.map(interest => <GreenBorderLabel>{interest.name}</GreenBorderLabel>)}
                    </div>
                </LabelWrapper>
                <LabelWrapper className="col-container">
                    <span>기술 스택</span>
                    <div>
                        {profile.Skills.map(skill => <GreenLabel>{skill.name}</GreenLabel>)}
                    </div>
                </LabelWrapper>
            </Content>
        </Card>
    </Container>

    )

}
export default MatchingCard;
const Container = styled.div`
&>:is(button, hr){
    align-self: flex-start;
    margin: 0;
}
&>hr{
    border: none;
    border-bottom: solid thin #37C56E;
    width: 100px;
    margin-top: 20px;
}
`
const Card = styled.div`
border: solid thin #37C56E;
width: 900px;
padding: 30px;
border-radius: 15px;
gap: 20px;
`
const Profile = styled.div`
flex: 0.2;
align-items: center;
gap:20px;
&>div:nth-child(1){
    gap: 0;
}
&>div:nth-child(2){
    gap: 5px;
}
`
const Content = styled.div`
gap: 10px;
flex: 0.8;
a{
    color: #bfbfbf;
}
&>div>span:nth-child(1){
    width: 100px;
}
`
const LabelWrapper = styled.div`
gap: 10px;
&>div>div{
    display: inline-block;
    margin-right: 5px;
}   
`