import styled from "styled-components"

const MemberForm = ({ fundingObj, setFundingObj, type }) => {
    const onClickPlus = (e) => {
        setFundingObj(prev => ({ ...prev, [type]: prev[type]++ }))
    }
    const onClickMinus = (e) => {
        if (fundingObj[type] > 0) {
            setFundingObj(prev => ({ ...prev, [type]: prev[type]-- }))
        }
    }
    return (
        <MemberBox className="row-container">
            <span>{type == "member_plan" ? "기획" : "개발"}</span>
            <div className="row-container">
                <button id="plan" onClick={onClickMinus}>-</button>
                <span id="green">{fundingObj[type]}</span>
                <button id="plan" onClick={onClickPlus}>+</button>
            </div>
        </MemberBox>
    );
}
const MemberBox = styled.div`
    border: solid thin #BCBCBC;
    padding: 5px 20px;
    border-radius: 5px;
&> div{
    margin-left: 20px;
    gap: 10px;
    font-weight: bold;
    font-size: large;
}
#green{
    color: #37C56E;
}`
export default MemberForm;