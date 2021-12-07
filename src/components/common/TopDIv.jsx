import styled from "styled-components";

const TopDiv = ({ pageLabel, subLabel, isGreen , children}) => {
    return (
        <Div isGreen={isGreen}>
            <div className="row-container wrapper">
                <div className="col-container">
                    <span>{pageLabel}</span>
                    <span className="sub-label">{subLabel}</span>
                </div>
                {children}
            </div>
            <GreenHr />
        </Div>
    )
}
export default TopDiv;
const Div = styled.div`   
font-size: xx-large;
font-weight: bold;
width: 80%;
margin-top: 50px;
${props=>props.isGreen&&`color:#37C56E`};
.sub-label{     
font-size: small;
margin-top: 10px;
color: black;
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