import styled from 'styled-components';
const Gage = ({ gage, width }) => {
  return (
    <Wrapper className="row-container">
      <GageContainer width={width} gage={gage}>
        <div></div>
      </GageContainer>
      <span>{gage}%</span>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  width: 100%;
  gap: 10px;
  color: #37c56e;
  font-weight: bold;
  font-size: small;
  justify-content: center;
`;
const GageContainer = styled.div`
  background-color: #edf2f8;
  width: ${(prop) => (prop.width ? prop.width : '300px')};
  height: 10px;
  & > div {
    background-color: #37c56e;
    width: ${(prop) => prop.gage && prop.gage + '%'};
    height: 10px;
  }
`;
export default Gage;
