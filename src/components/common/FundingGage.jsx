import { faDollarSign } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import Gage from "./Gage";

const FundingGage = ({ gage, fundingCnt, width }) => {

    return (
        <Container className="col-container">
            <div className="row-container">
                <span>펀딩 <FontAwesomeIcon icon={faDollarSign}/></span>
                
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
        margin-left: 5px;
    }
    max-width:350px;
    
`