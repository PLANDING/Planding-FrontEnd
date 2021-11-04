import GreenBtn from "./Button"
import { BtnBox } from "./JoinBtnBox"

const FundingBtnBox = ({ dDay }) => {
    return (
        <BtnBox className="col-container">
            <div className="col-container">
                <span id="d-day">D-{dDay}</span>
                <GreenBtn className="green-btn">펀딩 하기</GreenBtn>
            </div>
        </BtnBox>
    )

}
export default FundingBtnBox;