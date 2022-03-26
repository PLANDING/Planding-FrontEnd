import { faSlidersH } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import styled from 'styled-components';
import { GrayBorderBtn } from './Button';
import FilterBox from './FilterBox';
import Modal from './Modal';

const FilterTool = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Container>
        <GrayBorderBtn onClick={() => setIsOpen(true)}>
          <FontAwesomeIcon icon={faSlidersH} />
          카테고리
        </GrayBorderBtn>
      </Container>
      {isOpen && (
        <Modal {...{ setIsOpen }} abs>
          <FilterBox {...{ setIsOpen }} />
        </Modal>
      )}
    </>
  );
};
export default FilterTool;
const Container = styled.div`
  width: 80%;
  display: flex;
  justify-content: flex-start;
  padding: 20px 0;
  button {
    display: flex;
    align-items: center;
    gap: 10px;
  }
`;
