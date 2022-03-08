import { useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import arrowImg from '../../assets/imgs/arrow.png';
import arrowUpImg from '../../assets/imgs/arrowUp.png';
import { currArr } from '../../assets/objects/Curriculum';
import DropMenu from './DropMenu';
import { Container, Label, StepBox, StepWrapper, Wrapper } from './PlanStepContainer';
import StepLabel from './StepLabel';

const DevStepContainer = () => {
  const { myProjectObj } = useSelector((state) => state.project);
  const curriculum = myProjectObj.curriculum;

  const curStep =
    curriculum <= 4 ? 1 : curriculum <= 8 ? 2 : curriculum <= 12 ? 3 : curriculum <= 17 ? 4 : 5;
  const [dropMenu, setDropMenu] = useState(curStep);
  const [isDrop, setIsDrop] = useState(false);
  const onClickDropHandler = () => {
    setIsDrop((p) => !p);
  };
  return (
    <DevContainer alignCenter dir="col" gap="20px">
      <Wrapper dir="row" alignCenter spaceBetween>
        <Label>개발 커리큘럼</Label>
        {isDrop ? (
          <img src={arrowUpImg} width="18px" onClick={onClickDropHandler} />
        ) : (
          <img src={arrowImg} width="18px" onClick={onClickDropHandler} />
        )}
      </Wrapper>
      {isDrop && (
        <StepWrapper alignCenter gap="10px">
          {currArr.map((curr, idx) => (
            <StepBox key={idx}>
              <StepLabel
                curStep={curStep}
                idx={idx}
                dropMenu={dropMenu}
                setDropMenu={setDropMenu}
              />
              {dropMenu == idx + 1 && <DropMenu currObj={curr} />}
            </StepBox>
          ))}
        </StepWrapper>
      )}
    </DevContainer>
  );
};
export default DevStepContainer;
const DevContainer = styled(Container)`
  background-color: #37c56e40;
  border: none;
`;
