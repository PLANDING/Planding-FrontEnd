import { useEffect, useRef } from 'react';

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

  return <div ref={wrapperRef}>{children}</div>;
};
export default Modal;
