import styled from "styled-components"
import GreenBtn from "../common/Button"
import ProfileBox from "../common/ProfileBox"
import Comment from "../common/Comment"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import axios from "axios"
import { setProjectInfo } from "../../modules/project"
const CommentForm = ({ commentArr, projectId }) => {
    const dispatch = useDispatch();
    const { userObj } = useSelector(state => ({ userObj: state.user.userObj }));
    const [comment, setComment] = useState("")
    const onChange = (e) => {
        setComment(e.target.value);
    }
    const onSubmit = (e) => {
        e.preventDefault();
        try {
            axios.post('/comment', { projectId: projectId, userId: userObj.id, comment: comment })
                .then(res => {
                    res.status == 200&&
                        axios.get(`/project/progress/detail/${projectId}`)
                            .then(res => {
                                dispatch(setProjectInfo(res.data.project));
                            });
                });
            setComment("");
        } catch (err) { }
    }
    return (
        <Container>
            <div id="label">댓글</div>
            <From className="row-container" onSubmit={onSubmit}>
                <ProfileBox profileUrl={userObj.ProfileImg.url} borderNone />
                <textarea type="text" placeholder="댓글을 입력해주세요. (최대 300자)" value={comment} onChange={onChange} maxLength={300} />
                <GreenBtn>작성</GreenBtn>
            </From>
            <div>{commentArr.map(comment => <Comment projectId={projectId} commentObj={comment} isUser={true} />)}</div>
        </Container>)
}
export default CommentForm;
const Container = styled.div`
#label{
    width: 100%;
    background-color: #37C56E;
    text-align: center;
    color: white;
    font-size: small;
    padding: 5px 0;
}
`
const From = styled.form`
    width: 100%;
    border: none;
    padding: 20px;
    box-sizing: border-box;
    textarea{
        all:unset;
        flex: 1;
        font-size: small;
        padding: 10px 20px;
        overflow: scroll;
        height: 20px;
    }
    button{
        font-size: small;
    }
`