import styled from "styled-components";
import Gage from "./Gage";

const FundingGage = ({ gage, fundingCnt }) => {

    return (
        <Container className="col-container">
            <div className="row-container">
                <span>펀딩</span>
                <span className="funding-cnt">{fundingCnt}</span>
            </div>
            <div className="row-container gage-wrapper">
                <Gage gage="80" />
                <span>{gage}%</span>
            </div>
        </Container>
    )
}
export default FundingGage;
const Container = styled.div`
gap: 10px;
&>div{
gap: 10px;
}
.gage-wrapper, .funding-cnt{
color: #37C56E; 
}
`