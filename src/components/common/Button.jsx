import styled from 'styled-components';

const GreenBtn = styled.button`
  border-radius: 5px;
  background-color: #37c56e;
  color: white;
  padding: 10px 20px;
  text-align: center;
  ${(props) =>
    props.animation &&
    `
  &:hover {
    background-color: #37c56e50;
    color: #37c56e;
  }
  transition: 0.3s;
  `}
`;
export const GreenBorderBtn = styled.button`
  border: solid thin #37c56e;
  border-radius: 5px;
  color: #37c56e;
  padding: 5px 15px;
  font-size: small;
  text-align: center;
`;
export const GrayBtn = styled.button`
  background-color: #edf2f8;
  padding: 5px 15px;
  border-radius: 5px;
  font-size: small;
  text-align: center;
`;
export const GrayBorderBtn = styled.button`
  border: solid thin #edf2f8;
  padding: 5px 15px;
  border-radius: 5px;
  font-size: small;
  text-align: center;
`;
export default GreenBtn;
