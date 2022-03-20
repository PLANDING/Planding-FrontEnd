import { useEffect, useRef } from 'react';
import styled from 'styled-components';

const Modal = ({ children, setIsOpen }) => {
  const wrapperRef = useRef(null);
  /* 외부영역 클릭 감지 */
  const handleClickOutside = (event) => {
    if (wrapperRef && !wrapperRef.current?.contains(event.target)) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  };
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  });

  return <Container ref={wrapperRef}>{children}</Container>;
};
export default Modal;

const Container = styled.div`
  position: absolute;
`;
