import styled from 'styled-components';

export const Flex = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.dir === 'row' ? 'row' : 'column')};
  ${(props) =>
    props.center &&
    `
    align-items: center;
    justify-content: center`};
  ${(props) =>
    props.alignCenter &&
    `
    align-items: center;`};
  ${(props) =>
    props.jCCenter &&
    `
    align-items: center;
    justify-content: center;`};
  gap: ${(props) => props.gap};
  ${(props) =>
    props.spaceBetween &&
    `
  justify-content: space-between;`};
  gap: ${(props) => props.gap};
  width: ${(props) => props.width};
`;
