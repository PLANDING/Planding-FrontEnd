import React,{useEffect, useState} from 'react';
import styled from "styled-components";
import { Devider, InfoWrapper } from "../../pages/Register";
import GreenBtn from "../common/Button";
import InterestForm from "../common/InterestForm";
import SkillForm from "../common/SkillForm";
import axios from "axios";

const SkillInfo = ({ registerInfo, onChangeInfo, interestArr, setInterestArr, skillArr, setSkillArr }) => {
    const [repoName, setRepoName] = useState('');
    const langArr=[];
    const handleClick = async () => {
        const id = registerInfo.github.split('/')[3];
        try{
            const { data } = await axios.get(`https://api.github.com/users/${id}/repos`)
            await data.map(async(data) =>{
                await getLanguage(data.languages_url);
                setSkillArr([...langArr]);
            });
        } catch(error){
            alert(error.message);
        }
    }
    const getLanguage = async (repoName) => {
        try{
            const { data } = await axios.get(repoName);
            Object.keys(data).forEach(it=>{
                if(langArr.indexOf(it)==-1){
                    langArr.push(it);
                }
            });
        } catch(error){
            alert(error.message);
        }
    }
    return (
        <>
            <Devider>
                <span>기술 정보</span>
                <hr />
            </Devider>
            <InfoWrapper className="col-container">

                <FieldWrapper className="row-container">
                    <span id="label">개인 사이트</span>
                    <input type="url" name="site" value={registerInfo.site} placeholder="ex. 블로그, 노션 주소" onChange={onChangeInfo} />
                </FieldWrapper>

                <FieldWrapper className="row-container">
                    <span id="label">Github</span>
                    <input type="url" name="github" value={registerInfo.github} placeholder="" onChange={onChangeInfo} />
                    <GreenBtn type="button" onClick={handleClick}>기술 스택 분석</GreenBtn>
                </FieldWrapper>

                <FieldWrapper skill>
                    <span id="label">기술 스택</span>
                    <SkillForm skillArr={skillArr} setSkillArr={setSkillArr} />
                </FieldWrapper>

                <FieldWrapper className="col-container">
                    <span id="label">관심 분야</span>
                    <InterestForm interestArr={interestArr} setInterestArr={setInterestArr} />
                </FieldWrapper>
            </InfoWrapper>
        </>
    )
}
export default SkillInfo;

export const FieldWrapper = styled.div`
    &>button{
        margin-left: 5px;
        font-size: small;
        padding: 5px 15px;
    }
    ${props => props.skill && `
    display:flex;
    flex-direction:row;
    &>div{
        flex:1;
    }
    `}
`