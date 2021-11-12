import styled from "styled-components"
import InterestBox from "../common/InterestBox"

const CategoryBox = ({ category, interestArr }) => {
    return (
        <Container>
            <h4>주제 카테고리</h4>
            <Wrapper className="row-container">
                <span>카테고리</span><span>{">"}</span>
                <span>{category}</span>
            </Wrapper>
            <h4>기술 카테고리</h4>
            <InterestBox interestArr={interestArr} />
        </Container>
    )
} 
export default CategoryBox;
const Container=styled.div`
    h4{
        margin: 0;
    }
    border: solid thin #37C56E;
    padding: 20px;
    border-radius: 10px;
    width: 240px;
`
const Wrapper=styled.div`
    padding:20px 0;
    font-weight: bold;
    gap: 10px;
    font-size: small;
    &>span:nth-child(3){
        font-weight: normal;
    }
`