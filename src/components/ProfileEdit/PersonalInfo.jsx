import React, { useState } from 'react';
import TopDiv from '../common/TopDIv'
import styled from 'styled-components';
import profile from '../../assets/imgs/user.png'
import { GreenBorderBtn } from '../common/Button';
import ProfileBox from '../common/ProfileBox';
import { GreenBorderLabel } from '../common/Label';
import axios from 'axios';
import { useSelector } from 'react-redux';

const PersonalInfo = ({ profileObj, setProfileObj,onChangeInfo, checkNick, setCheckNick}) => {
    const { userObj } = useSelector(state => ({ userObj: state.user.userObj }));
    const [imgFile, setImgFile] = useState({
        fileURL: userObj.ProfileImg.url,
    }); 
    const handlerChange = (e) => {
        e.preventDefault();
        const file = e.target.files[0];
        setProfileObj(p=>({...p, profileImg:e.target.files[0]}));
        let reader = new FileReader();
        reader.readAsDataURL(file);

        reader.onloadend = () => {
            const fileURL = reader.result;
            setImgFile({ ...imgFile, file, fileURL })
        }


    }
    const onClickCheck = () => {
        if(userObj.nickName===profileObj.nickName)return;
        let valNick = /^[가-힣a-z0-9]{2,20}$/g;
        !valNick.test(profileObj.nickName) ?
            setCheckNick("2-20자 영소문자/한글/숫자 [공백 및 특수문자 불가]")
            :
            axios.get(`/auth/check/nickName/${profileObj.nickName}`)
                .then(res => setCheckNick(res.data.isExisted ? "이미 사용중입니다." : "사용 가능" ));
    }
    return (
        <>
            <Wrapper className="col-container">
                <TopDiv pageLabel={"개인 정보"} isGreen={true} />
                <Container className="row-container">
                    <Photo className="col-container">
                        <ProfileBox profileUrl={imgFile.fileURL ? imgFile.fileURL : profile} size={"150px"} borderNone/>
                        <label htmlFor="inputImg"><GreenBorderLabel>이미지 선택</GreenBorderLabel></label>
                        <input type="file" id="inputImg" onChange={handlerChange} />

                    </Photo>
                    <NickName className="col-container" checking={checkNick=="사용 가능"}>
                        <span id="label">닉네임</span>
                        <div className="row-container" style={{ gap: "10px" }}>
                            <input type="text" name="nickName" value={profileObj.nickName} onChange={onChangeInfo} placeholder="" />
                            <GreenBorderBtn type="button" onClick={onClickCheck}>중복확인</GreenBorderBtn>
                        </div>
                        {(checkNick != "" && checkNick != "사용 가능") && <Notice>{checkNick}</Notice>}
                    </NickName>

                </Container>
            </Wrapper>

        </>
    );
};

export default PersonalInfo;

const Wrapper = styled.div`
    justify-content: center;
    align-items: center;
    width:70%;
    gap:50px;
    &>div{
        font-size:medium;
        font-weight: normal;
    }
`
const Container = styled.div`
    gap:50px;
`

const Photo = styled.div`
    flex-grow :1;
    gap:20px;
    width:150px;
    align-items: center;
    input{
        display:none;
    }
    label{
        width: 100%;
    }
    label>div{
        text-align: center;
        cursor: pointer;
    }  
`

const NickName = styled.div`
    flex-grow : 1;
    gap:20px;
    &>span{
        font-size: medium;
    }
    input[name=nickName]{
        ${props => props.checking&&`border: solid 2px #37C56E;`}
    }
`
const Notice = styled.div`
    font-size: x-small;
    color:#F55959;
`