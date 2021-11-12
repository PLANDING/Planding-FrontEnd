import styled from "styled-components";
import logoImg from "../../assets/imgs/grayLogo.png"
const Footer=()=>{
    return(
        <Wrapper>
            <img src={logoImg} width="80px"/>
            <span>&copy; 2021. PLANDING</span>
        </Wrapper>
    )
}
export default Footer;
const Wrapper=styled.div`
    width: 100%;
    border-top: solid thin #e5e5e5;
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    color: #bcbcbc;
    font-weight: lighter;
    margin-top: 100px;
    padding: 20px;
`