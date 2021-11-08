import styled from "styled-components";
import { GrayLabel } from "./Label";

const InterestBox = ({interestArr}) => {
    return (
        <Container>
            {interestArr.map(interest =>
                <GrayLabel>{interest.name}</GrayLabel>)}
        </Container>
    )
}
const Container=styled.div`
padding: 20px 0;
gap: 10px;
div{
    font-size: small;
    display: inline-block;
    margin: 0 5px 5px 0; 
}
&>div{
    font-weight: normal;
}
`
export default InterestBox;