import styled from "styled-components";

const Select= ({label, optionArr}) => {

    return (
        <SelectBox className="select">
            <select>
                <option value="defalut" disabled selected hidden>{label}</option>
                {optionArr.map(option=><option value={option.value}>{option.key}</option>)}
            </select>
            <span id="sel-arrow"><img src="arrow.png" /></span>
        </SelectBox>)
}
export default Select;
const SelectBox = styled.div`
display: flex;
flex-direction: row;
align-items: center;
select{
appearance: none;
padding: 5px 10px;
padding-right: 40px;
border: solid thin #BCBCBC;
border-radius: 5px;
min-width: 100px;
color: #BCBCBC;
}
#sel-arrow img{
width: 15px;
transform: translate(-160%);
}
`