import styled from "styled-components"
import GreenBtn from "../common/Button"
import ProfileBox from "../common/ProfileBox"
import Comment from "../common/Comment"
const CommentForm = ({ user, commentArr }) => {
    return (<CmtContianer>
        <div id="label">댓글</div>
        <From className="row-container">
            <ProfileBox />
            <textarea type="text" placeholder="댓글을 입력해주세요" />
            <GreenBtn>작성</GreenBtn>
        </From>
        <div>{commentArr.map(comment => <Comment commentObj={comment} isUser={true} />)}</div>
    </CmtContianer>)
}
export default CommentForm;
const CmtContianer= styled.div`
#label{
    width: 100%;
    background-color: #37C56E;
    text-align: center;
    color: white;
    font-size: small;
    padding: 5px 0;
}
`
const From=styled.form`
    width: 100%;
    border: none;
    padding: 20px;
    box-sizing: border-box;
    textarea{
    all: unset;
    flex: 1;
    font-size: small;
    padding: 10px 20px;
    overflow: hidden;
    height: 20px;
    }
    button{
        font-size: small;
    }
`