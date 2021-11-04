import { useHistory } from "react-router";
import styled from "styled-components"
import GreenBtn from "./common/Button";

const TopDiv = ({ pageLabel, subLabel, isProgress }) => {
    const Div = styled.div`   
    font-size: xx-large;
    font-weight: bold;
    width: 80%;
    margin-top: 50px;
    .sub-label{     
    font-size: small;
    margin-top: 10px;
    }
    .wrapper{
    width: 100%;
    align-items: flex-end;
    }
    button{
        font-size: large;
        position: absolute;
        right: 10%;
    }
    `
    const GreenHr = styled.hr`
    border: none;
    border-top: solid thin #37C56E;
    `

    const history = useHistory();
    const onClickCreation = () => {
        history.push("/creation");
    }
    return (
        <Div>
            <div className="row-container wrapper">
                <div className="col-container">
                    <span>{pageLabel}</span>
                    <span className="sub-label">{subLabel}</span>
                </div>
                {isProgress && <GreenBtn onClick={onClickCreation}>펀딩 생성</GreenBtn>}
            </div>
            <GreenHr />
        </Div>
    )
}
export default TopDiv;