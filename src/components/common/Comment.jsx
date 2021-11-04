import styled from "styled-components";
import ProfileBox from "./ProfileBox";
const Comment = ({ commentObj, isUser }) => {
    let date=new Date(commentObj.date);
    const Comment=styled.div`
    padding: 20px;
        border-top: solid thin #e4e4e4;
        .side{
        flex: 1;
        justify-content: flex-end;
        gap: 10px;
        font-size: x-small;
        color: #bdbdbd;
        align-self: flex-start;
    }
    .content{
        font-size: small;
        margin-top: 10px;
    } `
    return (
    <Comment className="col-container">
        <div className="row-container">
            <ProfileBox profileUrl={commentObj.User.profileUrl} nickName={commentObj.User.nickName}/>
            <div className="row-container side">
                <span>{date.getFullYear()+"."+("0"+date.getMonth()).slice(-2)+"."+("0"+date.getDate()).slice(-2)}</span>
                {isUser && <span>삭제</span>}
            </div>
        </div>
        <span className="content">{commentObj.content}</span>
    </Comment>);

}
export default Comment;
