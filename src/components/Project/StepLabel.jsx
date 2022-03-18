import styled from 'styled-components';
import arrowImg from '../../assets/imgs/arrow.png';
import arrowUpImg from '../../assets/imgs/arrowUp.png';

const StepLabel = ({ curStep, idx, dropMenu, setDropMenu }) => {
  const isDropStep = dropMenu == idx + 1;

  const onClickDropHandler = (event) => {
    dropMenu == event.target.id ? setDropMenu(0) : setDropMenu(event.target.id);
  };
  return (
    <Container className="row-container" active={isDropStep}>
      <Label isCurStep={curStep >= idx + 1} idx={idx}>
        {idx + 1} step
      </Label>
      {isDropStep ? (
        <img src={arrowUpImg} width="15px" id={idx + 1} onClick={onClickDropHandler} />
      ) : (
        <img src={arrowImg} width="15px" id={idx + 1} onClick={onClickDropHandler} />
      )}
    </Container>
  );
};
export default StepLabel;
const Container = styled.div`
  border: solid thin #37c56e80;
  border-radius: 10px;
  ${(props) =>
    props.active &&
    `
        border-bottom:none;
        border-radius: 10px 10px 0 0;
    `}
  padding: 20px 25px;
  img {
    cursor: pointer;
  }
  background-color: white;
`;
const Label = styled.div`
  flex: 1;
  font-weight: bold;
  color: ${(props) => (props.isCurStep ? '#37C56E' : '#9B9B9B')};
`;
