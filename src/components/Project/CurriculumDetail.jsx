import React, { useState } from 'react';
import styled from 'styled-components';
import { ReactComponent as plusIC } from '../../assets/imgs/curriculumDetail.svg';

const CurriculumDetail = ({ isDone, content, detail }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <StyledRoot>
      <StyledCurr isDone={isDone}>
        <span>{content}</span>
        <Plus onClick={toggle} isOpen={isOpen}></Plus>
      </StyledCurr>
      {isOpen ? <StyledDetail>{detail}</StyledDetail> : null}
    </StyledRoot>
  );
};

export default CurriculumDetail;

const StyledRoot = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;
const StyledCurr = styled.div`
  display: flex;
  align-items: center;

  & > span {
    color: ${(props) => props.isDone && '#37C56E'};
    font-size: 24px;
  }
`;

const Plus = styled(plusIC)`
  width: 30px;
  height: 30px;
  margin-left: 13px;
  cursor: pointer;
  & > circle {
    fill: ${({ isOpen }) => (isOpen ? 'rgb(55, 197, 110)' : '#B8B8B8')};
  }
`;

const StyledDetail = styled.div`
  display: flex;
  font-size: 18px;
  color: #9b9b9b;
  padding-top: 20px;
`;
