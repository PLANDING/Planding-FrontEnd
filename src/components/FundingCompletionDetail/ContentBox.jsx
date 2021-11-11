import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useState } from "react/cjs/react.development";
import styled from "styled-components";
import Modal from "../common/Modal";
import ProfileBox from "../common/ProfileBox"

const ContentBox = ({ user, content, isGreen }) => {
    const [isOpenMenu, setIsOpenMenu]=useState(false);
    const onClickMenu=()=>{
        setIsOpenMenu(prev=>!prev);
    }
    return (
        <Wrapper isGreen={isGreen}>
            <div className="row-container">
                <h4>기획 내용</h4>
                <ProfileBox nickName={user.nickName} />
                <FontAwesomeIcon id="menu" onClick={onClickMenu} icon={faEllipsisV}/>
                {isOpenMenu&&<Modal setIsOpen={setIsOpenMenu}>
                    <Menu className="col-container">
                        <span id="edit">수정</span>
                        <span id="del">삭제</span>
                    </Menu>
                    </Modal>}
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
    #menu{
        margin-left: 20px;
        cursor: pointer;
        color:${props=>props.isGreen?`#FFFFF`:`#37C56E`};
    }
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
const Menu=styled.div`
width: 100px;
text-align: center;
position: absolute;
background: white;
font-size: small;
padding: 0px 20px;
transform: translate(-80%, 30%);
border-radius: 5px;
color: #5F5F5F;
border: solid thin #37C56E;
span{
    padding: 10px;
    cursor: pointer;
}
#del:hover{
    color: #F55959;
}
#edit{
    border-bottom: solid thin #37C56E;
}
#edit:hover{
    color: #37C56E;
}

box-shadow: 2px 2px 10px 2px #00000020;
`