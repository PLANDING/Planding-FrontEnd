import axios from 'axios';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import styled, { css } from 'styled-components';
import GreenBtn, { GrayBtn } from './Button';
import { Flex } from './Flex';
const FundingBtnBox = ({ dDay, projectId, userId, isFunding, setIsFunding, content, isRow }) => {
  const { isLoggedin } = useSelector((state) => state.user);
  const history = useHistory();
  const onClickFunding = (event) => {
    event.stopPropagation();
    if (!isLoggedin && window.confirm('로그인 후, 이용 가능합니다.')) {
      history.push('/login');
    } else if (isLoggedin) {
      isFunding
        ? axios.delete(`/funding/${projectId}/${userId}`).then(() => setIsFunding((p) => !p))
        : axios.get(`/funding/${projectId}/${userId}`).then(() => setIsFunding((p) => !p));
    }
  };
  return (
    <BtnBox dir="column">
      <Wrapper isRow={isRow}>
        <span>
          {content}
          <Dday>D-{dDay}</Dday>
        </span>
        {isFunding ? (
          <GrayBtn onClick={onClickFunding}>펀딩 취소</GrayBtn>
        ) : (
          <GreenBtn onClick={onClickFunding} animation>
            펀딩 하기
          </GreenBtn>
        )}
      </Wrapper>
    </BtnBox>
  );
};
export default FundingBtnBox;
const Wrapper = styled.div`
  gap: 10px;
  align-items: center;
  button {
    padding: 10px 20px;
    font-size: medium;
  }
  display: flex;
  flex-direction: column;
  ${(props) =>
    props.isRow &&
    css`
      flex-direction: row;
      button {
        padding: 5px 20px;
      }
      gap: 15px;
      margin-bottom: 20px;
      & > span {
        font-weight: bold;
        color: #5f5f5f;
      }
    `}
`;
export const BtnBox = styled(Flex)`
  z-index: 99;
  align-items: flex-end;
  align-self: flex-end;
  flex: 1;
  span {
    text-align: center;
    font-weight: bold;
  }
`;
const Dday = styled.span`
  color: #37c56e;
  margin-left: 5px;
`;
