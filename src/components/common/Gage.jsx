import styled from "styled-components";
const Gage=({gage, width})=>{
    return(<GageContainer width={width} gage={gage}>
        <div></div>
    </GageContainer>)
}
const GageContainer= styled.div`
background-color: #EDF2F8;
width:${prop=>prop.width?prop.width:"300px"};
height: 10px;
&>div{
background-color: #37C56E;
width:${prop=>prop.gage&&prop.gage+"%"};
height: 10px;
}`
export default Gage;