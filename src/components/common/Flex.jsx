import styled, { css } from 'styled-components';

export const Flex = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.dir === 'row' ? 'row' : 'column')};
  ${(props) =>
    props.center &&
    css`
      align-items: center;
      justify-content: center;
    `};
  ${(props) =>
    props.alignCenter &&
    css`
      align-items: center;
    `};
  ${(props) =>
    props.jCCenter &&
    css`
      justify-content: center;
    `};
  gap: ${(props) => props.gap};
  ${(props) =>
    props.spaceBetween &&
    css`
      justify-content: space-between;
    `};
  gap: ${(props) => props.gap};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
`;
