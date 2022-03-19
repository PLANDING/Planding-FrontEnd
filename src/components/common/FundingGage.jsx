import styled from 'styled-components';
import { Flex } from './Flex';
import Gage from './Gage';
import coin from '../../assets/imgs/coin.png';

const FundingGage = ({ gage, fundingCnt, width }) => {
  return (
    <Container className="col-container">
      <div className="row-container">
        <Flex dir="row" alignCenter gap="5px">
          <span>펀딩</span>
          <img src={coin} width="16px" />
        </Flex>

        <span className="funding-cnt">{fundingCnt}</span>
      </div>

      <Gage gage={gage} width={width} />
    </Container>
  );
};
export default FundingGage;
const Container = styled.div`
  gap: 10px;
  .funding-cnt {
    color: #37c56e;
    margin-left: 5px;
  }
  max-width: 350px;
`;
