import styled from "styled-components";

const ProfileBox = ({profileUrl, nickName, size}) => {
    return (
        <ProfileWrapper className="row-container" size={size}>
            <div className="profile-img">
                <img src={process.env.PUBLIC_URL + "/" + profileUrl} width="100%" />
            </div>
            <span>{nickName}</span>
        </ProfileWrapper>
    )
}
export default ProfileBox;

const ProfileWrapper=styled.div`
font-size: small;
gap: 10px;
.profile-img{
overflow: hidden;
${props=>props.size?
`width:${props.size};
height:${props.size};`
:
`width: 40px;
height: 40px;`
}
border-radius: 30px;
}
` 