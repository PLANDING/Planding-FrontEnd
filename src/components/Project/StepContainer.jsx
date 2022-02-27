import { useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { currArr } from '../../assets/objects/Curriculum';
import DropMenu from './DropMenu';
import StepLabel from './StepLabel';

const StepContainer = () => {
  const { myProjectObj } = useSelector((state) => state.project);
  const curriculum = myProjectObj.curriculum;

  const curStep =
    curriculum <= 4 ? 1 : curriculum <= 8 ? 2 : curriculum <= 12 ? 3 : curriculum <= 17 ? 4 : 5;
  const [dropMenu, setDropMenu] = useState(curStep);

  return (
    <Container className="col-container">
      {currArr.map((curr, idx) => (
        <StepBox key={idx}>
          <StepLabel curStep={curStep} idx={idx} dropMenu={dropMenu} setDropMenu={setDropMenu} />
          {dropMenu == idx + 1 && <DropMenu currObj={curr} />}
        </StepBox>
      ))}
    </Container>
  );
};
export default StepContainer;
const Container = styled.div`
  align-items: center;
  gap: 20px;
`;
const StepBox = styled.div`
  width: 80%;
`;
