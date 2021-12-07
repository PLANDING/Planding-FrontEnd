import styled from "styled-components";
import GreenLabel, { GrayLabel } from "./Label";

const Card = styled.div`
border:${props => props.border && `solid thin #37C56E`};
box-shadow: 5px 5px 20px 2px #00000015;
width: 100%;
border-radius: 15px;
padding:30px;
box-sizing: border-box;
`
export const Wrapper = styled.div`
  font-size: small;
  margin-top: 20px;
  font-weight: bold;
&>.row-container{
  gap: 10px;
  margin-top: 10px;
}
#funding-cnt{
  color: #37C56E;
}
`
export const ProjectHead = ({ label, idea, headilne, children, width, isDetail , onClickCard}) => {
  return (
    <Container width={width} isDetail={isDetail} >
      <div className="col-container" onClick={onClickCard}>
        <div className="row-container">
          {(label == "펀딩 마감" || label == "모집 완료") ? <GrayLabel>{label}</GrayLabel> : <GreenLabel>{label}</GreenLabel>}
          <h2>{idea}</h2>
        </div>
        <span>{headilne}</span>
      </div>
      <Side>{children}</Side>
    </Container>);
}
const Container = styled.div`
width: ${props => props.width ? props.width : "100%"};
display: flex;
flex-direction: row;
align-items: flex-start;
padding-bottom:${props => props.isDetail && "30px"};
&>.col-container>span{
  margin-top: ${props => props.isDetail && "30px"};
}
h2{
  margin: 0;
  margin-left: 10px;
}
`
const Side = styled.div`
display: flex;
flex: 1;
justify-content: flex-end;
`
export default Card;