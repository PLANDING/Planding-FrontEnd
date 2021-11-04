import styled from "styled-components";
import { GrayLabel } from "./Label";

const InterestBox = ({interestArr}) => {
    return (
        <Container className="row-container">
            {interestArr.map(interest =>
                <GrayLabel>{interest.name}</GrayLabel>)}
        </Container>
    )
}
const Container=styled.div`
padding: 20px 0;
gap: 10px;
&>div{
    font-weight: normal;
}
`
export default InterestBox;