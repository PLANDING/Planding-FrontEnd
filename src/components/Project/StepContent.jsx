import { useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { currArrDev, currArrPlan } from '../../assets/objects/Curriculum';
import { Flex } from '../common/Flex';
import DropMenu from './DropMenu';
import StepLabel from './StepLabel';
import arrowImg from '../../assets/imgs/arrow.png';
import arrowUpImg from '../../assets/imgs/arrowUp.png';

const StepContent = ({ type }) => {
  const { myProjectObj } = useSelector((state) => state.project);
  const curriculum = type === 'plan' ? myProjectObj.planCurriculum : myProjectObj.devCurriculum;

  const curStep =
    curriculum <= 4 ? 1 : curriculum <= 8 ? 2 : curriculum <= 12 ? 3 : curriculum <= 17 ? 4 : 5;
  const [dropMenu, setDropMenu] = useState(curStep);
  const [isDrop, setIsDrop] = useState(false);
  const currArr = type === 'plan' ? currArrPlan : currArrDev;
  const onClickDropHandler = () => {
    setIsDrop((p) => !p);
  };
  return (
    <Container alignCenter dir="col" gap="20px" type={type}>
      <Wrapper dir="row" alignCenter spaceBetween>
        <Label>{type === 'plan' ? '기획' : '개발'} 커리큘럼</Label>
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
              {dropMenu == idx + 1 && <DropMenu currObj={curr} type={type} />}
            </StepBox>
          ))}
        </StepWrapper>
      )}
    </Container>
  );
};
export default StepContent;
export const Container = styled(Flex)`
  padding: 20px;
  border-radius: 10px;
  width: 80%;
  box-shadow: 5px 5px 10px 5px #00000010;
  ${(props) =>
    props.type === 'dev' &&
    `background-color: #37c56e40;
    border: none;`}
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
  animation: fadein 1s;

  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
export const Wrapper = styled(Flex)`
  width: 100%;
  img {
    margin: 10px;
    cursor: pointer;
  }
`;
