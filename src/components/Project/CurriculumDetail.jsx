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
      {isOpen && <StyledDetail>{detail}</StyledDetail>}
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
    font-size: medium;
  }
`;

const Plus = styled(plusIC)`
  width: 24px;
  height: 24px;
  margin-left: 13px;
  cursor: pointer;
  & > circle {
    transition: 0.3s;
    fill: ${({ isOpen }) => (isOpen ? '#37C56E' : '#B8B8B8')};
  }
  &:hover {
    & > circle {
      fill: #37c56e;
    }
  }
`;

const StyledDetail = styled.div`
  display: flex;
  font-size: medium;
  font-weight: lighter;
  color: #9b9b9b;
  padding-top: 20px;
  animation: fadein 0.3s;
  white-space: pre-line;
  & > div > a {
    color: #37c56e;
    &:hover {
      font-weight: bold;
    }
  }

  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
