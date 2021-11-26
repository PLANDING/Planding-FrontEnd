import axios from "axios";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import styled from "styled-components";
import userImg from "../../assets/imgs/user.png"
import { setProfileInfo } from "../../modules/profile";

const ProfileBox = ({profileUrl, nickName, size, userId, borderNone}) => {
    const dispatch=useDispatch();
    const history=useHistory();

    /*prifile user 정보 Get */
    const onClickProfile=()=>{
        axios.get(`/user/${userId}`).then(res=>{
            dispatch(setProfileInfo(res.data.user));
            history.push("/profile");
        })
    }
    return (
        <ProfileWrapper className="row-container" onClick={onClickProfile}>
            <ImgWrapper size={size} borderNone={borderNone}>
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
    &:hover{
        border: solid 2px #37C56E;
    }
    ${props=>props.borderNone&&`
    &:hover{
        border: none;
    }
    `}
`