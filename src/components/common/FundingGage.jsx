import styled from "styled-components";
import Gage from "./Gage";

const FundingGage = ({ gage, fundingCnt, width }) => {

    return (
        <Container className="col-container">
            <div className="row-container">
                <span>펀딩</span>
                <span className="funding-cnt">{fundingCnt}</span>
            </div>
            <div className="row-container gage-wrapper">
                <Gage gage={gage} width={width}/>
                <span>{gage}%</span>
            </div>
        </Container>
    )
}
export default FundingGage;
const Container = styled.div`
font-weight: bold;
font-size: small;
gap: 10px;
&>div{
gap: 10px;
}
.gage-wrapper, .funding-cnt{
color: #37C56E; 
}
`