import styled from "styled-components";
import GreenLabel from "./Label";

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
export const ProjectHead = ({ label, idea, headilne, children }) => {
  return(
  <Container className="row-container top-wrapper">
    <div className="col-container">
      <div className="row-container">
        <GreenLabel>{label}</GreenLabel>
        <h2>{idea}</h2>
      </div>
      <span>{headilne}</span>
    </div>
    <div className="side">{children}</div>
  </Container>);
}
const Container = styled.div`
width: 100%;
h2{
  margin: 0;
  margin-left: 10px;
}
.side{
  display: flex;
  flex: 1;
  justify-content: flex-end;
}
`
export default Card;