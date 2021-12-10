import { useHistory } from "react-router";
import styled from "styled-components";
import GreenBtn, { GrayBtn } from "./Button";
import InterestForm from "./InterestForm";
import Select from "./Select";
import MemberForm from "../FundingCreation/MemberForm";

const FundingForm = ({ interestArr, setInterestArr, fundingObj, setFundingObj, category, setCategory,onSubmit }) => {
    const history = useHistory();
    const onChangeFunding = (e) => {
        const { target: { name, value } } = e;
        setFundingObj(prev => ({ ...prev, [name]: value }));
    }
    const onClickBack = () => {
        if (window.confirm("내용이 저장되지 않습니다. 정말 작성을 취소하시겠습니까?")) {
            history.goBack();
        }
    }
    const categoryArr = ["공유서비스", "여행", "소셜네트워크", "뷰티/패션", "이커머스", "엔터테인먼트/게임", "헬스/스포츠", "뉴스/정보", "금융", "부동산/인테리어", "교육", "라이프"];
    return (
        <Form onSubmit={onSubmit} >
            <input type="text" value={fundingObj.idea} placeholder="프로젝트명" name="idea" onChange={onChangeFunding} />

            <Wrapper>
                <Label>프로젝트 주제 <span>*헤드라인</span></Label>
                <input type="text" value={fundingObj.headline} placeholder="예) 이미지 인식을 활용한 앱 서비스" name="headline" onChange={onChangeFunding} />
            </Wrapper>

            <Wrapper>
                <Label>주제 카테고리</Label>
                <Select label={category?category:"카테고리"} optionArr={categoryArr} setValue={setCategory}/>
            </Wrapper>

            <Wrapper>
                <Label>기획 내용</Label>
                <TextArea name="content" value={fundingObj.content} onChange={onChangeFunding} />
            </Wrapper>

            <Wrapper>
                <Label>기술 카테고리</Label>
                <InterestForm interestArr={interestArr} setInterestArr={setInterestArr} />
            </Wrapper>

            <Wrapper>
                <Label>모집 인원</Label>
                <div className="row-container member-wrapper">
                    <MemberForm fundingObj={fundingObj} setFundingObj={setFundingObj} type="member_plan" />
                    <MemberForm fundingObj={fundingObj} setFundingObj={setFundingObj} type="member_dev" />
                </div>
            </Wrapper>
            <BtnGroup>
                <GrayBtn onClick={onClickBack}>취소</GrayBtn>
                <GreenBtn>확인</GreenBtn>
            </BtnGroup>
        </Form>);
}
const Form = styled.form`
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
const TextArea = styled.textarea`
all: unset;
border: solid thin #37C56E;
min-height: 300px;
border-radius: 10px;
padding: 20px;
`

const Wrapper = styled.div`
display:flex;
flex-direction:column;
justify-content: center;
`
const Label = styled.span`
    font-size: x-large;
    font-weight: bold;
    margin-bottom: 30px;
    span{
        font-size: small;
        font-weight: normal;
    }

`
const BtnGroup = styled.div`
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
export default FundingForm;