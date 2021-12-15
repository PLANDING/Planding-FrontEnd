import axios from 'axios';
import React from 'react';
import styled from 'styled-components';
import GreenBtn from '../common/Button';
import InterestForm from '../common/InterestForm';
import SkillForm from '../common/SkillForm';
import TopDiv from '../common/TopDIv';
import { FieldWrapper } from '../Register/SkillInfo';

const SkillInfo = ({ profileObj, onChangeInfo, interestArr, setInterestArr, skillArr, setSkillArr }) => {
    const langArr = [];
    const handleClick = async () => {
        const id = profileObj.github.split('/')[3];
        try {
            const { data } = await axios.get(`https://api.github.com/users/${id}/repos`)
            await data.map(async (data) => {
                await getLanguage(data.languages_url);
                setSkillArr([...langArr]);
            });
        } catch (error) {
            alert(error.message);
        }
    }
    const getLanguage = async (repoName) => {
        try {
            const { data } = await axios.get(repoName);
            Object.keys(data).forEach(it => {
                if (langArr.indexOf(it) == -1) {
                    langArr.push(it);
                }
            });
        } catch (error) {
            alert(error.message);
        }
    }
    return (
        <>
            <Wrapper className="col-container">
                <TopDiv pageLabel={"기술 정보"} isGreen={true} />
                <Container className="col-container">
                    <FieldWrapper className="row-container">
                        <span id="label">개인 사이트</span>
                        <input type="url" name="site" placeholder="ex. 블로그, 노션 주소" value={profileObj.site} onChange={onChangeInfo} />
                    </FieldWrapper>

                    <FieldWrapper className="row-container">
                        <span id="label">Github</span>
                        <input type="url" name="github" placeholder="Github 주소" value={profileObj.github} onChange={onChangeInfo} />
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
                </Container>
            </Wrapper>
        </>
    );
};

export default SkillInfo;

const Wrapper = styled.div`
    width:70%;
    gap:50px;
    align-items: center;
    &>div{
        font-size:medium;
        font-weight: normal;
    }
`
const Container = styled.div`
    gap:30px;
    width: 45%;
    &>.col-container #label{
    margin-bottom: 30px;
  }
    
`

