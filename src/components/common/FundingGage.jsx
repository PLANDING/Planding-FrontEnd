import styled from "styled-components";
import Gage from "./Gage";

const FundingGage = ({ gage, fundingCnt, width }) => {

    return (
        <Container className="col-container">
            <div className="row-container">
                <span>펀딩</span>
                <span className="funding-cnt">{fundingCnt}</span>
            </div>
            
            <Gage gage={gage} width={width}/>
        </Container>
    )
}
export default FundingGage;
const Container = styled.div`
gap: 10px;
.funding-cnt{
color: #37C56E; 
}
`