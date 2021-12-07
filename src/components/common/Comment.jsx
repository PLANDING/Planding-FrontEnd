import axios from "axios";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { setProjectInfo } from "../../modules/project";
import DateBox from "./DateBox";
import ProfileBox from "./ProfileBox";
const Comment = ({ projectId, commentObj, isUser }) => {
    const dispatch = useDispatch();
    const onClickDel = () => {
        if (window.confirm('댓글을 삭제하시겠습니까?')) {
            axios.delete(`/comment/${commentObj.id}`)
                .then(res => {
                    res.status == 200 &&
                        axios.get(`/project/progress/detail/${projectId}`)
                            .then(res => {
                                dispatch(setProjectInfo(res.data.project));
                            });
                });
        }
    }
    return (
        <Wrapper className="col-container">
            <div className="row-container">
                <ProfileBox profileUrl={commentObj.User.ProfileImg?.url} nickName={commentObj.User.nickName} />
                <Side className="row-container">
                    <DateBox dateString={commentObj.createdAt} />
                    {isUser && <Button onClick={onClickDel}>삭제</Button>}
                </Side>
            </div>
            <Content className="content">{commentObj.content.split("\n").map(line => <>{line}<br /></>)}</Content>
        </Wrapper>);

}
export default Comment;
const Wrapper = styled.div`
    padding: 20px;
    border-top: solid thin #e4e4e4;
`
const Side = styled.div`
    flex: 1;
    justify-content: flex-end;
    gap: 10px;
    font-size: x-small;
    color: #bdbdbd;
    align-self: flex-start;
`
const Content = styled.div`
    font-size: small;
    margin-top: 10px;
`
const Button = styled.button`
    &:hover{
        color:#F55959
    }
    
`