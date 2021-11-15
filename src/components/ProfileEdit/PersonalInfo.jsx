import React, { useState } from 'react';
import TopDiv from '../common/TopDIv'
import styled from 'styled-components';
import profile from '../../assets/imgs/user.png'
import { GreenBorderBtn } from '../common/Button';
import ProfileBox from '../common/ProfileBox';
import { GreenBorderLabel } from '../common/Label';

const PersonalInfo = () => {
    const [imgFile, setImgFile] = useState({
        file:'',
        fileURL:'',
    });

    const handlerChange = (e) =>{
        e.preventDefault();
        const file = e.target.files[0];
        let reader = new FileReader();
        reader.readAsDataURL(file);
        
        reader.onloadend = () =>{ 
            const fileURL = reader.result;
            setImgFile({...imgFile, file, fileURL})
        }

        
    }
    return (
        <>
            <Wrapper className="col-container">
                <TopDiv pageLabel={"개인 정보"} isGreen={true}/>
                <Container className="row-container">
                <Photo className="col-container">
                    <img src={imgFile.fileURL? imgFile.fileURL :  profile} alt="profile"/>
                    <label for="inputImg"><GreenBorderLabel>이미지 선택</GreenBorderLabel></label>
                    <input type="file" id="inputImg" accept="image/*" onChange={handlerChange}/>
                    
                </Photo>
                <NickName className="col-container">
                    <span id="label">닉네임</span>
                    <div className="row-container" style={{gap:"10px"}}>
                    <input type="text" name="nickName" placeholder=""/>
                    <GreenBorderBtn>중복확인</GreenBorderBtn>
                    </div>
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
    gap:100px;
    &>div{
        font-size:medium;
    }
`
const Container = styled.div`
    gap:50px;
`

const Photo = styled.div`
    flex-grow :1;
    gap:20px;
    width:150px;
    img{
        border-radius: 50%;
    }
    input{
        display:none;
    }
    div{
        text-align: center;
        cursor: pointer;
    }
`

const NickName = styled.div`
    flex-grow : 1;
    gap:10px;
    &>span{
        font-size: large;
    }
`
