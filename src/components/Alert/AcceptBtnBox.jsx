import styled from "styled-components";
import GreenBtn, { GrayBtn } from "../common/Button";

const AcceptBtnBox = ({dDay}) => {
    return (
        <Wrppaer className="col-container">
            <div className="col-container">
                <span id="d-day">D-{dDay}</span>
                <GreenBtn>수락</GreenBtn>
                <GrayBtn>거절</GrayBtn>
                </div>
        </Wrppaer>
    )
}
export default AcceptBtnBox;
const Wrppaer = styled.div`
align-items: flex-end;
flex: 1;
align-self: flex-end;
&>.col-container{
gap: 10px;
}
button{
    padding: 10px 20px;
    font-size: medium;
    width: 100px;
}
span{
    text-align: center;
    font-weight: bold;
    color: #5F5F5F;
}
#d-day{
color: #37C56E;
margin-left: 5px;
}
`