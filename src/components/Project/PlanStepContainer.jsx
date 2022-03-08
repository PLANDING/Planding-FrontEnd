import { useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { currArr } from '../../assets/objects/Curriculum';
import { Flex } from '../common/Flex';
import DropMenu from './DropMenu';
import StepLabel from './StepLabel';
import arrowImg from '../../assets/imgs/arrow.png';
import arrowUpImg from '../../assets/imgs/arrowUp.png';

const PlanStepContainer = () => {
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
    <Container alignCenter dir="col" gap="20px">
      <Wrapper dir="row" alignCenter spaceBetween>
        <Label>기획 커리큘럼</Label>
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
    </Container>
  );
};
export default PlanStepContainer;
export const Container = styled(Flex)`
  padding: 20px;
  border-radius: 10px;
  width: 80%;
  box-shadow: 5px 5px 10px 5px #00000010;
`;
export const StepBox = styled.div`
  width: 100%;
`;
export const Label = styled.h4`
  margin: 0;
  padding: 10px;
  color: #37c56e;
`;
export const StepWrapper = styled(Flex)`
  width: 100%;
`;
export const Wrapper = styled(Flex)`
  width: 100%;
  img {
    margin: 10px;
    cursor: pointer;
  }
`;
