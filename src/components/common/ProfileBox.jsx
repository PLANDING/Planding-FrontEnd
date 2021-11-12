import { useHistory } from "react-router";
import styled from "styled-components";
import userImg from "../../assets/imgs/user.png"

const ProfileBox = ({profileUrl, nickName, size}) => {
    const history=useHistory();
    const onClickProfile=()=>{
        history.push("/profile");
    }
    return (
        <ProfileWrapper className="row-container" onClick={onClickProfile}>
            <ImgWrapper size={size} >
                <img src={profileUrl?profileUrl:userImg} width="100%" />
            </ImgWrapper>
            <span>{nickName}</span>
        </ProfileWrapper>
    )
}
export default ProfileBox;

const ProfileWrapper=styled.div`
    font-size: small;
    gap: 10px;
    cursor: pointer;
` 
const ImgWrapper=styled.div`
    overflow: hidden;
    ${props=>props.size?
    `width:${props.size};
    height:${props.size};`
    :
    `width: 40px;
    height: 40px;`
    }
    border-radius: 30px;
`