import styled from 'styled-components';
import DevStepContainer from './DevStepContainer';
import PlanStepContainer from './PlanStepContainer';

const StepContainer = () => {
  return (
    <Container className="col-container">
      <PlanStepContainer />
      <DevStepContainer />
    </Container>
  );
};
export default StepContainer;
const Container = styled.div`
  align-items: center;
  gap: 20px;
`;
