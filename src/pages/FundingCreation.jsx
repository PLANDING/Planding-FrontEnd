import { useState } from "react";
import { useHistory } from "react-router";
import styled from "styled-components";
import GreenBtn, { GrayBtn } from "../components/common/Button";
import InterestForm from "../components/common/InterestForm";
import Select from "../components/common/Select";
import MemberForm from "../components/FundingCreation/MemberForm";
import Header from "../components/common/Header";
import TopDiv from "../components/common/TopDIv";
const FundingCreation = () => {
    const history=useHistory();
    /*dummy data */
    const [fundingObj, setFundingObj] = useState({
        idea: "",
        headline: "",
        category:"",
        content: "",
        member_plan: 0,
        member_dev: 0,
    });
    const [skillArr, setSkillArr] = useState(["웹 프론트앤드", "데이터 분석"]);
    
    const onChangeFunding = (e) => {
        const { target: { name, value } } = e;
        setFundingObj(prev => ({ ...prev, [name]: value }));
    }
    const onSubmit = (e) => {
        e.preventDefault();
    }
    const onClickBack=()=>{
        if(window.confirm("내용이 저장되지 않습니다. 정말 작성을 취소하시겠습니까?")){
            history.push("/progress");
        }
    }
    return (<>
        <Header />
        <div className="creation main-container">
            <TopDiv pageLabel="펀딩 생성"/>
            <CreationForm onSubmit={onSubmit} >
                <input type="text" value={fundingObj.idea} placeholder="프로젝트명" name="idea" onChange={onChangeFunding} />

                <Wrapper>
                    <span className="label">프로젝트 주제 <span>*헤드라인</span></span>
                    <input type="text" value={fundingObj.headline} placeholder="예) 이미지 인식을 활용한 앱 서비스" name="headline" onChange={onChangeFunding} />
                </Wrapper>

                <Wrapper>
                    <span className="label">주제 카테고리</span>
                    <Select label="카테고리" optionArr={[]}/>
                </Wrapper>

                <Wrapper>
                    <span className="label">기획 내용</span>
                    <TextArea name="content" value={fundingObj.content} onChange={onChangeFunding} />
                </Wrapper>

                <Wrapper>
                    <span className="label">기술 카테고리</span>
                    <InterestForm/>
                </Wrapper>

                <Wrapper>
                    <span className="label">모집 인원</span>
                    <div className="row-container member-wrapper">
                        <MemberForm fundingObj={fundingObj} setFundingObj={setFundingObj} type="member_plan"/>

                        <MemberForm fundingObj={fundingObj} setFundingObj={setFundingObj} type="member_dev"/>
                    </div>
                </Wrapper>
                <BtnGroup>
                    <GrayBtn onClick={onClickBack}>취소</GrayBtn>
                    <GreenBtn>생성</GreenBtn>
                </BtnGroup>
            </CreationForm>
        </div>
    </>);
}
const CreationForm=styled.form`
width: 70%;
margin-top: 30px;
&> div{
    margin: 50px 0;
}
input[name=idea]{
    all: unset;
    font-size: xx-large;
    padding: 10px 20px;
    border-bottom: solid thin #37C56E;
    width: 100%;
    box-sizing: border-box;
}
input[name=headline]{
    padding: 10px 20px;
    border: solid thin #37C56E;
}
.member-wrapper{
    gap: 10px;
}
`
const TextArea=styled.textarea`
all: unset;
border: solid thin #37C56E;
min-height: 300px;
border-radius: 10px;
padding: 20px;
`

const Wrapper=styled.div`
display:flex;
flex-direction:column;
justify-content: center;
.label{
    font-size: x-large;
    font-weight: bold;
    margin-bottom: 30px;
}
.label span{
    font-size: small;
    font-weight: normal;
}
`
const BtnGroup=styled.div`
width: 100%;
display: flex;
flex-direction: row;
gap: 20px;
align-items: center;
justify-content: center;
button{
    font-size: large;
    padding: 10px 50px;
    font-weight: bold;
}
`
export default FundingCreation;