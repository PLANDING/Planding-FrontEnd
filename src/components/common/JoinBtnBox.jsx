import axios from "axios";
import { useState } from 'react';
import { useEffect } from 'react';
import { useSelector } from "react-redux";
import { useHistory } from 'react-router-dom';
import styled from "styled-components";
import GreenBtn from "./Button";

const JoinBtnBox = ({ dDay, content, width, project }) => {
    const { userObj } = useSelector(state => ({ userObj: state.user.userObj })); //계정 user 정보
    const [isProject, setIsProject] = useState(false);
    const history = useHistory();
    const alertObj = {
        from: userObj?.id,
        to: project.user,
        projectId: project.id,
    };
    /* 참여하기 요청 */
    const onClickJoin = (type) => {
        if(isProject){
            alert("참여중인 프로젝트가 있습니다.");
            history.push("/completion");
        }else{
            if (window.confirm('해당 프로젝트에 참여요청 하시겠습니까?\n(작성자가 수락 시, 프로젝트에 참여가능 합니다.)')) {
                axios.post('/alert/request',
                    { ...alertObj, content: `님이 당신의 프로젝트의 ${type == 'plan' ? '기획자' : '개발자'}로 참여를 요청했습니다.` })
                    .then(res => res.status == 200 && alert('참여요청이 완료되었습니다.'));
            }
        }
    }

    useEffect(() => {
        axios.get(`/myProject/${userObj.id}`).then(res => {
            res.status === 204? setIsProject(false) : setIsProject(true);   
        });
    }, []);

    return (
        <BtnBox width={width} className="col-container">
            <div className="col-container">
                <span>{content}<Dday>D-{dDay}</Dday></span>
                <GreenBtn onClick={() => onClickJoin('plan')}>기획 참여하기</GreenBtn>
                <GreenBtn onClick={() => onClickJoin('dev')}>개발 참여하기</GreenBtn>
            </div>
        </BtnBox>
    );
}
export const BtnBox = styled.div`
    z-index: 99;
    align-items: flex-end;
    flex: 1;
    align-self: flex-end;
    &>.col-container{
        gap: 10px;
        width: ${porps => porps.width};
    }
    span{
        text-align: center;
        font-weight: bold;
        color: #5F5F5F;
    }
`
const Dday = styled.span`
    color: #37C56E;
    margin-left: 5px;
`
export default JoinBtnBox;