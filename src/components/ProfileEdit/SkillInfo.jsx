import React from 'react';
import styled from 'styled-components';
import GreenBtn from '../common/Button';
import InterestForm from '../common/InterestForm';
import SkillForm from '../common/SkillForm';
import TopDiv from '../common/TopDIv';

const SkillInfo = () => {
    return (
        <>
         <Wrapper className="col-container">
                <TopDiv pageLabel={"기술 정보"} isGreen={true}/>
                <Container className="col-container">
                    <FieldWrapper className="row-container">
                        <span id="label">개인 사이트</span>
                        <input type="url" name="site" value={""} placeholder="ex. 블로그, 노션 주소" />
                    </FieldWrapper>

                    <FieldWrapper className="row-container">
                        <span id="label">Github</span>
                        <input type="url" name="gitHub" value={" "} placeholder=""/>
                        <GreenBtn >기술 스택 분석</GreenBtn>
                    </FieldWrapper>

                    {/* <FieldWrapper className="col-container">
                        <span id="label">기술 스택</span>
                        <SkillForm/>
                    </FieldWrapper> */}

                    {/* <FieldWrapper className="col-container">
                        <span id="label">관심 분야</span>
                        <InterestForm interst={["java"]}/>
                    </FieldWrapper> */}
                </Container>
            </Wrapper>   
        </>
    );
};

export default SkillInfo;

const InfoWrapper=styled.div`
  align-items: center;
  gap: 30px;
  &>div{
    width: 65%;
  }
  button{
    margin-left: 5px;
    font-size: small;
    padding: 5px 15px;
  }
  &>.col-container #label{
    margin-bottom: 30px;
  }
`

const Wrapper = styled.div`
    width:70%;
    gap:100px;
    align-items: center;
    &>div{
        font-size:medium;
    }
`
const Container = styled.div`
    gap:30px;
`

const FieldWrapper = styled.div`
    button{
    margin-left: 5px;
    font-size: small;
    padding: 5px 15px;
  }
`